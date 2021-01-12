<template>
  <v-dialog v-model="dialog" :max-width="options.width" fullscreen>
    <v-card class="px-2 pt-2">
      <v-card-actions>
        <span style="font-size:x-small;">※不具合で一度選択すると画像変更不可。<br />一度、他のデザインに変更するといける。</span>
        <v-spacer></v-spacer>
        <v-btn
          v-show="options.cancel"
          color="primary"
          dark
          width="120px"
          @click.native="cancel"
          >{{ options.cancel }}</v-btn
        >
        <v-btn @click.native="agree" color="primary" dark width="120px">{{
          options.agree
        }}</v-btn>
      </v-card-actions>

      <vue-cropper
        ref="cropper"
        :src="imageUri"
        :aspectRatio="1"
      >
      </vue-cropper>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

@Component({
  components: {
    VueCropper,
  },
})
export default class CropDialog extends Vue {
  dialog = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private resolve!: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private reject!: any;
  options = {};
  imageUri = "";

  public isShow(): boolean {
    return this.dialog;
  }

  public show(blob: Blob) {
    return this.showOptions(null, blob);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public showOptions(options: any, blob: Blob) {
    this.options = {
      color: "primary",
      width: 800,
      agree: "OK",
      cancel: "キャンセル",
    };
    this.imageUri = window.URL.createObjectURL(blob);

/*
    window.setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cropper = this.$refs.cropper as any;
      //cropper.reset();
      //cropper.clear();
      //this.imageUri = window.URL.createObjectURL(blob);
      cropper.src = window.URL.createObjectURL(blob);
    }, 100);
    */

    this.dialog = true;
    this.options = Object.assign(this.options, options);

    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  private agree() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cropper = this.$refs.cropper as any;
    const canvas = cropper.getCroppedCanvas({
      width: 150,
      height: 150,
    });
    const data = cropper.getCropBoxData();

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

    this.resolve({
      result: true,
      data: data,
      url: window.URL.createObjectURL(blob),
    });
    this.dialog = false;
  }

  private cancel() {
    this.resolve({
      result: false,
    });
    this.dialog = false;
  }
}
</script>