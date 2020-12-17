<template>
  <v-app>
    <v-main>
      <canvas id="base" width="700px" height="400ox" />
      <canvas id="face1" width="150px" height="150ox" />
      <canvas id="face2" width="150px" height="150ox" />

      <div id="owner">
        <v-text-field
          v-model="owner"
          placeholder="Owner"
          hide-details
          :clearable="true"
        ></v-text-field>
      </div>
      <div id="name">
        <v-text-field
          v-model="name"
          placeholder="Name"
          hide-details
          :clearable="true"
        ></v-text-field>
      </div>
      <div id="code">
        <v-text-field
          v-model="code"
          placeholder="Code"
          hide-details
          :clearable="true"
        ></v-text-field>
      </div>
      <div id="message">
        <v-textarea
          v-model="message"
          hide-details
          :clearable="true"
        ></v-textarea>
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

      <div style="position: absolute; top: 410px">
        <v-btn icon x-large @click="download()">
          ECオーナーカードダウンロード<v-icon>mdi-download</v-icon>
        </v-btn>

        <br />
        ※ECオーナーカードは、あきらとぅ～ん様の画像を使用させていただいています。
        <br />
        ※オーナー画像、EC画像は150×150のものを使用してください。（縮小はします。トリミングは未対応です）
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {
  base!: HTMLCanvasElement;
  face1!: HTMLCanvasElement;
  face2!: HTMLCanvasElement;
  uploadTarget = "";
  owner = "";
  name = "";
  code = "";
  message = "";

  mounted() {
    this.base = this.$el.querySelector("#base") as HTMLCanvasElement;
    this.face1 = this.$el.querySelector("#face1") as HTMLCanvasElement;
    this.face2 = this.$el.querySelector("#face2") as HTMLCanvasElement;

    // 画像表示
    const ctx = this.base.getContext("2d");
    const image = new Image();
    image.src = "img/EC_000.png";
    image.onload = () => {
      // 画像貼付
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
    const canvas = this.$el.querySelector(
      this.uploadTarget
    ) as HTMLCanvasElement;
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
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    };
    reader.readAsDataURL(file);
  }

  /**
   * ダウンロード
   * @param {Photo} photo  Photo
   */
  private download() {
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
    ctx.fillText(this.owner, 160, 80);
    ctx.fillText(this.name, 160, 115);
    ctx.fillText(this.code, 160, 150);
    //ctx.fillText(this.message, 30, 190);
    // 1行ずつ描画
    let idx = 0;
    for (const value of this.message.split("\n")) {
      ctx.fillText(value, 30, 190 + idx * 30);
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

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

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
  width: 150px;
  top: 40px;
  left: 160px;
  font-weight: bold;
}

#name {
  position: absolute;
  width: 150px;
  top: 75px;
  left: 160px;
  font-weight: bold;
}

#code {
  position: absolute;
  width: 150px;
  top: 110px;
  left: 160px;
  font-weight: bold;
}

#message {
  position: absolute;
  width: 275px;
  height: 135px;
  top: 150px;
  left: 30px;
  margin: 0px;
  padding: 0px;
  font-weight: bold;
}
</style>
