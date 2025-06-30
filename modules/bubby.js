// bubby.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadBubbyModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/bubby/testBubby.gltf",
    (gltf) => {
      const bubby = gltf.scene;

      // console.log("STATUE", gltf);

      // Position the statue at the center of the floor
      bubby.position.set(0, 3, 0);

      // Scale if necessary
      bubby.scale.set(5, 5, 5);

      // Iterate through all the meshes in the statue and update their materials
      bubby.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            // Modify child.material here to improve appearance
            (child.material.metalness = 0.0),
            (child.material.roughness = 0.2),
            // Cast shadow
            (child.castShadow = true);

          // console.log("Statue Material:", child.material);
        }
      });

      // Add the model to the scene
      scene.add(bubby);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
