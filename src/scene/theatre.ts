import { getProject, types } from '@theatre/core'

export const theatreProject = getProject('Active Theory')
export const homeSheet = theatreProject.sheet('Home')

export const logoObj = homeSheet.object('Logo', {
  rotationY: types.number(0, { range: [-Math.PI, Math.PI] }),
  positionY: types.number(0, { range: [-2, 2] }),
  scale: types.number(1, { range: [0.5, 2] }),
  ribbonTwist: types.number(0, { range: [-1, 1] }),
})

export const cameraObj = homeSheet.object('Camera', {
  z: types.number(4.2, { range: [1, 10] }),
  y: types.number(0.15, { range: [-2, 2] }),
  fov: types.number(42, { range: [20, 90] }),
})

export const particlesObj = homeSheet.object('Particles', {
  density: types.number(1, { range: [0, 2] }),
  drift: types.number(0.35, { range: [0, 2] }),
  glow: types.number(0.8, { range: [0, 2] }),
})
