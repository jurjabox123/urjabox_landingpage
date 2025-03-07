import type { RouterConfig } from 'nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the page on every route change
    return { top: 0 };
  }
};
