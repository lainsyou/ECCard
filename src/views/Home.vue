<template>
  <v-container fluid>
        <canvas id="picture" width="1050px" height="600ox" style="background:red;"></canvas>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
}
</script>
