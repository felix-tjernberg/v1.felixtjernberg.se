import { TextureLoader } from 'three'
import rockImage from 'Texture/rocky.png'

const textureLoader = new TextureLoader()

export const rockTexture = textureLoader.load(rockImage)
