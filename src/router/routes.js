import layoutApp from "../layout/layoutApp.vue";

const routes = [
  {
    name: "main",
    path: "/",
    component: layoutApp,
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/CounterView.vue"),
      },
      {
        name: "table",
        path: "/table",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/DatatableView.vue"),
      },
      {
        name: "mapa",
        path: "/mapa",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/RegisterView.vue"),
      },
    ],
  },
];

export default routes;