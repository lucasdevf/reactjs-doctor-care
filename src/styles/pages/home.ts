import styled from 'styled-components'

export const Container = styled.div`

  main {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;
    padding-bottom: 5rem;
    background-image: url('../../assets/woman.png');

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 5rem;
    }

    h1 {
      margin-top: 1rem;
      width: 40rem;
      font-size: 3.25rem;
    }

    p.description {
      margin: 2rem 0;
      color: ${props => props.theme['gray-paragraph']};
      width: 40rem;
      font-size: 1.25rem;
    }
  }

`

export const PlataformPresentation = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme['brand-green-light']};

`

export const Welcome = styled.p`

  color: ${props => props.theme['brand-green']};
  font-weight: bold;

`