const NomeContext = React.createContext('nome')

function MeuComponent1() {
  const meuNome = 'Bruno Mendes'
  // return (
  //   React.createElement(NomeContext.Provider, { value: meuNome },
  //     React.createElement('div', { className: 'component-1' },
  //       React.createElement(meuComponent2, { nome: meuNome }))
  //   )
  // )

  return (
    <NomeContext.Provider value={meuNome}>
      <div className="component-1">
        <MeuComponent2 />
      </div>
    </NomeContext.Provider>
  )
}

function MeuComponent2() {
  // return (
  //   React.createElement('div', { className: 'component-2' },
  //     React.createElement(meuComponent3))
  // )

  return (
    <div className="component-3">
      <MeuComponent3 />
    </div>
  )
}

function MeuComponent3() {
  // return (
  //   React.createElement('div', { className: 'component-3' },
  //     React.createElement(meuComponent4))
  // )

  return (
    <div className="component-3">
      <MeuComponent4 />
    </div>
  )
}

function MeuComponent4() {

  // return (
  //   React.createElement(NomeContext.Consumer, null,
  //     (nomeContext) => {
  //       console.log(nomeContext)
  //       return (React.createElement('div', { className: 'component-4' },
  //         React.createElement('p', null, nomeContext)))
  //     })
  // )

  return (
    <NomeContext.Consumer>
      {(nomeContext) => ( 
        <div className="component-4">
          <p>{nomeContext}</p>
        </div>
      )}
    </NomeContext.Consumer>
  )  
}

function MeuComponent() {
  // return React.createElement('div', null,
  //   React.createElement(meuComponent1)
  // )

  return (
    <div id="components">
      <MeuComponent1 />
    </div>
  )
}

ReactDOM.render(
  <MeuComponent />,
  document.getElementById('app')
)