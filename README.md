# Active Theory — Recreation

A high-fidelity recreation of [activetheory.net](https://activetheory.net/) using the stack detected on the live site:

- **Theatre.js** — animation objects for logo / camera / particles  
- **Goober** — CSS-in-JS UI  
- **Three.js + React Three Fiber** — WebGL hero (logo emblem, ribbons, particles)  
- **Ethers** — present in the dependency graph (as on the live stack)  
- **PWA + Open Graph** — installable shell + social meta  

## Run

```bash
npm install
npm run dev
```

## Notes

The production Active Theory site is powered by their proprietary **Hydra** WebGL engine with custom multi-environment 3D assets. This project recreates the public experience: cinematic hero, scroll cue, Work/Contact nav, Ask-me-anything chat, work detail overlays (e.g. Sustainable Horizons), contact panel, grain/scanline treatment, and portfolio routing.
