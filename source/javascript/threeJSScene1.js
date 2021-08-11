import { WebGLRenderer } from 'three'

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

export default () => {
  document.body.appendChild(renderer.domElement)
}
