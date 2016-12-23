import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import store from 'store';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import './common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

const router = new VueRouter({
  routes
});
/* eslint-disable no-new */
new Vue({
	store,
	router: router,
	render: function (h) {
		return h(App);
	}
}).$mount('#app');
router.push('goods');
