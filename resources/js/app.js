import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const app = new Vue({
	el: '#app',
	components : { App },
	template: '<app></app>'
})