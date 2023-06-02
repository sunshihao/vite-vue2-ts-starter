import Vue from 'vue'

import { pinia } from '/@/stores'
import router from '/@/router'
import App from './App'
import Element from 'element-ui'

import 'virtual:windi.css'
import '/@/styles/main.css'
import '/public/theme/index.css'

Vue.use(Element)

const app = new Vue({
  pinia,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
