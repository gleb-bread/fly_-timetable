export const initPages = function () {
  return {
    reg: import("@/pages/reg.vue"),
    page: import("@/pages/page.vue"),
    login: import("@/pages/login.vue"),
    cart: import("@/pages/cart.vue"),
    application: import("@/pages/application.vue"),
    admin: import("@/pages/admin.vue"),
  };
};
