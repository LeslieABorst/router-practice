<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
  @import 'src/assets/styles.scss';
  @include body-styles();
</style>

<template>
  <div class="home">
    <h1>{{title}}</h1>
  </div>
    
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

