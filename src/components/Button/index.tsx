import React from 'react'
import { ButtonContainer, Variant } from './styles'

interface Props {
  text: string
  variant?: Variant
}

export function Button({
  text,
  variant = 'secondary'
}: Props) {
  return (
    <ButtonContainer
      variant={variant}
    >
      {text}
    </ButtonContainer>
  )
}