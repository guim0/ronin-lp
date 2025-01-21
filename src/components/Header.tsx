import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin: auto;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: #0a0a0a;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerOptions = [
    { title: "Sobre", link: "#sobre" },
    { title: "Serviços", link: "#servicos" },
    { title: "Profissionais", link: "/time" },
    { title: "Contato", link: "#contato" },
    { title: "Orçamento", link: "#orcamento" },
  ];

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} alt="Ronin Automotiva" />
      </LogoContainer>

      {isMobile ? (
        <>
          <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuIcon>
          <MobileLinks isOpen={isOpen}>
            <div onClick={() => setIsOpen(!isOpen)}>
              <FaTimes />
            </div>
            {headerOptions.map((option, index) => (
              <Link key={index}>
                <a href={option.link}>{option.title}</a>
              </Link>
            ))}
          </MobileLinks>
        </>
      ) : (
        <Links>
          {headerOptions.map((option, index) => (
            <Link key={index}>
              <a href={option.link}>{option.title}</a>
            </Link>
          ))}
        </Links>
      )}
      <TalkToUs>Fale Conosco</TalkToUs>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  background-color: #0a0a0a;
  color: #fff;
  max-height: 200px;
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LogoContainer = styled.div`
  max-width: 25%;
  padding: 1rem;

  img {
    max-width: 80px;
    width: 100%;
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: auto;
`;

const Link = styled.li`
  a {
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: red;
      text-decoration: underline;
      transition: color 0.3s ease, text-decoration 0.3s ease;
    }
  }
`;

const TalkToUs = styled.a`
  padding: 1rem 1rem;
  background-color: #9f0b0b;
  text-align: center;
  color: #fff;
  margin: 0 1rem;
  font-size: 20px;
  border-radius: 3px;
`;

export default Header;
