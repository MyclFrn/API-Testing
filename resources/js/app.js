import './bootstrap';
import '../css/app.css';
import Vue from 'vue';
import App from '../components/App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

Vue.use(VueRouter)

const router = new VueRouter({
    routes
});


new Vue({
    render: (h) => h(App),
    router
}).$mount('#app');
