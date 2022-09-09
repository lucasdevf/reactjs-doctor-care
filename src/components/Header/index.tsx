import React from 'react'
import { HeaderContainer, HeaderContent, ItemMenu } from './styles'

import Logo from '../../assets/logo.svg'
import Image from 'next/future/image'
import { Button } from '../Button'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={Logo} alt="" />

        <ul>
          <ItemMenu selected>Início</ItemMenu>
          <ItemMenu>Sobre</ItemMenu>
          <ItemMenu>Serviços</ItemMenu>
          <ItemMenu>Depoimentos</ItemMenu>
        </ul>

        <Button text="AGENDAR CONSULTA" />
      </HeaderContent>
    </HeaderContainer>
  )
}