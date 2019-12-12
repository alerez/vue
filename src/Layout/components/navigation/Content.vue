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
    images
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import images from './images.vue';

@Component({
  components: { images },
})

export default class Content extends Vue {

}


</script>

<style scoped>

</style>
