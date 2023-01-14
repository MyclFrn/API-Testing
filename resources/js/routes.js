import Dashboard from "../components/views/Dashboard.vue";
import Blog from "../components/views/Blog.vue"
import Login from "../components/views/Login.vue"

export default[
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/blog/:id',
        component: Blog
    },
    {
        path: '/login',
        component: Login
    }
];
