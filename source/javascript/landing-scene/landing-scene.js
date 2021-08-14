import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { pointLightOne, pointLightTwo } from './point-lights'
import { box } from './box'
import handleKeyUp from '../developer-control'
import handleResize from 'Javascript/handle-resize'
import rotationAnimation from './rotation-animation'

/* eslint-disable sort-vars */
// Declare canvas constants
const renderCanvas = document.querySelector('#threejs-lading-scene'),
  parentElement = renderCanvas.parentElement,
  canvas = {
    height: parentElement.clientHeight,
    width: parentElement.clientWidth
  }
/* eslint-disable sort-vars */

// Rendering configuration
const camera = new PerspectiveCamera(
    75,
    canvas.width / canvas.height,
    0.1,
    1000
  ),
  scene = new Scene(),
  renderer = new WebGLRenderer({ canvas: renderCanvas })
camera.position.z = 5
renderer.setSize(canvas.width, canvas.height)

// Setup window resize event
window.addEventListener('resize', () => {
  handleResize(camera, canvas, parentElement, renderer)
})

scene.add(box, pointLightOne, pointLightTwo)

// TODO remove runningRenderer before production
let runningRenderer
function renderFrame() {
  rotationAnimation(box)

  runningRenderer = requestAnimationFrame(renderFrame)
  renderer.render(scene, camera)
}

renderFrame()

// User input
document.querySelector('#turn-red').addEventListener('click', () => {
  box.material.color.setHex(0xff0000)
})
document.querySelector('#turn-green').addEventListener('click', () => {
  box.material.color.setHex(0x00ff00)
})
document.querySelector('#turn-blue').addEventListener('click', () => {
  box.material.color.setHex(0x0000ff)
})

// TODO Developer tools (Comment/Remove everything below before production)
/* eslint-disable-next-line sort-imports */
import * as dat from 'dat.gui'
import { PointLightHelper } from 'three'
/* eslint-disable-next-line sort-imports */
const developerPanel = new dat.GUI()

const pointLightOneFolder = developerPanel.addFolder('Light 1')
pointLightOneFolder.add(pointLightOne, 'intensity').step(0.01)
const pointLightOneHelper = new PointLightHelper(pointLightOne, 1)
scene.add(pointLightOneHelper)

// Developer control, remove runningRenderer variable later
window.addEventListener('keyup', (event) => {
  handleKeyUp(event, runningRenderer, renderFrame)
})
