<template>
  <div>
    <canvas id="base" width="700px" height="400ox" />
    <canvas id="face1" width="150px" height="150ox" />
    <canvas id="face2" width="150px" height="150ox" />

    <div id="owner">
      <v-text-field
        v-model="owner"
        placeholder="Owner"
        hide-details=""
        class="owner-field"
        :color="ownerColor"
        :style="{ color: ownerColor }"
        ><template slot="append-outer">
          <input
            type="color"
            v-model="ownerColor"
            style="width: 20px; height: 25px; margin: 0; padding: 0"
            v-on:change="changeStyle" /></template
      ></v-text-field>
    </div>
    <div id="name">
      <v-text-field
        v-model="name"
        placeholder="Name"
        hide-details
        class="name-field"
        :color="nameColor"
        :style="{ color: nameColor }"
        ><template slot="append-outer">
          <input
            type="color"
            v-model="nameColor"
            style="width: 20px; height: 25px; margin: 0; padding: 0"
            v-on:change="changeStyle" /></template
      ></v-text-field>
    </div>
    <div id="code">
      <v-text-field
        v-model="code"
        placeholder="Code"
        hide-details
        class="code-field"
        :color="codeColor"
        :style="{ color: codeColor }"
        ><template slot="append-outer">
          <input
            type="color"
            v-model="codeColor"
            style="width: 20px; height: 25px; margin: 0; padding: 0"
            v-on:change="changeStyle" /></template
      ></v-text-field>
    </div>
    <div id="message">
      <v-textarea
        v-model="message"
        hide-details
        class="message-field"
        :color="messageColor"
        :style="{ color: messageColor, fontSize: messageFontSize + 'px' }"
        ><template slot="append-outer">
          <input
            type="color"
            v-model="messageColor"
            style="width: 20px; height: 25px; margin: 0; padding: 0"
            v-on:change="changeStyle" /></template
      ></v-textarea>
      <input
        type="number"
        min="8"
        max="48"
        step="1"
        v-model="messageFontSize"
        style="
          position: absolute;
          top: 20px;
          left: 240px;
          width: 35px;
          height: 25px;
          margin: 0;
          padding: 0;
        "
        v-on:change="changeStyle"
      />
    </div>

    <v-btn
      icon
      absolute
      @click="opneFile('#face1')"
      style="top: 175px; left: 392px"
    >
      <v-icon x-large>mdi-camera</v-icon>
    </v-btn>

    <v-btn
      icon
      absolute
      @click="opneFile('#face2')"
      style="top: 175px; left: 567px"
    >
      <v-icon x-large>mdi-camera</v-icon>
    </v-btn>

    <CropDialog ref="cropDialog1"></CropDialog>
    <CropDialog ref="cropDialog2"></CropDialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CropDialog from "@/components/CropDialog.vue";

@Component({
  components: { CropDialog },
})
export default class Gold extends Vue {
  base!: HTMLCanvasElement;
  face1!: HTMLCanvasElement;
  face2!: HTMLCanvasElement;
  uploadTarget = "";
  baseUrl = "ECCard/img/EC_000P.png";

  owner = "";
  name = "";
  code = "";
  message = "";

  ownerColor = "black";
  nameColor = "black";
  codeColor = "black";
  messageColor = "black";
  messageFontSize = 20;

  $refs!: {
    cropDialog1: CropDialog;
    cropDialog2: CropDialog;
  };

  get styles() {
    return {
      "--ownerColor": this.ownerColor,
      "--nameColor": this.nameColor,
      "--codeColor": this.codeColor,
      "--messageColor": this.messageColor,
      "--messageFontSize": this.messageFontSize,
    };
  }

  private changeStyle() {
    (this.$el.querySelector(
      ".theme--light.v-input.owner-field input"
    ) as HTMLInputElement).style.color = this.ownerColor;
    (this.$el.querySelector(
      ".theme--light.v-input.name-field input"
    ) as HTMLInputElement).style.color = this.nameColor;
    (this.$el.querySelector(
      ".theme--light.v-input.code-field input"
    ) as HTMLInputElement).style.color = this.codeColor;
    (this.$el.querySelector(
      ".theme--light.v-input.message-field textarea"
    ) as HTMLInputElement).style.color = this.messageColor;
    (this.$el.querySelector(
      ".theme--light.v-input.message-field textarea"
    ) as HTMLInputElement).style.lineHeight = this.messageFontSize + "px";
  }

  mounted() {
    this.base = this.$el.querySelector("#base") as HTMLCanvasElement;
    this.face1 = this.$el.querySelector("#face1") as HTMLCanvasElement;
    this.face2 = this.$el.querySelector("#face2") as HTMLCanvasElement;
    this.setBaseImage();

    this.$router.app.$off("download");
    this.$router.app.$on("download", this.download);

    this.owner = this.$store.state.owner;
    this.name = this.$store.state.name;
    this.code = this.$store.state.code;
    this.message = this.$store.state.message;
  }

  private setBaseImage() {
    // 画像表示
    const ctx = this.base.getContext("2d");
    const image = new Image();
    image.src = this.baseUrl;
    image.onload = () => {
      // 画像貼付
      ctx?.clearRect(0, 0, this.base.width, this.base.height);
      ctx?.drawImage(image, 0, 0, this.base.width, this.base.height);
    };
  }

  /**
   * ファイルダイアログを開く
   */
  private opneFile(uploadTarget: string) {
    this.uploadTarget = uploadTarget;
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.addEventListener("change", this.addFile, false);
    input.click();
  }

