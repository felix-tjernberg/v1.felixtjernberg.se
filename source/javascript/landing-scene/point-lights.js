import { PointLight } from 'three'

const pointLightOne = new PointLight(0xffffff, 1.5)
pointLightOne.position.set(-1, 1, 3)

const pointLightTwo = new PointLight(0xff0000, 1.5)
pointLightTwo.position.set(2, 2, 4)

export { pointLightOne, pointLightTwo }
