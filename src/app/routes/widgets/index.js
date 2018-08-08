export default {
  path: '/',
  component: require('../../components/common/Layout').default,
  childRoutes: [
    {
      path: 'widgets',
      getComponent(nextState, cb){
        import('./components/Widgets').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
