import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from '@/Layout/components/navigation/Tasks.vue';
import Activity from '@/Layout/components/navigation/Activity.vue';
import Error from '@/Layout/components/navigation/Error.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: 'tasks' },
    { path: '/tasks', component: Tasks },
    { path: '/activity', component: Activity },
    { path: '/kanban', component: Error },
    { path: '/calendar', component: Error },
    { path: '/files', component: Error },
  ],
});
