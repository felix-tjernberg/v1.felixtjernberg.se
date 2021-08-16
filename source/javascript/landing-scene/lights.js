import { AmbientLight, PointLight } from 'three'
import { PointLightHelper } from 'three'

const ambientLight = new AmbientLight(0xffffff, 2)

const pointLightOne = new PointLight(0xffffff, 0.5)
pointLightOne.position.set(-5, 10, 15)
const pointLightOneHelper = new PointLightHelper(pointLightOne, 1)

export { ambientLight, pointLightOne, pointLightOneHelper }
