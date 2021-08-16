// import 'Model/grass.gltf'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import grassModel from 'Model/grass.glb'

const loader = new GLTFLoader()
export default function loadGrass(scene) {
  loader.load(
    grassModel,
    (file) => {
      scene.add(file.scene)
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )
}
