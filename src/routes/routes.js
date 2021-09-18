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
      path: '/signup-with-email',
      load: () =>
        import(/* webpackChunkName: 'signupWithEmail' */ './signupWithEmail'),
    },
    {
      path: '/adminCoupons',
      load: () =>
        import(/* webpackChunkName: 'adminCoupons' */ './adminCoupons'),
    },
    {
      path: '/endorsements',
      load: () =>
        import(/* webpackChunkName: 'endorsements' */ './endorsements'),
    },
    {
      path: '/adminToolResponses',
      load: () =>
        import(
          /* webpackChunkName: 'adminToolResponses' */ './adminToolResponses'
        ),
    },
    {
      path: '/adminToolResponses/:id',
      load: () =>
        import(
          /* webpackChunkName: 'adminToolResponseItem' */ './adminToolResponseItem'
        ),
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
      path: '/shop/decision-destroyer',
      load: () =>
        import(
          /* webpackChunkName: 'decisionDestroyer' */ './decisionDestroyer'
        ),
    },
    {
      path: '/shop/decision-destroyer/success-f8j43',
      load: () =>
        import(
          /* webpackChunkName: 'decisionDestroyerAfterPayment' */ './decisionDestroyerAfterPayment'
        ),
    },
    {
      path: '/savoring-your-pet',
      load: () =>
        import(/* webpackChunkName: 'savoringYourPet' */ './savoringYourPet'),
    },
    {
      path: '/savoring-your-pet/success-dj34f84',
      load: () =>
        import(
          /* webpackChunkName: 'savoringYourPetAfterPayment' */ './savoringYourPetAfterPayment'
        ),
    },
    {
      path: '/savoring-your-child',
      load: () =>
        import(
          /* webpackChunkName: 'savoringYourChild' */ './savoringYourChild'
        ),
    },
    {
      path: '/savoring-your-child/success-84jf',
      load: () =>
        import(
          /* webpackChunkName: 'savoringYourChildAfterPayment' */ './savoringYourChildAfterPayment'
        ),
    },
    {
      path: '/savoring-your-child/modules',
      load: () =>
        import(
          /* webpackChunkName: 'savoringYourChildModules' */ './savoringYourChildModules'
        ),
    },
    {
      path: '/savoring-your-child/intro-questionnaire',
      load: () =>
        import(
          /* webpackChunkName: 'savoringYourChildIntroQuestionnaire' */ './savoringYourChildIntroQuestionnaire'
        ),
    },
    {
      // using array because soon we will add more sections
      path: ['pricing'].map(s => `/savoring-your-child/${s}`),
      load: () =>
        import(
          /* webpackChunkName: 'savoringYourChildSection' */ './savoringYourChildSection'
        ),
    },
    {
      path: '/savoring-your-child/:module',
      load: () =>
        import(
          /* webpackChunkName: 'savoringYourChildModule' */ './savoringYourChildModule'
        ),
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
      load: () =>
        import(/* webpackChunkName: 'postsGenerator' */ './postsGenerator'),
    },
    {
      path: '/tools',
      load: () => import(/* webpackChunkName: 'tutorials' */ './tutorials'),
    },
    {
      // path: '/tools/coming-to-wholeness',
      path: ['coming-to-wholeness', 'trauma-relief-he'].map(t => `/tools/${t}`),
      load: () => import(/* webpackChunkName: 'tutorial' */ './tutorial'),
    },
    {
      path: '/tools/:toolUrl',
      load: () => import(/* webpackChunkName: 'tool' */ './tool'),
    },
    {
      path: '/tools/:toolUrl/:toolResponseId',
      load: () =>
        import(/* webpackChunkName: 'toolResponse' */ './toolResponse'),
    },
    {
      path: '/tool-editor/:tool',
      load: () => import(/* webpackChunkName: 'toolEditor' */ './toolEditor'),
    },
    {
      path: '/tool-json-editor',
      load: () =>
        import(/* webpackChunkName: 'toolJsonEditor' */ './toolJsonEditor'),
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
if (__DEV__) {
  // eslint-disable-line no-undef
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  })
}

export default routes
