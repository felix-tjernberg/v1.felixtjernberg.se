import { BoxGeometry, Mesh } from 'three'
import { rockMaterial } from './materials'

const boxGeometry = new BoxGeometry(1, 1, 1)

const box = new Mesh(boxGeometry, rockMaterial)
box.position.y = 10

export { box }
