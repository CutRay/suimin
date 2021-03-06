import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/Top.vue'
import Page from '../components/Page.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: Top },
  { path: '/page', component: Page }
]

export default new Router({ mode: 'history', routes })
