import Index from '../pages/Index.vue';
import Team from '../pages/Team.vue';
import User from '../pages/UserPage.vue';
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {path: '/', component: Index},
    {path: '/Team', component: Team},
    {path: '/User', component: User},
    {path: '/user/edit', component: UserEditPage},
    {path: '/search', component: SearchPage},
]

export default routes;
