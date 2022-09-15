import styled from 'styled-components'

export const HeadingContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 5rem;

  span {
    color: ${props => props.theme['brand-green']};
    text-transform: uppercase;
  }

  strong {
    font-size: 2.5rem;
  }

`