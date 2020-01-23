<template lang="pug">
  main
    #day {{postOne.tasksDay}}
    #postOne
      .status
      p {{postOne.Text}}
      .time {{postOne.Time}}
    #postTwo
      .status
      p {{postTwo.Text}}
      .time {{postTwo.Time}}
    #comentary
      p {{postOne.comentary}}
    #postThree
      .status
      p {{postThree.Text}}
      .time {{postThree.Time}}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import images from './images.vue';

@Component({
  components: { images },
})

export default class Content extends Vue {

}

const img1 = require('../../../assets/img/1.jpg');
const img2 = require('../../../assets/img/2.jpg');
const img3 = require('../../../assets/img/3.jpg');
const img4 = require('../../../assets/img/4.jpg');

const photos = [img1, img2, img3, img4];


</script>

<style scoped>

</style>
