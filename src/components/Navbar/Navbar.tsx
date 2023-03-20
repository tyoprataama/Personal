import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 50px;
  padding: 10px;
`

const Navbar = () => {
  return (
    <Nav>
      <h3>Welcome to my page!</h3>
    </Nav>
  );
};

export default Navbar;
