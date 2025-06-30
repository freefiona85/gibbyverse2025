import * as THREE from 'three';

export function loadBubbyGuardian(scene, textureLoader) {
   
    const bubguard = new THREE.Mesh( 
      new THREE.PlaneGeometry(10,10),
      new THREE.MeshLambertMaterial({ map: textureLoader.load('assets/Angy_bubby.png'), transparent: true })
    );

    bubguard.position.set(0,2,9); 
	bubguard.scale.set (1.4,1.4,1.4);
    bubguard.rotation.y = 0; 


    bubguard.castShadow = true; 
    bubguard.receiveShadow = true; 
	scene.add(bubguard);

}
