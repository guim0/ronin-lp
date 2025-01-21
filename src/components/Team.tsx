import React from "react";
import styled from "styled-components";

const Team: React.FC = () => {
  return (
    <Container id="time">
      <Title>Profissionais</Title>
      <Text>
        Nossa equipe é formada por especialistas em veículos Honda clássicos,
        unindo tradição e inovação. O conhecimento técnico é um legado passado
        por gerações, garantindo que cada serviço seja realizado com excelência
        e respeito à história dos modelos icônicos da Honda. Na Ronin
        Automotiva, seu Honda está nas mãos de quem realmente entende e valoriza
        sua essência.
      </Text>
    </Container>
  );
};

export default Team;
const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 1rem 2rem;
  height: auto;
  margin: auto;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 52px;
  margin-bottom: 10px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Text = styled.p`
  font-size: 45px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