  /**
   * ファイル追加
   * @param {Event} event  Event
   */
  private addFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    for (const file of files) {
      console.log(file);

      // 画像ファイルチェック
      if (file.type.match("image.*")) {
        this.addImageFile(file);
      }
    }
  }

  /**
   * 画像追加
   * @param {File} file  File
   */
  private addImageFile(file: File) {
    // Canvas取得
    //const canvas = this.$el.querySelector(
    //  this.uploadTarget
    //) as HTMLCanvasElement;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("CanvasRenderingContext2D unsupported.");
      return;
    }

    // ファイル読込
    const reader = new FileReader();
    reader.onload = () => {
      // 読込
      const result = reader.result;
      if (!result) {
        alert("FileReader failed.");
        return;
      }

      // 画像表示
      const image = new Image();
      image.src = result as string;
      image.onload = () => {
        // 画像貼付
        const saw = screen.availWidth;
        const sah = screen.availHeight * 0.7;
        let w = image.width;
        let h = image.height;
        if (w > saw || h > sah) {
          const pw = saw / w;
          const ph = sah / h;
          const p = Math.min(pw, ph);
          w = Math.floor(w * p);
          h = Math.floor(h * p);
        }
        console.log(w);
        console.log(h);
        canvas.width = w;
        canvas.height = h;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // BlobオブジェクトにアクセスできるURLを生成
        const base64 = canvas.toDataURL("image/png");
        // Base64からバイナリへ変換
        const bin = atob(base64.replace(/^.*,/, ""));
        const buffer = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) {
          buffer[i] = bin.charCodeAt(i);
        }

        // Blobを作成
        const blob = new Blob([buffer.buffer], {
          type: "image/png",
        });

        let cropDialog = this.$refs.cropDialog1;
        if (this.uploadTarget === "#face2") {
          cropDialog = this.$refs.cropDialog2;
        }

        // ダイアログ表示
        cropDialog.show(blob);
        cropDialog.show(blob).then((res) => {
          const dict = res as {
            result: boolean;
            data: { height: number; left: number; top: number; width: number };
            url: string;
          };

          console.log(dict);
          if (dict.result) {
            const canvas = this.$el.querySelector(
              this.uploadTarget
            ) as HTMLCanvasElement;
            const img = new Image();
            img.src = dict.url;
            img.onload = () => {
              canvas
                .getContext("2d")
                ?.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            /*
            const canvas = this.$el.querySelector(
              this.uploadTarget
            ) as HTMLCanvasElement;
            const ctx = canvas.getContext("2d");
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
            const left = Math.floor(dict.data.left);
            const top = Math.floor(dict.data.top);
            const width = Math.floor(dict.data.width);
            const height = Math.floor(dict.data.height);
            console.log(left);
            console.log(top);
            console.log(width);
            console.log(height);
            ctx?.drawImage(
              image,
              left,
              top,
              width,
              height,
              0,
              0,
              canvas.width,
              canvas.height
            );
            */
          }
        });
      };
    };
    reader.readAsDataURL(file);
  }

  /**
   * ダウンロード
   * @param {Photo} photo  Photo
   */
  private download() {
    this.$store.dispatch("setOwner", { owner: this.owner });
    this.$store.dispatch("setName", { name: this.name });
    this.$store.dispatch("setCode", { code: this.code });
    this.$store.dispatch("setMessage", { message: this.message });

    // Canvas取得
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("CanvasRenderingContext2D unsupported.");
      return;
    }
    canvas.width = 700;
    canvas.height = 400;

    // canvasに画像を貼り付ける
    ctx.drawImage(this.base, 0, 0);
    ctx.drawImage(this.face1, 335, 110);
    ctx.drawImage(this.face2, 510, 110);
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = this.ownerColor;
    ctx.fillText(this.owner, 160, 80);
    ctx.fillStyle = this.nameColor;
    ctx.fillText(this.name, 160, 115);
    ctx.fillStyle = this.codeColor;
    ctx.fillText(this.code, 160, 150);

    ctx.font = `bold ${this.messageFontSize}px sans-serif`;
    ctx.fillStyle = this.messageColor;
    //ctx.fillText(this.message, 30, 190);
    // 1行ずつ描画
    let idx = 1;
    for (const value of this.message.split("\n")) {
      ctx.fillText(value, 30, 160 + idx * this.messageFontSize * 1.5);
      idx += 1;
    }

    // BlobオブジェクトにアクセスできるURLを生成
    const base64 = canvas.toDataURL("image/png");
    // Base64からバイナリへ変換
    const bin = atob(base64.replace(/^.*,/, ""));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }

    // Blobを作成
    const blob = new Blob([buffer.buffer], {
      type: "image/png",
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "eccard.png";
    link.click();
  }
}
</script>

<style lang="stylus" scoped>
canvas {
  position: absolute;
  margin: 0px;
  padding: 0px;
}

#base {
  top: 0px;
  left: 0px;
}

#face1 {
  top: 110px;
  left: 335px;
}

#face2 {
  top: 110px;
  left: 510px;
}

#owner {
  position: absolute;
  width: 160px;
  top: 40px;
  left: 160px;
  font-weight: bold;
}

#name {
  position: absolute;
  width: 160px;
  top: 75px;
  left: 160px;
  font-weight: bold;
}

#code {
  position: absolute;
  width: 160px;
  top: 110px;
  left: 160px;
  font-weight: bold;
}

#message {
  position: absolute;
  width: 295px;
  height: 135px;
  top: 150px;
  left: 30px;
  margin: 0px;
  padding: 0px;
  font-weight: bold;
}

.theme--light.v-input.owner-field input {
  color: var(--ownerColor);
}

.theme--light.v-input.name-field input {
  color: var(--nameColor);
}

.theme--light.v-input.code-field input {
  color: var(--codeColor);
}

.theme--light.v-input.message-field textarea {
  color: var(--messageColor);
  line-height: var(--messageFontSize) px;
}
</style>