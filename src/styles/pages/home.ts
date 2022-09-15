import styled from 'styled-components'

export const Container = styled.div`

  background: ${props => props.theme['brand-green-light-02']};

  div.content {
    background-image: url('../../assets/woman.png');
    background: ${props => props.theme['brand-green-light']};
    width: 100%;

    main {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      max-width: 1120px;
      padding-bottom: 5rem;
      width: 100%;
      margin: 0 auto;
      
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
  }

`

export const PlataformPresentation = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const Welcome = styled.p`

  color: ${props => props.theme['brand-green']};
  font-weight: bold;

`

export const BusinessNumbers = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;

  max-width: 1120px;  
  width: 100%;
  background: ${props => props.theme['brand-beige']};
  border-radius: 4px;
  padding: 3.75rem 7.5rem;
  margin-top: -5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    strong {
      font-size: 3rem;
    }

    span {
      color: ${props => props.theme['brand-green']};
    }
  }

`

export const Services = styled.section`
  display: flex;
  flex-direction: column;

  div.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;

    max-width: 1120px; 
  }

`