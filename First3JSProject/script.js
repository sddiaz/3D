import * as THREE from "three"


// Scene
const scene = new THREE.Scene(); 

// Objects
const cube = new THREE.BoxGeometry(1,1,1); 
const cubeMaterial = new THREE.MeshBasicMaterial({color: 'red'}); 
const mesh = new THREE.mesh(cube, cubeMaterial); 

scene.add(mesh); 

// Sizes

const sizes = {
    width: 1280, 
    height: 720, 
}
// Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height);
scene.add(camera); 

// Renderer