import React from "react";
import styled from "styled-components";

import mountain1 from "../images/mountain1.svg";
import mountain2 from "../images/mountain2.svg";
import mountain3 from "../images/mountain3.svg";
import mountain4 from "../images/mountain4.svg";
import mountain5 from "../images/mountain5.svg";
import heroWave from "../images/hero-wave.svg";
import blurLayer from "../images/bluelayer.webp";

export default function HeroBackground() {
  return (
    <Wrapper>
      <Wave1 />
      <Wave2 />
      <BlurLayer />
      <Wave3 />
      <Wave4 />
      <Wave5 />
      <Wave6 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  text-align:center;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
  text-align: center;
  background-size: cover;
  background-repeat: repeat;
   
  overflow: hidden;
  z-indez:-1
`;

const Wave = styled.div`
  position: fixed;
  width: 100vw;
   height: 100vh;
  
  background-position: center;
 
  background-size: cover;

  @media (max-width: 1440px) {
    
  }
`;

const Wave1 = styled(Wave)`
  top: 190px;
  height: 100vh;
  background-image: url(${mountain1});
`;

const Wave2 = styled(Wave)`
  top: 160px;
  height: 100vh;
  background-image: url(${mountain2});
   background-repeat: repeat-y;
`;

const Wave3 = styled(Wave)`
  top: 347px;
  height: 100vh;
  background-image: url(${mountain3});
`;

const Wave4 = styled(Wave)`
  top: 466px;
  height: 100vh;
  background-image: url(${mountain4});
   background-repeat: repeat;
`;

const Wave5 = styled(Wave)`
  top: 450px;
  height: 100vh;
  background-image: url(${mountain5});
   background-repeat: repeat;
`;

const Wave6 = styled(Wave)`
  top: 700px;
  height: 100vh;
  background-image: url(${heroWave});
   background-repeat: repeat;
`;

const BlurLayer = styled(Wave)`
  top: 100px;
  height: 100vh;
  background-image: url(${blurLayer});
   background-repeat: repeat;
`;
 