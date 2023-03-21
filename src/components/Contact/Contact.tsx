import React from "react";
import styles from "./style";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  background-color: #3c6255;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
`;

const Button = styled.button`
  background-color: #37306b;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
          </Form>
        </Left>
        <Right>
          <Title style={styles.title}>My Location</Title>
          <img style={styles.img} src={require("../Img/map.png")} />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
