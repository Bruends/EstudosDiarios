import React from 'react'

const Produtos = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src}></img>
    </div>
  )
}

export default Produtos
