import React from "react";
import styled from "styled-components";
//
import bg from "../../../../../assets/image/servesbg2.png";
import Application from "../../../../../components/application";
import Logo from "../../../../../assets/image/LogoBg.png";
import ForApp from "../../../../../components/forApp";

///
export default function ConnectionUs() {
  return (
    <StyleConnectionUs>
      <div className="container">
        <ForApp>
          <div className="for__app">
            <div className="logo__text">
              <img src={Logo} alt="logo" />
              <h3>Biz bilan yorqin kelajak quring!</h3>
            </div>
            <Application />
          </div>
        </ForApp>
      </div>
    </StyleConnectionUs>
  );
}

const StyleConnectionUs = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;
