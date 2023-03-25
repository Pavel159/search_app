import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage';
import ZipResultsPage from '@/pages/ZipResultsPage';
import IpResultsPage from '@/pages/IpResultsPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/zip-results',
    name: 'zip-results',
    component: ZipResultsPage,
  },
  {
    path: '/ip-results',
    name: 'ip-results',
    component: IpResultsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
