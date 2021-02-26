import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
// importa todas as validações do yup
import * as Yup from 'yup';

// import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, AnimationContainer, DivLogo } from './styles';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // --------Hooks de context ---------------
  // const { user, signIn } = useAuth();
  const { addToast } = useToast();
  // ---------------------------------------

  const handleSubmit = useCallback(
    async (data: string) => {
      try {
        // zera os erros no final
        formRef.current?.setErrors({});
        //  tipo.obrigatoriedade('mensagem de erro')
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigátorio')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigátoria'),
        });

        await schema.validate(data, {
          // retorna todos os erros de uma vez só
          abortEarly: false,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        // disparar toast
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <DivLogo>
            <img src={logoImg} alt="SigaSecretaria" />
          </DivLogo>
          <Form ref={formRef} onSubmit={handleSubmit}>
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
          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Signin;
