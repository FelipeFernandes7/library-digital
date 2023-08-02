import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    height: 15rem;
    height: 15rem;
  }
  h1 {
    color: #ffffff;
    text-align: center;
    align-items: center;
    span {
      color: #7d5fff;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rems;
  }
`
export const ButtonBox = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  .btn1 {
    cursor: pointer;
    padding: 10px;
    color: #fff;
    background: #7d5fff;
    border: none;
    border-radius: 4px;
    font-family: 'Nunito';
    box-shadow: #202020 2px 2px 10px;
  }
  .btn2 {
    cursor: pointer;
    margin-left: 1rem;
    padding: 10px;
    background: transparent;
    color: #7d5fff;
    border: #7d5fff 1px solid;
    font-weight: 600;
    border-radius: 4px;
    font-family: 'Nunito';
    box-shadow: #202020 2px 2px 10px;
  }
  .btn1:hover,
  .btn2:hover {
    transition: 0.2s ease-in;
    background: #fff;
    color: #7d5fff;
  }
`
export const Center = styled.main`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`
