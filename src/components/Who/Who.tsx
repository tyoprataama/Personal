import React from "react";
import styles from "./style";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  color: #000;
  background-color: #d2daff;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
const Item = styled.div`
  padding: 10px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 340px;
  margin-bottom: 40px;
  border: 1px solid var(--borderColor);
  -webkit-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 768px) {
  }
`;
const Desc = styled.div`
  padding: 50px;
  text-align: justify;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
`;
const Portfolio = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  justify content: center;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
    padding: 10px;
  }
`;
const Button = styled.button`
  background-color: #37306b;
  color: white;
  width: 100%;
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  bottom: 20px;
`;

const Who = () => {
  const list = [
    {
      id: 1,
      title: "React JS",
      desc: "Packo is not mobile friendly web-based application designed to simplify the ordering process for various products. This app is built on React JS, a popular JavaScript library that enables smooth and efficient user interaction.",
      img: require("../Img/packo.png"),
      link: "https://packo-portfolio.web.app/",
    },
    {
      id: 2,
      title: "Bootstrap",
      desc: "This is a user-friendly web-based application designed to grow the company brand. Using bootstrap as the technology inside of it, make the app is light and fast for the user and make anyone happy.",
      img: require("../Img/duaphanda.png"),
      link: "https://duaphanda.web.app/",
    },
    {
      id: 3,
      title: "Game JS",
      desc: "This game is not mobile friendly web-based game designed to make people think and have fun at the same time. Using DOM (Document Object Models) and simple JavaScript algorithm making this game is light and fast.",
      img: require("../Img/math.png"),
      link: "https://guessmynum-project.web.app/",
    },
  ];
  return (
    <>
      <h1 style={styles.container}>My Latest Project</h1>
      <Container>
        {list.map(({ id, title, desc, img, link }: any) => {
          return (
            <Portfolio>
              <Wrap>
                <Item key={id}>
                  <Title>{title}</Title>
                  <img style={styles.image} src={img} alt="portfollio" />
                  <Desc>{desc}</Desc>
                  <Button>
                    <a href={link}>More details</a>
                  </Button>
                </Item>
              </Wrap>
            </Portfolio>
          );
        })}
      </Container>
    </>
  );
};

export default Who;
