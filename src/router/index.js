import Vue from 'vue';
import VueRouter from 'vue-router';
import WelcomeView from '@/views/WelcomeView';
import ExamView from '@/views/ExamView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'WELCOME_VIEW',
    component: WelcomeView
  },
  {
    path: '/exams',
    name: 'EXAM_VIEW',
    component: ExamView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
