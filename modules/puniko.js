// puniko.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadPunikoModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/koi/scene.gltf",
    (gltf) => {
      const koi = gltf.scene;

      // console.log("PUNIKO", gltf);

      // Position the puniko at the center of the floor
      koi.position.set(0, 3, 0);

      // Scale if necessary
      koi.scale.set(5, 5, 5);

      // Iterate through all the meshes in the statue and update their materials
      koi.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            // Modify child.material here to improve appearance
            (child.material.metalness = 0.0),
            (child.material.roughness = 0.2),
            // Cast shadow
            (child.castShadow = true);

          // console.log("Puniko Material:", child.material);
        }
      });

      // Add the puniko to the scene
      scene.add(koi);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};
