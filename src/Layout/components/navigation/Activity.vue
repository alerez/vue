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
    .world
      img(v-on:click='clickPhoto(index)' alt='Photo'
        v-for='(photo, index) in postThree.images'
        :key='index'
        :src='photo.image')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { content } from '@/Interfaces/ContentInterfaces';

@Component({})

export default class Activity extends Vue {
    postOne: content = {
      tasksDay: 'TODAY',
      Text: 'Darika Samak mark as done Listing on Product Hunt so that\n'
            + '                we can reach as many potential users даша',
      Time: '8:40 PM',
      comentary: 'During a project build, it is necessary to evaluate the product design\n'
            + '                and development against project requirements and outcomes',
    };

    postTwo: content = {
      Text: 'Darika Samak mark as done Listing on Product Hunt so that\n'
            + '                we can reach as many potential users',
      Time: '8:40 PM',
    };

    postThree: content = {
      Text: 'Darika Samak mark as done Listing on Product Hunt so that\n'
            + '                we can reach as many potential users',
      Time: '8:40 PM',
      images: [
        { image: require('../../../assets/img/world/zero.jpg') }, // eslint-disable-line global-require
        { image: require('../../../assets/img/world/1.jpg') }, // eslint-disable-line global-require
        { image: require('../../../assets/img/world/2.jpg') }, // eslint-disable-line global-require
        { image: require('../../../assets/img/world/3.jpg') }, // eslint-disable-line global-require
      ],
    }
}
</script>

<style scoped>
</style>
