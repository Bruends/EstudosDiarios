import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`

const Preco = styled.p`
  background: ${({cor}) => cor };
`
const Comprar = styled.button`
  background: ${({ativo}) => ativo ? '#000' : '#e6e6e6'};
  color: #fff;
  &:hover {
    background: tomato;
  }
`

const StyledComponent = () => {
  const [ativo, setAtivo] = React.useState(true)
  
  function handleClick(){
    setAtivo(!ativo)    
  }

  return (
    <div>
      <Titulo>Olar marilene</Titulo>      
      <Comprar ativo={ativo} onClick={handleClick}>Comprar</Comprar>      
      <Preco cor='#634552'>Aaaa</Preco>
    </div>
  )
}

export default StyledComponent
