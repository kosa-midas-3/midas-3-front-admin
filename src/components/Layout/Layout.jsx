import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(prop) => prop.justify};
  align-items: center;
`;

const Layout = ({ justify, children }) => {
  return <LayoutStyle justify={justify}>{children}</LayoutStyle>;
};

export default Layout;
