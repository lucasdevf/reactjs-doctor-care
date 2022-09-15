import { Check } from 'phosphor-react'
import styled from 'styled-components'

export const ServiceCardContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid ${props => props.theme['brand-green-light']};

  padding: 1.5rem;
  background: white;
  gap: 1rem;

  strong {
    font-size: 1.5rem;
    color: ${props => props.theme['gray-headline']};
  }

  span {
    color: ${props => props.theme['gray-paragraph']};
  }

`

export const CheckIcon = styled(Check).attrs(({ theme }) => ({
  color: theme['brand-green'],
  size: 24
}))`
  background: ${props => props.theme['brand-green-light']};
  border-radius: 999px;
  padding: 4px;
`