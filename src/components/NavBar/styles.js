import styled from "styled-components";

export const Nav = styled.nav`
  aling-items: center;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  dispaly: flex;
  height: 50px;
  justify-content: space-arround;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 100;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color; #888; 
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`;
