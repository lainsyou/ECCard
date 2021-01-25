<template>
  <v-app id="app">
    <v-container id="container" fluid>
      <v-app-bar color="deep-purple" dark dense>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title
          >ECオーナーカード produced by
          あきらとぅ〜ん(@Akira_Yasai)</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-btn icon v-on:click="download">
          <v-icon>mdi-download</v-icon>保存
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        color="deep-purple"
        v-model="drawer"
        absolute
        temporary
      >
        <v-list nav dense>
          <v-subheader class="white--text">デザイン選択</v-subheader>
          <v-list-item-group v-model="item">
            <v-list-item :to="{ name: 'Blue' }">
              <v-list-item-icon>
                <v-icon v-if="item == 0" color="white"
                  >mdi-check-circle-outline</v-icon
                >
                <v-icon v-else color="white"
                  >mdi-checkbox-blank-circle-outline</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content class="white--text"
                >Blue</v-list-item-content
              >
            </v-list-item>

            <v-list-item :to="{ name: 'Pink' }">
              <v-list-item-icon>
                <v-icon v-if="item == 1" color="white"
                  >mdi-check-circle-outline</v-icon
                >
                <v-icon v-else color="white"
                  >mdi-checkbox-blank-circle-outline</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content class="white--text"
                >Pink</v-list-item-content
              >
            </v-list-item>

            <v-list-item :to="{ name: 'Red' }">
              <v-list-item-icon>
                <v-icon v-if="item == 2" color="white"
                  >mdi-check-circle-outline</v-icon
                >
                <v-icon v-else color="white"
                  >mdi-checkbox-blank-circle-outline</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content class="white--text">Red</v-list-item-content>
            </v-list-item>

            <v-list-item :to="{ name: 'Gold' }">
              <v-list-item-icon>
                <v-icon v-if="item == 3" color="white"
                  >mdi-check-circle-outline</v-icon
                >
                <v-icon v-else color="white"
                  >mdi-checkbox-blank-circle-outline</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content class="white--text"
                >Gold</v-list-item-content
              >
            </v-list-item>

            <v-list-item :to="{ name: 'RedAnime' }">
              <v-list-item-icon>
                <v-icon v-if="item == 4" color="white"
                  >mdi-check-circle-outline</v-icon
                >
                <v-icon v-else color="white"
                  >mdi-checkbox-blank-circle-outline</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content class="white--text">テスト</v-list-item-content>
            </v-list-item>
          </v-list-item-group>

          <v-divider></v-divider>
          <v-subheader class="white--text">連絡先</v-subheader>

          <v-list-item href="https://twitter.com/Akira_Yasai">
            <v-list-item-icon>
              <v-icon color="white">mdi-twitter</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="white--text"
              >あきらとぅ～ん</v-list-item-content
            >
          </v-list-item>

          <v-list-item href="https://twitter.com/lainsyou">
            <v-list-item-icon>
              <v-icon color="white">mdi-twitter</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="white--text"
              >不具合報告</v-list-item-content
            >
          </v-list-item>

          <v-divider></v-divider>
          <v-subheader class="white--text">更新日</v-subheader>
          <v-list-item>
            <v-list-item-content class="white--text"
              >2021/01/25</v-list-item-content
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view ref="child" />
      </v-main>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {
  private drawer = false;
  private item = -1;

  mounted() {
    this.item = -1;
    this.$router.push({ name: "Home" }).catch(() => {console.log("")});
  }

  download() {
    console.log("download");
    this.$router.app.$emit("download");
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
  padding: 0px;
}

#container {
  margin: 0px;
  padding: 0px;
}
</style>
