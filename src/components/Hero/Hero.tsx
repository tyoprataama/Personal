import React from "react";
import styles from "./style";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Navbar from "../Navbar/Navbar";

const Img = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100px;
  right: 0px;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @media only screen and (max-width: 768px) {
    left: 0;
  }
`;
const Desc = styled.p`
  font-size: 24px;
  padding: 20px;
  color: #000;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  padding: 20px;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  color: #40513b;
  background-color: #edf1d6;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  padding: 0 0 0 20px;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #37306b;
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  position: relative;
  flex: 3;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>
            Hi, I AM TYO <br /> I AM DEVELOPER
          </Title>
          <Desc>
            Especially in front-end engineering with 3+ years experience
          </Desc>
          <Button>More about me</Button>
        </Left>
        <Right>
          <Canvas style={styles.sphere}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img>
            <img style={styles.me} src={require("../Img/me.png")} alt="me" />
          </Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
