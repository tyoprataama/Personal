import React from "react";
import styles from "./style";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  const Img = styled.div`
    animation: animate 2s infinite ease alternate;
    @keyframes animate {
      to {
        transform: translateY(20px);
      }
    }
  `;
  return (
    <div style={styles.container}>
      <div style={styles.nav}>
      <Navbar />
      </div>
      <div style={styles.main}>
        <h1 style={styles.fontHeader}>Hello Hero</h1>
        <div style={styles.right}>
          <Img>
            <img style={styles.me} src={require("../Img/me.png")} alt="" />
          </Img>
          <Canvas style={styles.sphere}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#220736"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
