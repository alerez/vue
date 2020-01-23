<template lang="pug">
  nav
    .content
      .title
        span.svg
        span.website {{header.WebsiteRedesing}}
        a.touch(href='#')
          span &bull;&bull;&bull;
      .UserShareChat
        .userImg
          img(src='../../../assets/img/1.jpg' alt='chatUserPhoto')
          img(src='../../../assets/img/2.jpg' alt='chatUserPhoto')
          img(src='../../../assets/img/3.jpg' alt='chatUserPhoto')
        .ShareChat
          button.share
            span {{header.Share}}
          button.chat
            span {{header.Chat}}
    ul.mainMenu
      li
        router-link.Tasks.nav-link(to='/tasks') {{header.Tasks}}
      li
        router-link.Kanban.margin.nav-link(to='/kanban') {{header.Kanban}}
      li
        router-link.Activity.margin.nav-link(to='/activity') {{header.Activity}}
      li
        router-link.Calendar.margin.nav-link(to='/calendar') {{header.Calendar}}
      li
        router-link.Files.margin.nav-link(to='/files') {{header.Files}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { interfaces } from '@/Interfaces/HeaderInterfaces';

@Component
export default class Header extends Vue {
    header: interfaces = {
      WebsiteRedesing: 'Website Redesing',

      Share: 'Share',
      Chat: 'Chat',

      Tasks: 'Tasks',
      Kanban: 'Kanban',
      Activity: 'Activity',
      Calendar: 'Calendar',
      Files: 'Files',
    }
}
</script>

<style scoped>

</style>
