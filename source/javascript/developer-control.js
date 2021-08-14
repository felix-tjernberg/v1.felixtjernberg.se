export default function handleKeyUp(event, runningRenderer, startRenderer) {
  if (event.key === 'c') {
    console.log('stopped threejs')
    window.cancelAnimationFrame(runningRenderer)
  }
  // Has the side effect of speeding up animation if pressed multiple times
  if (event.key === 's') {
    console.log('started threejs')
    startRenderer()
  }
}
