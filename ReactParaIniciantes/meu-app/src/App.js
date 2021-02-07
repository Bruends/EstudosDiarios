import React from 'react'

const App = () => {  
  // useState Hook
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'Bruno', idade: 24})
  const [clickCounter, setClickCounter] = React.useState(0)
  
  function handleClick(){
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'fez faculdade'})
    setClickCounter((counter) => counter + 1)
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <p>{clickCounter}</p>
    </>
  )
}


export default App