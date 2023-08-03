import { styled } from "styled-components";
import { Input } from "../../components/input";

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 70%;
  flex-direction: column;
  background: #232323;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 0.5rem;
  padding: 4rem;
  gap: 1rem;
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  button {
    height: 2.5rem;
    border: none;
    background: #7d5fff;
    border-radius: 0.5rem;
    color: #ffffffff;
    font-size: 1rem;
    font-weight: 400;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s linear;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    &:active {
      transform: scale(0.95);
    }
    &:hover {
      background: #6c5ce7;
    }
  }
`;

export const TextField = styled(Input)`
  height: 2.5rem;
  width: 100%;
  background: transparent;
  color: #ffffff;
  border: 1px solid #7d5fff;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  outline: none;
  &::placeholder {
    color: #dfe6e9;
  }
`;

export const Aside = styled.aside`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #6c5ce7;
  min-height: 100vh;
  gap: 0.5rem;
  color: #ffffffff;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Social = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      transition: all 0.3s linear;
      color: pink;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 0.95rem;
  color: #ffffffff;
  gap: 0.5rem;
  p {
    font-size: 0.75rem;
  }
  a {
    color: #6c5ce7;
    &:hover {
      transition: all 0.3s linear;
      color: #7d5fff;
    }
  }
  strong {
    color: #6c5ce7;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
`;
