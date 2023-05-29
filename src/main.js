import { createApp } from 'vue'
import App from './App.vue'


import DateFormat from '@voidsolutions/vue-dateformat'

import router from './routes'
createApp(App).use(router,DateFormat).mount('#app')
