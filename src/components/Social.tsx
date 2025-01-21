import React from "react";
import styled from "styled-components";
import InstagramLogo from "../assets/instagram.png";
import LogoRonin from "../assets/logo.png";

const Social: React.FC = () => {
  const socials = [
    { title: "Ronin Automotiva", link: "ronin_automotiva" },
    { title: "VZDRS", link: "vzdrs" },
    { title: "Ninja Custom Cars", link: "ninjacustomcars" },
  ];
  return (
    <Container>
      <LogoContainer>
        <img src={LogoRonin} alt="" />
        <Text>
          Obrigado por visitar nosso site. <br />
          Siga nossas redes:
        </Text>
      </LogoContainer>
      <SocialContainer>
        {socials.map((items) => (
          <SocialLinks>
            <a href={`https://www.instagram.com/${items.link}`} target="_blank">
              <Instagram src={InstagramLogo} alt="" />
              <span> {items.title}</span>
            </a>
          </SocialLinks>
        ))}
      </SocialContainer>
    </Container>
  );
};
const SocialLinks = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.25rem;
    }
  }
`;

const Instagram = styled.img`
  width: 50px;
  @media (max-width: 768px) {
    width: 30px;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  height: auto;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 0rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const Text = styled.p`
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

export default Social;
