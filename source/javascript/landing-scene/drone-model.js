import { AnimationMixer } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import droneModel from 'Model/drone.glb'

let droneMixer
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./')
const loader = new GLTFLoader()
loader.setDRACOLoader(dracoLoader)

function loadDroneModel(scene) {
  loader.load(
    droneModel,
    (file) => {
      droneMixer = new AnimationMixer(file.scene)
      var action = droneMixer.clipAction(file.animations[0])
      action.play()
      scene.add(file.scene)
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )
}

export { droneMixer, loadDroneModel }
