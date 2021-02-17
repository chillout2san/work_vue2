import Vue from 'vue';
import Router from 'vue-router';
import Step1 from './components/Step1.vue';
import Step2 from './components/Step2.vue';
import Step3 from './components/Step3.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Step1
    },
    {
      path: '/step2',
      component: Step2
    },
    {
      path: '/step3',
      component: Step3
    }
  ]
});
