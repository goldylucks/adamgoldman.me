/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/make-admin',
      load: () => import(/* webpackChunkName: 'makeAdmin' */ './makeAdmin'),
    },
    {
      path: '/transcripts',
      load: () => import(/* webpackChunkName: 'transcripts' */ './transcripts'),
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
      path: '/savoring-your-child',
      load: () => import(/* webpackChunkName: 'savoringYourChild' */ './savoringYourChild'),
    },
    {
      path: '/savoring-your-child/modules',
      load: () => import(/* webpackChunkName: 'savoringYourChildModules' */ './savoringYourChildModules'),
    },
    {
      path: '/savoring-your-child/feedback',
      load: () => import(/* webpackChunkName: 'savoringYourChildFeedback' */ './savoringYourChildFeedback'),
    },
    {
      // using array because soon we will add more sections
      path: ['pricing'].map(s => `/savoring-your-child/${s}`),
      load: () => import(/* webpackChunkName: 'savoringYourChildSection' */ './savoringYourChildSection'),
    },
    {
      path: '/savoring-your-child/:module',
      load: () => import(/* webpackChunkName: 'savoringYourChildModule' */ './savoringYourChildModule'),
    },
    {
      path: '/loss',
      load: () => import(/* webpackChunkName: 'loss' */ './loss'),
    },
    {
      path: '/loss/:section',
      load: () => import(/* webpackChunkName: 'lossSection' */ './lossSection'),
    },
    {
      path: '/posts-generator/:post',
      load: () => import(/* webpackChunkName: 'postsGenerator' */ './postsGenerator'),
    },
    {
      path: '/tools',
      load: () => import(/* webpackChunkName: 'tutorials' */ './tutorials'),
    },
    {
      path: ['trauma-relief', 'resolving-feelings', 'test', 'has-review'].map(p => `/tools/${p}`),
      load: () => import(/* webpackChunkName: 'tool' */ './tool'),
    },
    {
      path: '/tool-editor/:tool',
      load: () => import(/* webpackChunkName: 'toolEditor' */ './toolEditor'),
    },
    {
      path: '/tool-json-editor',
      load: () => import(/* webpackChunkName: 'toolJsonEditor' */ './toolJsonEditor'),
    },
    {
      path: '/tools/:tool',
      load: () => import(/* webpackChunkName: 'tutorial' */ './tutorial'),
    },
    {
      path: '/:page',
      load: () => import(/* webpackChunkName: 'page' */ './page'),
    },
    {
      path: '/admin-typeform',
      load: () => import(/* webpackChunkName: 'adminTypeform' */ './adminTypeform'),
    },
    {
      path: '/customer-chat',
      load: () => import(/* webpackChunkName: 'customerChat' */ './customerChat'),
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
