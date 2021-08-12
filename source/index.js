import 'stylesheet/reset.css'

import responsiveImage from 'image/felix-coach-walk.webp?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp'
const felixImage = document.querySelector('#test')
felixImage.srcset = responsiveImage.srcSet

import(/* webpackChunkName: "threeJSScene1" */ 'javascript/threeJSScene1').then(
  (module) => {
    const addThreeJSScene1 = module.default
    addThreeJSScene1()
  }
)
