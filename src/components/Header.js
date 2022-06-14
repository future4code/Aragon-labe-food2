import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`

  p {
 text-align: center;
  }
`;

export const Header = (props) => {
  return (
    <HeaderContainer>
      <header>
        {/* //Colocar icones */}
        <p> {props.title} </p>
      </header>
    </HeaderContainer>
  );
};
