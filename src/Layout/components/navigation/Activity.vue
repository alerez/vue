<template lang="pug">
  Content
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from './Content.vue';
import { content } from '@/Layout/Interfaces/ContentInterfaces';

@Component({
  components: { Content },
})
export default class Activity extends Vue {
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
