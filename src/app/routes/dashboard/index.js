export default {
  path: 'dashboard',
  component: require('../../components/common/Layout').default,

  indexRoute: { onEnter: (nextState, replace) => replace('/dashboard/analytics') },

  childRoutes: [
    {
      path: 'analytics',
      getComponent(nextState, cb){
        import('./containers/Dashboard').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'social-wall',
      getComponent(nextState, cb){
        import('./containers/SocialWall').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
