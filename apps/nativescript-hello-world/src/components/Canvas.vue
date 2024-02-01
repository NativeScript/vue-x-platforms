<script lang="ts" setup>
import { LoadEventData } from "@nativescript/core";
import { registerElement, ref, watch } from "nativescript-vue";
// import { Canvas } from "@nativescript/canvas";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// registerElement("Canvas", () => Canvas);

// const scene = new THREE.Scene();
// let camera: THREE.PerspectiveCamera;
// let renderer: THREE.WebGLRenderer;
// let vueLogo: THREE.Mesh;

// const props = defineProps({
//   progress: {
//     type: Number,
//     default: 0,
//   },
// });

// watch(
//   () => props.progress,
//   (newValue) => {
//     interpolateStates(newValue);
//   }
// );

// const hearts: any[] = [];
// const circles = [
//   {
//     delta: 0,
//     mesh: null,
//     speed: 0.01,
//     color: 0xd3d3d3,
//     radius: 1.5,
//     position: { x: 0, y: 0, z: -5 },
//   },
//   {
//     delta: 0,
//     mesh: null,
//     speed: 0.1,
//     color: 0xd3d3d3,
//     radius: 0.5,
//     position: { x: 1.5, y: 1.5, z: -5 },
//   },
//   {
//     delta: 0,
//     mesh: null,
//     speed: 0.1,
//     color: 0xd3d3d3,
//     radius: 0.5,
//     position: { x: -2.2, y: -2.2, z: -5 },
//   },
// ];
// const states = [
//   {
//     rotation: { x: 0, y: Math.PI, z: 0 },
//     scale: 3,
//     position: { x: 0, y: -0.8, z: 0 },
//   },
//   {
//     rotation: { x: 0, y: 1, z: 0 },
//     scale: 6,
//     position: { x: 0.2, y: 0, z: 0 },
//   },
//   {
//     rotation: { x: 0, y: -1, z: 0.4 },
//     scale: 5,
//     position: { x: 0.2, y: 0.1, z: 0 },
//   },
//   {
//     rotation: { x: 0, y: -Math.PI * 2, z: 0 },
//     scale: 8,
//     position: { x: 0, y: 0, z: 0 },
//   },
// ];

// const interpolateStates = (progress: number) => {
//   if (vueLogo) {
//     const stateIndex = Math.floor(progress);
//     const nextStateIndex =
//       stateIndex + 1 < states.length ? stateIndex + 1 : stateIndex;
//     const lerpFactor = progress - stateIndex;

//     vueLogo.rotation.x = THREE.MathUtils.lerp(
//       states[stateIndex].rotation.x,
//       states[nextStateIndex].rotation.x,
//       lerpFactor
//     );
//     vueLogo.rotation.y = THREE.MathUtils.lerp(
//       states[stateIndex].rotation.y,
//       states[nextStateIndex].rotation.y,
//       lerpFactor
//     );
//     vueLogo.rotation.z = THREE.MathUtils.lerp(
//       states[stateIndex].rotation.z,
//       states[nextStateIndex].rotation.z,
//       lerpFactor
//     );

//     vueLogo.scale.x = THREE.MathUtils.lerp(
//       states[stateIndex].scale,
//       states[nextStateIndex].scale,
//       lerpFactor
//     );
//     vueLogo.scale.y = THREE.MathUtils.lerp(
//       states[stateIndex].scale,
//       states[nextStateIndex].scale,
//       lerpFactor
//     );
//     vueLogo.scale.z = THREE.MathUtils.lerp(
//       states[stateIndex].scale,
//       states[nextStateIndex].scale,
//       lerpFactor
//     );

//     vueLogo.position.x = THREE.MathUtils.lerp(
//       states[stateIndex].position.x,
//       states[nextStateIndex].position.x,
//       lerpFactor
//     );
//     vueLogo.position.y = THREE.MathUtils.lerp(
//       states[stateIndex].position.y,
//       states[nextStateIndex].position.y,
//       lerpFactor
//     );
//     vueLogo.position.z = THREE.MathUtils.lerp(
//       states[stateIndex].position.z,
//       states[nextStateIndex].position.z,
//       lerpFactor
//     );
//   }
// };

// const getRandomPinkColor = () => {
//   const red = 200 + Math.floor(Math.random() * 56);
//   const green = Math.floor(Math.random() * 50);
//   const blue = 100 + Math.floor(Math.random() * 156);

//   const color = (red << 16) + (green << 8) + blue;
//   return color;
// };

// const makeHeartShape = () => {
//   const heartShape = new THREE.Shape();

