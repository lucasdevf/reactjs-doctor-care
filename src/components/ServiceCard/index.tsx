import React from 'react'
import { ServiceCardContainer, CheckIcon } from './styles'

interface Props {
  title: string
  description: string
}

export function ServiceCard({ title, description }: Props) {
  return (
    <ServiceCardContainer>
      <CheckIcon />

      <strong>{title}</strong>
      <span>{description}</span>
    </ServiceCardContainer>
  )
}