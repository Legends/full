import React from 'react';
import HtmlRender from '../../components/utils/HtmlRender'

export default {
  path: 'forms',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'form-validation',
      getComponent(nextState, cb){
        import('html-loader?-attrs!./content/form-validation.html').then((html)=> {
          cb(null,
            () => (<HtmlRender html={html}/>)
          )
        })
      }
    },
    {
      path: 'bootstrap-form-elements',
      getComponent(nextState, cb){
        import('html-loader?-attrs!./content/bootstrap-form-elements.html').then((html)=> {
          cb(null,
            () => (<HtmlRender html={html}/>)
          )
        })
      }
    },

    {
      path: 'wizards',
      getComponent(nextState, cb){
        import('./containers/Wizards').then((m)=> {
          cb(null, m.default)
        })
      }
    },

    {
      path: 'bootstrap-editors',
      getComponent(nextState, cb){
        import('./containers/BootstrapEditors').then((m)=> {
          cb(null, m.default)
        })
      }
    },

    {
      path: 'bootstrap-validation',
      getComponent(nextState, cb){
        import('./containers/BootstrapValidation').then((m)=> {
          cb(null, m.default)
        })
      }
    },

    {
      path: 'dropzone',
      getComponent(nextState, cb){
        import('./containers/DropzoneDemo').then((m)=> {
          cb(null, m.default)
        })
      }
    },

    {
      path: 'elements',
      getComponent(nextState, cb){
        import('./containers/FormElements').then((m)=> {
          cb(null, m.default)
        })
      }
    },

    {
      path: 'layouts',
      getComponent(nextState, cb){
        import('./containers/FormLayouts').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'plugins',
      getComponent(nextState, cb){
        import('./containers/FormPlugins').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'image-editor',
      getComponent(nextState, cb){
        import('./containers/ImageEditor').then((m)=> {
          cb(null, m.default)
        })
      }
    },


  ]


};
