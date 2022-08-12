import Vue from 'vue'
import App from './App'
import myRequest from '@/api/request.js'
import testApi from '@/api/testapi.js'

Vue.prototype.$request = myRequest
Vue.prototype.$api = testApi

// #ifndef VUE3
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif