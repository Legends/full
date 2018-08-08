export default {
  component: require('../../components/common/Layout').default,
  childRoutes: [
    {
      path: 'maps',
      getComponent(nextState, cb){
        import('./components/Maps').then((m)=> {
          cb(null, m.default)
        })
      },
      childRoutes: [
        {
          path: ':style',
          getComponent(nextState, cb){
            import('./components/MapView').then((m)=> {
              cb(null, m.default)
            })
          },
        }
      ]
    }
  ]
}