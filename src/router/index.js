import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home.vue'
import blog from '@/views/blog.vue'
import projects from '@/views/projects.vue'
import contact from '@/views/contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
});
