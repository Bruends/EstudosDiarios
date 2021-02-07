import React from 'react'


const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of swords', ano: 2008 }
  ]

  return (
    <div>
      <ul>
        {
          livros.filter(({ ano }) => ano >= 1998 )
            .map(({nome, ano}) => (
                <li key={nome}>{`${nome}, ${ano}`}</li>
            ))
        }
      </ul>
    </div>
  )
}


export default App