<style lang="scss">
@import 'src/assets/styles.scss';
@include body-styles();
</style>

<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import home from '@/views/home.vue';
import blog from '@/views/blog.vue';
import contact from '@/views/contact.vue';
import projects from '@/views/projects.vue';
export default {
  components: {
        Header,
        home,
        contact,
        blog,
        projects
    }
}
</script>
