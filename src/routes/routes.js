/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/blog',
      load: () => import(/* webpackChunkName: 'blog' */ './blog'),
    },
    {
      path: '/blog/:post',
      load: () => import(/* webpackChunkName: 'blogPost' */ './blogPost'),
    },
    {
      path: '/tools',
      load: () => import(/* webpackChunkName: 'brainTools' */ './brainTools'),
    },
    {
      path: '/tools/:tool',
      load: () => import(/* webpackChunkName: 'brainTool' */ './brainTool'),
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();
    // Provide default values for title, description etc.
    route.title = route.title
      ? `${route.title} - AdamGoldman.me`
      : 'AdamGoldman.me';
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
