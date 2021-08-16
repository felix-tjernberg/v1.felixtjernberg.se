import { MeshStandardMaterial } from 'three'
import { rockTexture } from './texture-loading'

const rockMaterial = new MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.9,
  normalMap: rockTexture,
  roughness: 0.6
})

export { rockMaterial }
