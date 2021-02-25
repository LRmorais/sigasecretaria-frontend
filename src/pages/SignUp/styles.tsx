import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  /* stretch faz com os itens tenham o tamanho total da pagina */
  align-items: center;
`;

export const DivLogo = styled.div`
  width: 150px;
  height: 145px;

  margin-top: 2%;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  top: 50%;
  transform: translateY(-50%);

  position: absolute;

  /* form {
    margin: 50px 0;
    width: 340px;
    text-align: center; */

    /* h1 {
      margin-bottom: 24px;
    } */

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        /* escurecer 25% da cor */
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }

  /* estiliza o a diretamente dentro do content e não em outro nivel */
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      /* escurecer 30% da cor */
      color: ${shade(0.3, '#ff9000')};
    }
  }
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #312e38;

  border: 1px solid #ff7600;
  border-radius: 10px;

  padding: 0 30px;

  animation: ${appearFromLeft} 1s;

  > div {
    margin-top: 24px;
  }

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
    font-size: 16px;
  }

  > a {
    color: #ff9000;
    margin-top: 24px;
    margin-bottom: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.5, '#ff9000')};
    }
  }
`;
