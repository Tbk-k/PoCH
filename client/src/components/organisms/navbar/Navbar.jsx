import React from "react";
import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  width: 80%;
  height: 50px;
  max-width: 800px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.transparent};
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Navbar = () => {
  return <NavBarWrapper>

  </NavBarWrapper>;
};

export default Navbar;
