import React from "react";
import styled from "styled-components";
import VideoSrc from "../assets/video.mp4";

const Services: React.FC = () => {
  return (
    <Container>
      <TextSection>
        <h1>Serviços</h1>
        <ul>
          <li>Manutenção</li>
          <li>
            Upgrades
            <span>
              (swap de câmbio, mini-me, barra de torção de fabrição propria e
              muito mais!)
            </span>
          </li>
          <li>Recuperação</li>
          <li>Avaliação Pré-compra</li>
          <li>Consultoria</li>
          <li>E Muito Mais</li>
        </ul>
      </TextSection>
      <VideoSection>
        <Video controls muted preload="auto" controlsList="nodownload">
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoSection>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
    height: 680px;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 1rem;
  color: #fff;
  font-size: 32px;
  text-align: center;

  ul {
    font-size: 28px;
    padding: 0;
    li {
      margin: 10px 0;
      span {
        font-size: 18px;
        font-weight: 300;
        display: block;
        margin-top: 5px;
      }
    }
  }

  @media (min-width: 768px) {
    padding-right: 20px;
    font-size: 42px;
    text-align: left;

    ul {
      font-size: 38px;
      padding: 0 2rem;
    }
  }
`;

const VideoSection = styled.div`
  flex: 1;
  padding: 1rem;
  margin-top: 20px;

  @media (min-width: 768px) {
    padding-left: 20px;
    margin-top: 60px;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    max-width: 600px;
    height: 680px;
  }
`;
export default Services;
