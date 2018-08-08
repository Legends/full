export default {
  path: 'tables',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'datatables',
      getComponent(nextState, cb){
        import('./containers/Datatables').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'normal-tables',
      getComponent(nextState, cb){
        import('./containers/NormalTables').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
