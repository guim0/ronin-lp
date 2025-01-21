import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  max-width: 1920px;
  margin: 0 auto;
  height: auto;
  padding: 2rem 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 0 1rem;
    text-align: left;
    max-width: 100%;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    max-width: 600px;
    height: 680px;
    flex-direction: column;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const InputContainer = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 52px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  font-size: 38px;
  color: #fff;
  padding: 0 1rem;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const Label = styled.label`
  font-size: 16px;
  color: #fff;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem 1rem;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [car, setCar] = React.useState<string>("");
  const [problem, setProblem] = React.useState<string>("");
  const sendMessage = (name: string, car: string, problem: string) => {
    const message = `Olá! sou ${name !== "" ? `sou ${name}` : "cliente"}, ${
      car !== "" ? `meu carro é um ${car}` : ""
    }e gostaria de um orçamento ${problem !== "" ? `sobre ${problem}` : ""}`;
    const url = `https://api.whatsapp.com/send?phone=5511990047545&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const handleSubmit = () => {
    sendMessage(name, car, problem);
  };
  return (
    <FooterContainer>
      <div>
        <Title>Orçamento</Title>
        <Text>
          <b>
            Atenção: Somos uma mecânica especializada e atendemos exclusivamente
            com agendamento.
          </b>
          <br /> Use este espaço para nos contar como podemos ajudar você e seu
          Honda. Nossa equipe está pronta para oferecer o cuidado que seu
          veículo merece!
        </Text>
      </div>
      <Form>
        <InputContainer>
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Seu nome"
            name="name"
            onChange={(e) => setName(e.target.value as any)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Modelo do Carro</Label>
          <Input
            type="text"
            placeholder="Qual carro?"
            name="car"
            onChange={(e) => setCar(e.target.value as any)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Como podemos ajudar?</Label>
          <Input
            type="text"
            placeholder="Qual problema precisa resolver?"
            name="problem"
            onChange={(e) => setProblem(e.target.value as any)}
          />
        </InputContainer>
        <SubmitButton type="submit" onClick={handleSubmit}>
          Enviar
        </SubmitButton>
      </Form>
    </FooterContainer>
  );
};

export default Footer;
