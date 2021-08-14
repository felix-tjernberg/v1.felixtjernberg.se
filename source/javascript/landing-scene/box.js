import { BoxGeometry, Mesh } from 'three'
import { rockMaterial } from './materials'

const boxGeometry = new BoxGeometry(1, 1, 1)

export const box = new Mesh(boxGeometry, rockMaterial)
