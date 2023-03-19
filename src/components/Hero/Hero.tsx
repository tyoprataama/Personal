import React from "react";
import styles from "./style";

const Hero = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.nav}>Welcome to my page!</h3>
      <div style={styles.main}>
        <h1 style={styles.fontHeader}>Hello Hero</h1>
        <img style={styles.me} src={require("../Img/me.png")} alt="" />
      </div>
    </div>
  );
};

export default Hero;
