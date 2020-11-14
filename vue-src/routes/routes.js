import LoginPage from '@/components/pages/Login.vue';

// const Login = { render: (h) => h('h1', 'This is the login page') };
const Home = { render: (h) => h('h1', 'This is the home page') };

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/', component: Home },
];

export default routes;
