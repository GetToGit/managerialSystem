// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
import moment from 'moment'
import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts/lib/component/tooltip'

Vue.prototype.$echarts = echarts;
Vue.prototype.$moment = moment
echarts.registerMap('china', china)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: v => v(App)
}).$mount('#app')
