function MeuComponent1() {
  const meuNome = 'Bruno Mendes'
  // return (
  //   React.createElement(NomeContext.Provider, { value: meuNome },
  //     React.createElement('div', { className: 'component-1' },
  //       React.createElement(meuComponent2, { nome: meuNome }))
  //   )
  // )

  return (    
    <div className="component-1">
      <MeuComponent2>
        <MeuComponent4 nome={meuNome} />
      </MeuComponent2>
    </div>
    
  )
}

function MeuComponent2(props) {
  // return (
  //   React.createElement('div', { className: 'component-2' },
  //     React.createElement(meuComponent3))
  // )
  
  return (
    <div className="component-2">
      <div>
        <header>{ props.children }</header>
      </div>
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

function MeuComponent4(props) {

  // return (
  //   React.createElement(NomeContext.Consumer, null,
  //     (nomeContext) => {
  //       console.log(nomeContext)
  //       return (React.createElement('div', { className: 'component-4' },
  //         React.createElement('p', null, nomeContext)))
  //     })
  // )

  return (    
    <div className="component-4">
      <p>{props.nome}</p>
    </div>
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