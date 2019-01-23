<style lang="scss">
@import 'src/assets/styles.scss';
@include body-styles();
</style>

<template>

    <div class="site-header">
      <nav class="nav">
        <router-link to="/">home</router-link>
        <router-link to="/blog">blog</router-link>
        <router-link to="/projects">projects</router-link>
        <router-link to="/contact">contact</router-link>
      </nav>
    </div>

</template>

<script>

export default {
    name: 'Header',
};

</script>