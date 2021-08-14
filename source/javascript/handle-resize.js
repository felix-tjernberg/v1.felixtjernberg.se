export default function handleResize(camera, canvas, parentElement, renderer) {
  canvas.height = parentElement.clientHeight
  canvas.width = parentElement.clientWidth

  camera.aspect = canvas.width / canvas.height
  camera.updateProjectionMatrix()

  renderer.setSize(canvas.width, canvas.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
