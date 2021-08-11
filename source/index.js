import 'stylesheet/reset.css'

import(/* webpackChunkName: "threeJSScene1" */ 'javascript/threeJSScene1').then(
  (module) => {
    const addThreeJSScene1 = module.default
    addThreeJSScene1()
  }
)
