import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./style";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  background-color: #c9d6df;
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
  const ref:any = useRef();
  const [success, setSuccess]:any = useState(null);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_bbyfbtc",
      "template_7lcyoot",
      ref.current,
      "991RSR6EdAYgYBcB5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          
        }
      )
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
            "Your message has been sent. We'll get back to you soon :)"
            }
          </Form>
        </Left>
        <Right>
          <Title style={styles.title}>My Location</Title>
          <img style={styles.img} src={require("../Img/map.png")} alt="map" />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
