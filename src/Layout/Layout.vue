<template lang="pug">
  #Layout
    SideBar
    #base
      Header
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/views/Header.vue';
import SideBar from './components/views/SideBar.vue';

@Component({
  components: { Header, SideBar },
})
export default class Layout extends Vue {}
</script>

<style scoped>
  #Layout{
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
  }
  #base{
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
  }
</style>
