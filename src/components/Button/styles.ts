import styled from 'styled-components'

export type Variant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: Variant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`

  border-radius: 40px;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: bold;

  color: ${props => props.variant === 'secondary' ?  props.theme['brand-green'] : props.theme['white']};
  background: ${props => props.variant === 'secondary' ?  'transparent' : props.theme['brand-green']};
  border: 1px solid ${props => props.theme['brand-green']};

  cursor: pointer;

  &:hover {
    color: ${props => props.theme['white']};
    background: ${props => props.variant === 'secondary' ?  props.theme['brand-green'] : props.theme['brand-green-hover']};
  }

`