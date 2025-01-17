/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/house/scene.gltf 
Author: Zilardar (https://sketchfab.com/Zilardar)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-house-66ea8904172f453098283706bb8afec8
Title: Stylized house
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function OutHouse(props) {
  const { nodes, materials } = useGLTF("models/house/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.LP1_house_0.geometry}
          material={materials.house}
        />
        <mesh
          geometry={nodes.LP2_ground_0.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.LP3_karkas_0.geometry}
          material={materials.karkas}
        />
        <mesh
          geometry={nodes.LP4_house_0.geometry}
          material={materials.house}
        />
        <mesh
          geometry={nodes.LP5_karkas_0.geometry}
          material={materials.karkas}
        />
        <mesh
          geometry={nodes.LP6_ground_0.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.LP7_karkas_0.geometry}
          material={materials.karkas}
        />
        <mesh
          geometry={nodes.LP8_karkas_0.geometry}
          material={materials.karkas}
        />
        <mesh
          geometry={nodes.LP9_karkas_0.geometry}
          material={materials.karkas}
        />
        <mesh
          geometry={nodes.LP10_karkas_0.geometry}
          material={materials.karkas}
        />
        <mesh
          geometry={nodes.LP11_karkas_0.geometry}
          material={materials.karkas}
        />
        <mesh
          geometry={nodes.LP12_rocks_0.geometry}
          material={materials.rocks}
        />
        <mesh
          geometry={nodes.LP13_rocks_0.geometry}
          material={materials.rocks}
        />
        <mesh
          geometry={nodes.LP14_rocks_0.geometry}
          material={materials.rocks}
        />
        <mesh
          geometry={nodes.LP15_props_0.geometry}
          material={materials.props}
        />
        <mesh
          geometry={nodes.LP16_props_0.geometry}
          material={materials.props}
        />
        <mesh
          geometry={nodes.LP17_rocks_0.geometry}
          material={materials.rocks}
        />
        <mesh
          geometry={nodes.LP18_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          geometry={nodes.LP19_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          geometry={nodes.LP20_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          geometry={nodes.LP21_roof1_0.geometry}
          material={materials.roof1}
        />
        <mesh
          geometry={nodes.LP22_roof2_0.geometry}
          material={materials.roof2}
        />
        <mesh
          geometry={nodes.LP23_roof2_0.geometry}
          material={materials.roof2}
        />
        <mesh
          geometry={nodes.LP24_roof2_0.geometry}
          material={materials.roof2}
        />
        <mesh
          geometry={nodes.LP25_roof2_0.geometry}
          material={materials.roof2}
        />
        <mesh
          geometry={nodes.LP26_roof2_0.geometry}
          material={materials.roof2}
        />
        <mesh
          geometry={nodes.LP27_props_0.geometry}
          material={materials.props}
        />
        <mesh
          geometry={nodes.LP28_props_0.geometry}
          material={materials.props}
        />
        <mesh
          geometry={nodes.LP29_props_0.geometry}
          material={materials.props}
        />
        <mesh
          geometry={nodes.LP30_drova_0.geometry}
          material={materials.drova}
        />
        <mesh
          geometry={nodes.LP31_drova_0.geometry}
          material={materials.drova}
        />
        <mesh
          geometry={nodes.LP32_drova_0.geometry}
          material={materials.drova}
        />
        <mesh
          geometry={nodes.LP33_drova_0.geometry}
          material={materials.drova}
        />
        <mesh
          geometry={nodes.LP34_drova_0.geometry}
          material={materials.drova}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
