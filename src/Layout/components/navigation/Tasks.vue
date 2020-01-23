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
import { content } from '@/Interfaces/ContentInterfaces';

@Component({})

export default class Tasks extends Vue {
        postOne: content = {
          tasksDay: 'TODAY',
          Text: 'Darika Samak mark as done Listing on Product Hunt so that\n'
                + '                we can reach as many potential users',
          Time: '8:40 PM',
          comentary: 'During a project build, it is necessary to evaluate the product design\n'
                + '                and development against project requirements and outcomes',
        }

        postTwo: content = {
          Text: 'Darika Samak mark as done Listing on Product Hunt so that\n'
                + '                we can reach as many potential users',
          Time: '8:40 PM',
        }

        postThree: content = {
          Text: 'Darika Samak mark as done Listing on Product Hunt so that\n'
                + '                we can reach as many potential users',
          Time: '8:40 PM',
        }
}
</script>

<style scoped>

</style>
