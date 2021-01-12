<template>
  <div>
    <canvas id="base" width="672px" height="384ox" />
    <canvas
      id="face1"
      width="152px"
      height="152ox"
      style="top: 27px; left: 27px; border-radius: 90px"
    />
    <canvas
      id="face2"
      width="191px"
      height="191ox"
      style="top: 113px; left: 351px; border-radius: 25px"
    />

    <div id="owner" style="width: 150px; top: 36px; left: 510px">
      <v-text-field
        v-model="owner"
        placeholder="Owner"
        hide-details=""
        class="owner-field"
        :color="ownerColor"
        :style="{ color: ownerColor }"
        dense
        ><template slot="append-outer">
          <input
            type="color"
            v-model="ownerColor"
            style="width: 20px; height: 25px; margin: 0; padding: 0"
            v-on:change="changeStyle" /></template
      ></v-text-field>
    </div>
    <div id="name" style="width: 155px; top: 61px; left: 505px">
      <v-text-field
        v-model="name"
        placeholder="Name"
        hide-details
        class="name-field"
        :color="nameColor"
        :style="{ color: nameColor }"
        dense
        ><template slot="append-outer">
          <input
            type="color"
            v-model="nameColor"
            style="width: 20px; height: 25px; margin: 0; padding: 0"
            v-on:change="changeStyle" /></template
      ></v-text-field>
    </div>
    <div id="code" style="width: 200px; top: 86px; left: 460px">
      <v-text-field
        v-model="code"
        placeholder="Code"
        hide-details
        class="code-field"
        :color="codeColor"
        :style="{ color: codeColor }"
        dense
        ><template slot="append-outer">
          <input
            type="color"
            v-model="codeColor"
            style="width: 20px; height: 25px; margin: 0; padding: 0"
            v-on:change="changeStyle" /></template
      ></v-text-field>
    </div>

    <v-btn
      icon
      absolute
      @click="opneFile('#face1')"
      style="top: 90px; left: 85px"
      color="red lighten-1"
    >
      <v-icon x-large>mdi-camera</v-icon>
    </v-btn>

    <v-btn
      icon
      absolute
      @click="opneFile('#face2')"
      style="top: 193px; left: 430px"
      color="red lighten-1"
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
  baseUrl = "ECCard/img/EC_002.jpg";

  owner = "";
  name = "";
  code = "";

  ownerColor = "black";
  nameColor = "black";
  codeColor = "black";

  $refs!: {
    cropDialog1: CropDialog;
    cropDialog2: CropDialog;
  };

  get styles() {
    return {
      "--ownerColor": this.ownerColor,
      "--nameColor": this.nameColor,
      "--codeColor": this.codeColor,
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
        canvas.width = image.width;
        canvas.height = image.height;
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

    // Canvas取得
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("CanvasRenderingContext2D unsupported.");
      return;
    }
    canvas.width = 840;
    canvas.height = 480;

    // canvasに画像を貼り付ける
    ctx.drawImage(this.base, 0, 0);
    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = this.ownerColor;
    ctx.fillText(this.owner, 510, 60);
    ctx.fillStyle = this.nameColor;
    ctx.fillText(this.name, 505, 86);
    ctx.fillStyle = this.codeColor;
    ctx.fillText(this.code, 460, 110);

    ctx.beginPath();
    this.drawRoundRectImage(ctx, 27, 27, 152, 152, 76);
    this.drawRoundRectImage(ctx, 352, 114, 191, 191, 25);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(this.face1, 27, 27);
    ctx.drawImage(this.face2, 352, 114);

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

  drawRoundRectImage(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ) {
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arc(x + w - r, y + r, r, Math.PI * (3 / 2), 0, false);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1 / 2), false);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, Math.PI * (1 / 2), Math.PI, false);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3 / 2), false);
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

#owner {
  position: absolute;
  font-weight: bold;
  font-size: 20px;
}

#name {
  position: absolute;
  font-weight: bold;
  font-size: 20px;
}

#code {
  position: absolute;
  font-weight: bold;
  font-size: 20px;
}

.theme--light.v-input.owner-field input {
  color: var(--ownerColor);
  line-height : 18px;
}

.theme--light.v-input.name-field input {
  color: var(--nameColor);
  line-height : 18px;
}

.theme--light.v-input.code-field input {
  color: var(--codeColor);
  line-height : 18px;
}
</style>
