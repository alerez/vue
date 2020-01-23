<template lang="pug">
  menu
    .Porojectus
      span.uppercase projectus
      button.search
    .sub-menu
      .User
        img(src='../../../assets/img/user.jpg' alt='photo user')
        .userName
          div
            span.user {{user.name}}
            span.statusUser {{user.status}}
          a.touch(href='#') &bull;&bull;&bull;
    .work
      .one.res(v-click='')
        span.completed(@click='click()') {{work.numCompleted}}
        p {{work.Completed}}
      .res.two
        span.open {{work.numOpen}}
        p {{work.Open}}
    ul.menu
      li
        a.MENU.uppercase(href='#') {{menuBar.MENU}}
      li
        a.Home.uppercase(href='#') {{menuBar.HOME}}
      li
        a.Tasks(href='#') {{menuBar.MyTasks}}
      li
        a.Notifications(href='#')
          | {{menuBar.Notifications}}
          div {{menuBar.numNot}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { menuBar, user, work } from '@/Interfaces/SideBarInterfaces';

@Component
export default class SideBar extends Vue {
    user: user = {
      name: 'Jean Gonzales',
      status: 'Product Owner',
    };

    work: work = {

      numCompleted: 371,
      numOpen: 11,

      Completed: 'Completed Tasks',
      Open: 'Open Tasks',
    };

    menuBar: menuBar = {

      MENU: 'MENU',
      HOME: 'HOME',
      MyTasks: 'MyTasks',
      Notifications: 'Notifications',

      numNot: 0,
    }
}
</script>

<style scoped>

</style>
