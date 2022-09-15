import React from 'react'
import { HeadingContainer } from './styles'

interface Props {
  title: string
  subtitle: string
}

export function Heading({ title, subtitle }: Props) {
  return (
    <HeadingContainer>
      <span>{title}</span>
      <strong>{subtitle}</strong>
    </HeadingContainer>
  )
}