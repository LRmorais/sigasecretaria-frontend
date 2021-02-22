import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="SigaSecretaria" />

      <Form onSubmit={() => console.log('ok')}>
        <h1>Entre com suas credenciais</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="#forgot">Esqueci minha senha</a>
      </Form>
      <a href="#create">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
  </Container>
);

export default Signin;
