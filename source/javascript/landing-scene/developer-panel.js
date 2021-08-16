import * as dat from 'dat.gui'
import { box } from './box'
import { pointLightOne } from './lights'

const developerPanel = new dat.GUI()

const boxFolder = developerPanel.addFolder('box')
const boxPosition = boxFolder.addFolder('position')
boxPosition.add(box.position, 'x').step(0.1)
boxPosition.add(box.position, 'y').step(0.1)
boxPosition.add(box.position, 'z').step(0.1)
const boxScale = boxFolder.addFolder('scale')
boxScale.add(box.scale, 'x').step(0.1)
boxScale.add(box.scale, 'y').step(0.1)
boxScale.add(box.scale, 'z').step(0.1)

const pointLightOneFolder = developerPanel.addFolder('Light 1')
pointLightOneFolder.add(pointLightOne, 'intensity').step(0.01)
const pointLightOnePosition = pointLightOneFolder.addFolder('Position')
pointLightOnePosition.add(pointLightOne.position, 'x').step(0.01)
pointLightOnePosition.add(pointLightOne.position, 'y').step(0.01)
pointLightOnePosition.add(pointLightOne.position, 'z').step(0.01)

export { developerPanel }
