import React from "react";
import styles from "./style";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #000;
  background-color: #aac4ff;
  padding: 40px;
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
  padding: 20px;
  margin-left: 20px;
  height: 100%;
  gap: 20px;
  background-color: #060047;
  border-radius: 30px;
  color: #fff;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-left: 0;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 34px;
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
const List = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  flex: 3;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Work = () => {
  return (
    <>
      <h1 style={styles.container}>More About Me</h1>
      <Container>
        <Right>
          <p style={styles.desc}>
            I'm currently an active student in one of University in Kediri, I'm
            interested in Website Development. I'm the hard working and
            ambitious person who is responsible for every task that I undertake,
            always willing to learn new skills. I am self-taught programming and
            I am still learning until now, I am looking some experience in this
            industry by creating some project and earn my own certification.
            While I keep busy learning programming, I still take interviews in
            search of a great team & projects that interest me.
          </p>
          <h3 style={styles.touch}>Get in Touch</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/ty000o/">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tyo-pratama/">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/sahacing_004">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/tyoprataama">Github</a>
            </li>
            <li>tyoprataama004@gmail.com</li>
          </ul>
        </Right>
        <Left>
          <h3 style={styles.title}>Top Expertise</h3>
          <List>
            <ul style={styles.list}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul style={styles.list}>
              <li>React JS</li>
              <li>React TS</li>
              <li>Node JS</li>
            </ul>
            <ul style={styles.list}>
              <li>My SQL</li>
              <li>Postgres</li>
            </ul>
            <ul style={styles.list}>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </ul>
          </List>
        </Left>
      </Container>
    </>
  );
};

export default Work;
