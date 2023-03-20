import React from "react";
import styles from "./style";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  color: #edf1d6;
  background-color: #40513b;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Item = styled.div`
  padding: 50px;
  font-weight: 500;
  font-size: 30px;
`;
const Desc = styled.div`
  padding: 50px;
  text-align: justify;
`;
const Portfolio = styled.div`
  display: flex;
  width: 100%;
  justify content: center;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 20px;
`;

const Who = () => {
  const list = [
    {
      id: 1,
      title: "React JS",
      desc: "Packo is a user-friendly web-based application designed to simplify the ordering process for various products. This app is built on React JS, a popular JavaScript library that enables smooth and efficient user interaction. The app offers a seamless and intuitive user interface, making it easy for customers to place orders with just a few clicks.Packo is an all-in-one ordering platform that caters to the needs of various industries, from food and beverage to retail and e-commerce. The app allows users to browse through a wide range of products, view product details, and select their preferred quantity. Additionally, users can customize their orders by adding specific instructions or notes for the seller.",
      img: require("../Img/packo.png"),
      link: "https://packo-portfolio.web.app/",
    },
    {
      id: 2,
      title: "React",
      desc: "Packo is a user-friendly web-based application designed to simplify the ordering process for various products. This app is built on React JS, a popular JavaScript library that enables smooth and efficient user interaction. The app offers a seamless and intuitive user interface, making it easy for customers to place orders with just a few clicks.Packo is an all-in-one ordering platform that caters to the needs of various industries, from food and beverage to retail and e-commerce. The app allows users to browse through a wide range of products, view product details, and select their preferred quantity. Additionally, users can customize their orders by adding specific instructions or notes for the seller.",
      img: require("../Img/packo.png"),
      link: "https://packo-portfolio.web.app/",
    },
    {
      id: 3,
      title: "Tailwind",
      desc: "Packo is a user-friendly web-based application designed to simplify the ordering process for various products. This app is built on React JS, a popular JavaScript library that enables smooth and efficient user interaction. The app offers a seamless and intuitive user interface, making it easy for customers to place orders with just a few clicks.Packo is an all-in-one ordering platform that caters to the needs of various industries, from food and beverage to retail and e-commerce. The app allows users to browse through a wide range of products, view product details, and select their preferred quantity. Additionally, users can customize their orders by adding specific instructions or notes for the seller.",
      img: require("../Img/packo.png"),
      link: "https://packo-portfolio.web.app/",
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
                <Item key={id}>{title}</Item>
                <img style={styles.image} src={img} alt="portfollio" />
                <Desc>{desc}</Desc>
                <Button><a href={link}>More details</a></Button>
              </Wrap>
            </Portfolio>
          );
        })}
      </Container>
    </>
  );
};

export default Who;
