# r3f-simple-mask-move

_Simple Experience Three.js with R3F and Mask / Stencil._

🧪 **v0.1.0** **〢** 🖥 [Live Demo](https://sp0ne.github.io/r3f-simple-mask-move/)

---

![languages top](https://img.shields.io/github/languages/top/Sp0ne/r3f-simple-mask-move?color=56BEB8)
![languages count](https://img.shields.io/github/languages/count/Sp0ne/r3f-simple-mask-move?color=56BEB8)
![languages count](https://img.shields.io/github/last-commit/Sp0ne/r3f-simple-mask-move?color=56BEB8)

---

![Screen Starter](public/screenshots/r3f-mask-mouse.gif)

---

## 💾 Installation

👇 Install the following packages

```shell
yarn
```

## 🥑 Usage 〢 Get Started

👇 Start or Build the application

```shell
yarn start
# Or
yarn build
```

👉 Go to [http://localhost:3000/r3f-simple-mask-move/](http://localhost:3000/r3f-simple-mask-move/)

## 💾 Code Clean

```shell
yarn lint        # Run linter global
yarn format      # Run prettier format
```

## 🚀 Deploy on Gh-pages

```shell
yarn deploy
# yarn deploy -- -m "Deploy to GitHub Pages"
```

### ⚙️ Config vite ⚡

Change config in `vite.config.vue` if you want:

```javascript
export default defineConfig({
  base: '/r3f-simple-mask-move/', // Remove or Adapt it ! (it's just for GH-PAGES)
  // ...stuff...
  server: {
    port: 3000 // Default 3000: Adapt it !
  }
  // ...stuff...
})
```

Reminder 📦:

```bash
# update dependencies. need existing yarn.lock file
yarn upgrade-interactive --latest
```

---

## 💾 Ecosystem

- Node.js [**v16.0 min**](https://nodejs.org/en/) 📦
- Three.js [**v0.145.0**](https://github.com/mrdoob/three.js/) 📦
- Powered with [Vite](https://vite.dev/) 📦
- [vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl) Simple Shaders support (glsl) 🎨
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

> </💻❤> by [🧙‍♂@Sp0ne][vinces-git] 〢 © 2022 〢 **👋🏻**: [vinces.io][vinces]

---

[vinces]: https://vinces.io
[vinces-git]: https://github.com/Sp0ne
