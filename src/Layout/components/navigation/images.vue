<template lang="pug">
  .world
    img(v-for='(world, index) in images' :key='index' :src='world.image' @click='imgClick(index)')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class images extends Vue {}
</script>

<style scoped>

</style>
