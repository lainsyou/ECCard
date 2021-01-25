<template>
  <div>
    <canvas id="base" width="672px" height="384ox" />
    <canvas
      id="face1"
      width="140px"
      height="140ox"
      style="top: 192px; left: 26px; border-radius: 15px"
    />
    <canvas
      id="face2"
      width="193px"
      height="193ox"
      style="top: 82px; left: 417px; border-radius: 15px"
    />

    <div id="owner" style="width: 155px; top: 205px; left: 185px">
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
    <div id="name" style="width: 135px; top: 100px; left: 278px">
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
    <div id="code" style="width: 185px; top: 100px; left: 22px">
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

    <v-btn
      icon
      absolute
      @click="opneFile('#face1')"
      style="top: 245px; left: 78px"
      color="white"
    >
      <v-icon x-large>mdi-camera</v-icon>
    </v-btn>

    <v-btn
      icon
      absolute
      @click="opneFile('#face2')"
      style="top: 163px; left: 496px"
      color="white"
    >
      <v-icon x-large>mdi-camera</v-icon>
    </v-btn>

    <CropDialog ref="cropDialog1"></CropDialog>
    <CropDialog ref="cropDialog2"></CropDialog>
    <loading
      :active="isLoading"
      :opacity="0.8"
      :can-cancel="false"
      :is-full-page="true"
    ></loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CropDialog from "@/components/CropDialog.vue";
import GIF from "gif.js";

@Component({
  components: { CropDialog },
})
export default class Red extends Vue {
  base!: HTMLCanvasElement;
  face1!: HTMLCanvasElement;
  face2!: HTMLCanvasElement;
  blobs: Blob[] = [];
  parts: Blob[] = [];
  blobSize = {} as {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  uploadTarget = "";
  baseUrl = "/ECCard/img/EC_001.jpg";
  //baseUrl = "/img/test.png";

  owner = "";
  name = "";
  code = "";

  ownerColor = "black";
  nameColor = "red";
  codeColor = "white";

  // ローディング
  private isLoading = false;

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

    this.changeStyle();
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
      } else if (file.type.match("video.*")) {
        this.addVideoFile(file);
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

        // クロップダイアログ表示
        this.showCropDialog(blob);
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
    this.isLoading = true;

    // canvasに画像を貼り付ける
    const image = new Image();
    image.src = this.baseUrl;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);

      ctx.font = "bold 22px sans-serif";
      ctx.fillStyle = this.ownerColor;
      ctx.fillText(this.owner, 231, 304);
      ctx.fillStyle = this.nameColor;
      ctx.fillText(this.name, 348, 175);
      ctx.fillStyle = this.codeColor;
      ctx.fillText(this.code, 30, 173);

      ctx.beginPath();
      this.drawRoundRectImage(ctx, 32, 240, 175, 175, 15);
      this.drawRoundRectImage(ctx, 522, 104, 240, 240, 15);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(this.face1, 32, 240, 175, 175);
      //ctx.drawImage(this.face2, 522, 104, 240, 240);

      this.parts = [];
      this.createParts(canvas, ctx);

      /*
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
      */
    };
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

  private createParts(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) {
    if (this.blobs.length === 0) {
      // エンコードを開始
      this.downloadAnimeGif();
      return;
    }

    const blob = this.blobs.shift();
    const image = new Image();
    image.src = window.URL.createObjectURL(blob);
    image.onload = () => {
      //const sx = this.blobSize.left as number,
      //  sy = this.blobSize.top as number,
      //  sw = this.blobSize.width as number,
      //  sh = this.blobSize.height as number;
      ctx.drawImage(
        image,
        0,
        (image.height - image.width) / 2,
        image.width,
        image.width,
        522,
        104,
        240,
        240
      );

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
      this.parts.push(blob);

      this.createParts(canvas, ctx);
    };
  }

  private downloadAnimeGif() {
    // GIFエンコーダのインスタンスを作る
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: 840,
      height: 480,
      workerScript: "/gif.worker.js",
    });

    // エンコード完了時のコールバックを設定
    gif.on("finished", (blob) => {
      this.isLoading = false;
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "eccard.png";
      link.click();
    });

    this.shiftParts(gif);
  }

  private shiftParts(gif: GIF) {
    if (this.parts.length === 0) {
      // エンコードを開始
      gif.render();
      return;
    }

    const blob = this.parts.shift();
    const image = new Image();
    image.src = window.URL.createObjectURL(blob);
    image.onload = () => {
      gif.addFrame(image);
      this.shiftParts(gif);
    };
  }

  /**
   * 動画から画像追加
   * @param {File} file  File
   */
  private addVideoFile(file: File) {
    // 動画
    const video = document.createElement("video");
    video.setAttribute("playsinline", "true");
    video.muted = true;
    video.autoplay = true;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("CanvasRenderingContext2D unsupported.");
      return;
    }
    this.isLoading = true;

    //video.onloadeddata = () => {
    video.addEventListener("loadeddata", (event) => {
      console.log(event.type);

      // Video停止
      video.pause();

      // Canvasサイズ設定
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      let seconds = 0;
      const blobs: Blob[] = [];

      const duration = video.duration;
      if (duration == 0) {
        this.isLoading = false;
        alert("duration error. duration = " + duration);
        return;
      }
      video.currentTime = duration;

      //video.ontimeupdate = () => {
      video.addEventListener("timeupdate", async (event) => {
        console.log(event.type);

        // canvasに画像を貼り付ける
        ctx.drawImage(video, 0, 0);

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
        blobs.push(blob);

        // 単位時間ごとに静止画を切り出す
        seconds += 0.5;
        if (seconds < duration) {
          video.currentTime = seconds;
        } else {
          this.blobs = blobs;
          this.isLoading = false;

          // クロップダイアログ表示
          //this.showCropDialog(blob);
          const canvas = this.$el.querySelector(
            this.uploadTarget
          ) as HTMLCanvasElement;
          const img = new Image();
          img.src = window.URL.createObjectURL(this.blobs[0]);
          img.onload = () => {
            canvas
              .getContext("2d")
              ?.drawImage(
                img,
                0,
                (img.height - img.width) / 2,
                img.width,
                img.width,
                0,
                0,
                canvas.width,
                canvas.height
              );
          };
        }
      });

      video.currentTime = 0;
    });

    // 読込
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("safari") != -1) {
      // Safari
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const buffer = new Uint8Array(fileReader.result as ArrayBuffer);
        const blob = new Blob([buffer], { type: file.type as string });
        video.src = window.URL.createObjectURL(blob);
      };
      fileReader.readAsArrayBuffer(file);
    } else {
      // 上記以外
      video.src = window.URL.createObjectURL(file);
    }
  }

  /**
   * クロップダイアログ表示
   * @param {Blob} blob  Blob
   */
  private showCropDialog(blob: Blob) {
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
        this.blobSize = dict.data;
        console.log(this.blobSize);

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
      }
    });
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
  font-size: 18px;
}

#name {
  position: absolute;
  font-weight: bold;
  font-size: 18px;
}

#code {
  position: absolute;
  font-weight: bold;
  font-size: 18px;
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
</style>
