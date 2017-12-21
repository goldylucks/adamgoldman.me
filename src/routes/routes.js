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
      path: '/fb-redirect/:to',
      load: () => import(/* webpackChunkName: 'fbRedirect' */ './fbRedirect'),
    },
    {
      path: '/successes',
      load: () => import(/* webpackChunkName: 'successes' */ './successes'),
    },
    {
      path: '/reviews',
      load: () => import(/* webpackChunkName: 'reviews' */ './reviews'),
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
      path: '/posts-generator/:post',
      load: () => import(/* webpackChunkName: 'postsGenerator' */ './postsGenerator'),
    },
    {
      path: '/tags',
      load: () => import(/* webpackChunkName: 'tags' */ './tags'),
    },
    {
      path: '/tags/:tag',
      load: () => import(/* webpackChunkName: 'tag' */ './tag'),
    },
    {
      path: '/tools',
      load: () => import(/* webpackChunkName: 'brainTools' */ './brainTools'),
    },
    {
      path: '/tool-generator/:tool',
      load: () => import(/* webpackChunkName: 'brainToolGenerator' */ './brainToolGenerator'),
    },
    {
      path: '/tools/:tool',
      load: () => import(/* webpackChunkName: 'brainTool' */ './brainTool'),
    },
    {
      path: '/:page',
      load: () => import(/* webpackChunkName: 'page' */ './page'),
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next()
    route.title = route.title
      ? `${route.title} - AdamGoldman.me`
      : 'AdamGoldman.me'
    route.description = route.description || route.title

    return route
  },
}

// The error page is available by permanent url for development mode
if (__DEV__) { // eslint-disable-line no-undef
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  })
}

export default routes