//   const x = 0,
//     y = 0;
//   const h = 19;
//   heartShape.moveTo(x + 5, h - (y + 5));
//   heartShape.bezierCurveTo(x + 5, h - (y + 5), x + 4, h - y, x, h - y);
//   heartShape.bezierCurveTo(
//     x - 6,
//     h - y,
//     x - 6,
//     h - (y + 7),
//     x - 6,
//     h - (y + 7)
//   );
//   heartShape.bezierCurveTo(
//     x - 6,
//     h - (y + 11),
//     x - 3,
//     h - (y + 15.4),
//     x + 5,
//     h - (y + 19)
//   );
//   heartShape.bezierCurveTo(
//     x + 12,
//     h - (y + 15.4),
//     x + 16,
//     h - (y + 11),
//     x + 16,
//     h - (y + 7)
//   );
//   heartShape.bezierCurveTo(x + 16, h - (y + 7), x + 16, h - y, x + 10, h - y);
//   heartShape.bezierCurveTo(
//     x + 7,
//     h - y,
//     x + 5,
//     h - (y + 5),
//     x + 5,
//     h - (y + 5)
//   );

//   return heartShape;
// };

// const onReady = (args: LoadEventData) => {
//   const canvas = args.object as Canvas;
//   const ctx = canvas.getContext("webgl2");
//   const width: any = canvas.width;
//   const height: any = canvas.height;

//   if (!ctx) {
//     console.error("No context");
//     return;
//   }

//   renderer = new THREE.WebGLRenderer({
//     context: ctx,
//   });

//   camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

//   camera.position.z = 5;

//   const dirLight = new THREE.DirectionalLight(0xffbb99, 1);
//   dirLight.position.set(30, 80, 30);
//   scene.add(dirLight);
//   const ambLight = new THREE.AmbientLight(0xffffff, 1);
//   scene.add(ambLight);

//   const loader = new GLTFLoader();
//   loader.load("~/assets/logo_vue.glb", (gltf: any) => {
//     vueLogo = gltf.scene;
//     scene.add(gltf.scene);
//     interpolateStates(props.progress);
//     animate(0);
//   });

//   const heartShape = makeHeartShape();

//   const numberOfHearts = 40;

//   const xRange = { min: -3, max: 3 };
//   const yRange = { min: -3, max: 3 };
//   const zRange = { min: -3, max: -2 };

//   const updateHearts = () => {
//     for (let i = 0; i < numberOfHearts; i++) {
//       let mesh: THREE.Mesh;
//       if (!hearts[i]) {
//         const delta = Math.random() * 1;
//         let speed = Math.random() * 0.02 + 0.005;
//         if (Math.random() > 0.5) {
//           speed *= -1;
//         }
//         const color = getRandomPinkColor();
//         const size = Math.random() * 2 + 0.5;
//         const geometry = new THREE.ShapeGeometry(heartShape);
//         const material = new THREE.MeshBasicMaterial({ color });
//         const mesh = new THREE.Mesh(geometry, material);
//         const spread = Math.random();
//         const position = {
//           x: Math.random() * (xRange.max - xRange.min) + xRange.min,
//           y: Math.random() * (yRange.max - yRange.min) + yRange.min,
//           z: Math.random() * (zRange.max - zRange.min) + zRange.min,
//         };
//         mesh.position.set(position.x, position.y, position.z);
//         mesh.scale.set(size * 0.01, size * 0.01, size * 0.01);
//         mesh.castShadow = true;
//         mesh.receiveShadow = true;
//         material.transparent = true;
//         material.opacity = 0.7;

//         hearts.push({
//           delta,
//           mesh: mesh,
//           speed,
//           color,
//           size,
//           position,
//           spread,
//         });

//         scene.add(mesh);
//       } else {
//         mesh = hearts[i].mesh;
//       }

//       if (!mesh) {
//         return;
//       }

//       hearts[i].delta += hearts[i].speed / 10;
//       mesh.position.set(
//         hearts[i].position.x + Math.sin(hearts[i].delta) * hearts[i].spread,
//         hearts[i].position.y + Math.cos(hearts[i].delta) * hearts[i].spread,
//         hearts[i].position.z + Math.cos(hearts[i].delta) * hearts[i].spread
//       );
//     }
//   };

//   const updateCircles = () => {
//     circles.forEach((circle) => {
//       let mesh: THREE.Mesh;
//       if (!circle.mesh) {
//         const geometry = new THREE.CircleGeometry(circle.radius, 32);
//         const material = new THREE.MeshBasicMaterial({ color: circle.color });
//         const mesh = new THREE.Mesh(geometry, material);
//         mesh.position.set(
//           circle.position.x,
//           circle.position.y,
//           circle.position.z
//         );
//         mesh.castShadow = true;
//         mesh.receiveShadow = true;
//         material.transparent = true;
//         material.opacity = 0.7;

//         circle.mesh = mesh;
//         scene.add(mesh);
//       } else {
//         mesh = circle.mesh;
//       }

//       if (!mesh) {
//         return;
//       }

//       circle.delta += circle.speed / 100;
//       mesh.position.set(
//         circle.position.x + Math.sin(circle.delta) * 0.3,
//         circle.position.y + Math.cos(circle.delta) * 0.3,
//         circle.position.z + Math.cos(circle.delta) * 0.3
//       );
//     });
//   };

//   const animate = (time: number) => {
//     requestAnimationFrame(animate);

//     updateHearts();
//     updateCircles();

//     renderer.render(scene, camera);
//   };
// };
</script>
<template>
  <GridLayout></GridLayout>
  <!-- <Canvas @ready="onReady" class="bg-green-50"></Canvas> -->
</template>
