# r3f-simple-mask-move

_Simple Experience Three.js with R3F and Mask / Stencil._

๐งช **v0.1.0** **ใข**
๐ฅ [Live Demo](https://sp0ne.github.io/r3f-simple-mask-move/) **ใข** [Codesandbox](https://codesandbox.io/s/r3f-mask-move-mouse-ttmtem)

---

![Screen Starter](public/screenshots/r3f-mask-mouse.gif)

---

## ๐พ Installation

๐ Install the following packages

```shell
yarn
```

## ๐ฅ Usage ใข Get Started

๐ Start or Build the application

```shell
yarn start
# Or
yarn preview
```

๐ Go to [http://localhost:3000/r3f-simple-mask-move/](http://localhost:3000/r3f-simple-mask-move/)

## ๐พ Code Clean

```shell
yarn lint        # Run linter global
yarn format      # Run prettier format
```

## ๐ Deploy on Gh-pages

```shell
yarn build && yarn deploy
# yarn deploy -- -m "Deploy to GitHub Pages"
```

### โ๏ธ Config vite โก

Change config in `vite.config.vue` if you want:

```javascript
export default defineConfig({
  base: '/r3f-simple-mask-move/', // Adapt it ! (just for GH-PAGES)
  server: {
    port: 3000 // Default 3000: Adapt it !
  }
  // ...stuff...
})
```

Reminder ๐ฆ:

```bash
# update dependencies. need existing yarn.lock file
yarn upgrade-interactive --latest
```

---

## ๐พ Ecosystem

- Node.js [**v16.0 min**](https://nodejs.org/en/) ๐ฆ
- Three.js [**v0.145.0**](https://github.com/mrdoob/three.js/) ๐ฆ
- Powered with [Vite](https://vite.dev/) ๐ฆ
- [vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl) Simple Shaders support (glsl) ๐จ
- [`docs.pmnd.rs`](https://docs.pmnd.rs/) Documentation Poimandres
- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) React renderer for threejs
- [`@react-three/gltfjsx`](https://github.com/pmndrs/gltfjsx) &ndash; turns GLTFs into JSX components
- [`@react-three/drei`](https://github.com/pmndrs/drei) &ndash; useful helpers for react-three-fiber
- [`react-spring`](https://github.com/pmndrs/react-spring) &ndash; a spring-physics-based animation library
- [`leva`](https://github.com/pmndrs/leva) &ndash; create GUI controls in seconds
- [`gltf-viewer`](https://gltf.pmnd.rs/) Gltf Viwver / converter
- [`mixamo`](https://www.mixamo.com) Animation library
- ...

---

> </๐ปโค> by [๐งโโ@Sp0ne][vinces-git] ใข ยฉ 2022 ใข **๐๐ป**: [vinces.io][vinces]

---

[vinces]: https://vinces.io
[vinces-git]: https://github.com/Sp0ne
