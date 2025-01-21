import React from "react";
import styled from "styled-components";
import BannerIMG from "../assets/banner.png";

const About: React.FC = () => {
  return (
    <Container banner={BannerIMG}>
      <TextContainer>
        <Title>
          Especialistas em Veículos <b>Honda</b> Clássicos
        </Title>
        <SubTitle>
          Cuidado, Performance e Excelência para o seu <b>Prelude</b>,{" "}
          <b>Civic</b>, <b>CRX</b> e <b>Del Sol</b>!
        </SubTitle>
      </TextContainer>
    </Container>
  );
};
const Container = styled.div<{ banner: string }>`
  height: 680px;
  padding: 20px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.banner});
  background-size: cover;
  background-position: center;
  color: #fff;

  @media (max-width: 768px) {
    height: 400px;
    padding: 10px;
  }
`;

const TextContainer = styled.div`
  max-width: 1920px;

  text-align: left;
  height: auto;
  margin: 200px 0;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 100px 0;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h2`
  font-size: 50px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export default About;
