import styled from 'styled-components';
import MyFont from './amsipro-ultra.otf';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 5%;
  margin-left: 0;

  @media (max-width: 500px) {
    margin: 0;
    width: 100%;
    padding: 5%;
    padding-bottom: 0;

    img {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 3%;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    padding: 0%;
  }

  ::before {
    content: '';
    position: absolute;
    background-color: #cc2f2a;
    width: 50%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    left: 0;

    @media (max-width: 500px) {
      position: relative;
    }
  }
`;

export const FirstContent = styled.div`
  text-align: center;
  width: 50%;
  z-index: 10;
  background-color: #cc2f2a;
  color: #fff;

  h2 {
    font-size: 28px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    line-height: 30px;
  }
  @media (max-width: 500px) {
    width: 100%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`;

export const SecondContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;

  input,
  select {
    height: 40px;
    width: 100%;
    border: none;
    background-color: #ecf0f9;
    padding: 3%;
    :hover {
      background-color: #e3effa;
    }
  }
  label {
    display: flex;
    margin: 3%;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: block;
  min-width: 120px;
  border: none;
  background-color: #cc2f2a;
  color: white;
  border-radius: 25px;
  margin: 5%;
  padding: 8px;
`;

export const Results = styled.div`
  @font-face {
    font-family: 'MyFont';
    src: url(${MyFont});
  }

  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 5%;
  font-size: 150%;

  strong {
    color: #cc2f2a;
  }

  span {
    font-family: MyFont;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
    margin-top: 1%;
    font-size: 100%;
  }
`;
