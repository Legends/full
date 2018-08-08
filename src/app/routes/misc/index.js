import React from 'react';
import HtmlRender from '../../components/utils/HtmlRender'

export default {
  path: 'misc',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'email-template',
      getComponent(nextState, cb){
        import('html-loader?-attrs!./content/email-template.html').then((html)=> {
          cb(null,
            () => (<HtmlRender html={html}/>)
          )
        })
      }
    },
    {
      path: 'invoice',
      getComponent(nextState, cb){
        import('html-loader?-attrs!./content/invoice.html').then((html)=> {
          cb(null,
            () => (<HtmlRender html={html}/>)
          )
        })
      }
    },
    {
      path: 'pricing-tables',
      getComponent(nextState, cb){
        import('html-loader?-attrs!./content/pricing-tables.html').then((html)=> {
          cb(null,
            () => (<HtmlRender html={html}/>)
          )
        })
      }
    },
    {
      path: 'search',
      getComponent(nextState, cb){
        import('html-loader?-attrs!./content/search.html').then((html)=> {
          cb(null,
            () => (<HtmlRender html={html}/>)
          )
        })
      }
    },

    {
      path: 'blank',
      getComponent(nextState, cb){
        import('./containers/BlankPage').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: '404',
      getComponent(nextState, cb){
        import('./containers/Page404').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: '500',
      getComponent(nextState, cb){
        import('./containers/Page500').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'ck-editor',
      getComponent(nextState, cb){
        import('./containers/CKEditorDemo').then((m)=> {
          cb(null, m.default)
        })
      }
    },


  ]


};
