import React from 'react'

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const totalGasto = (pessoa) => {
  const {compras} = pessoa
  const  preco  = compras.map((item) => item.preco)

  console.log(preco)
  const total = preco.reduce((currentTotal, item) => {
    return currentTotal += Number(item.replace('R$ ', ''))
  }, 0)
  return total
}

console.log(totalGasto(mario))

const App = () => {
  const dados = luana;

  const styleAtiva = {
    color: dados.ativa ? 'green' : 'Red'
  }

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p style={styleAtiva}>Situação: {dados.ativa ? 'ativa' : 'Desativa'}</p>
      <p>total: R$ {totalGasto(dados)}</p>
      <p>{totalGasto(dados) >= 10000 ? 'Gastou mto': ''}</p>
    </div>
  );
};


export default App