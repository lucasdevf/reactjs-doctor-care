import styled from 'styled-components'

export const HeaderContainer = styled.header`

  background: ${props => props.theme['brand-green-light']};

`

export const HeaderContent = styled.div`

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }

`

interface ItemMenuProps {
  selected?: boolean
}

export const ItemMenu = styled.li<ItemMenuProps>`

  color: ${props => props.theme['brand-green']};  
  list-style: none;
  padding: 1.5rem;
  border-bottom: 2px solid ${props => props.selected ? props.theme['brand-green'] : 'transparent'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  cursor: pointer;

`