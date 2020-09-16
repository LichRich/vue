import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue 객체가 선언되기 전에 Vue.component 객체를 선언하면 전역변수로 설정되어 어디서든 사용가능해진다.
/*Vue.component('comp-name', {

});*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
