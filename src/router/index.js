import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "@/constants/routes.js";
import Home from "@/View/Home/index.vue";
import Supplier from "@/View/Supplier/index.vue";
import Activity from "@/View/Activity/index.vue";
import Planner from "@/View/Planner/index.vue";
import Notification from "@/View/Notification/index.vue";
import Chat from "@/View/Chat/index.vue";
const routes = [
  {
    path: ROUTES.HOME,
    name: "Home",
    component: Home,
  },
  {
    path: ROUTES.SUPPLIER,
    name: "Supplier",
    component: Supplier,
  },
  {
    path: ROUTES.ACTIVITY,
    name: "Activity",
    component: Activity,
  },
  {
    path: ROUTES.PLANNER,
    name: "Planner",
    component: Planner,
  },
  {
    path: ROUTES.CHAT,
    name: "Chat ",
    children:[
      {
        path:':id',
        name: "Chat",
        component:Chat
      }
    ],
    component: Chat,
  },
  {
    path: ROUTES.NOTIFICATION,
    name: "Notification",
    component: Notification,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
