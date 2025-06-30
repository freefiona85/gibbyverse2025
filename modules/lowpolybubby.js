// bubby.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadLowPolyGibbyModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "models/lowpolybubby/result.gltf",
    (gltf) => {
      const bubby2 = gltf.scene;

      // console.log("STATUE", gltf);

      // Position the statue at the center of the floor
      bubby2.position.set(30, -3, -30);

      // Scale if necessary
      bubby2.scale.set(5, 5, 5);
      bubby2.rotation.y =Math.PI / 2;
      // Iterate through all the meshes in the statue and update their materials
      bubby2.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            // Modify child.material here to improve appearance
            (child.material.metalness = 0.0),
            (child.material.roughness = 0.0),
            // Cast shadow
            (child.castShadow = false);

          // console.log("Statue Material:", child.material);
        }
      });

      // Add the model to the scene
      scene.add(bubby2);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
