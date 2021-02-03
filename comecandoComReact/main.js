function MeuComponent1(props) {
  const meuNome = 'Bruno Mendes'  

  return (    
    <div className="component-1">
      <MeuComponent2>
        <MeuComponent3 addContador={props.addContador} />
      </MeuComponent2>
    </div>
    
  )
}

function MeuComponent2(props) {  
  return (
    <div className="component-2">
      <div>
        <header>{ props.children }</header>
      </div>
    </div>
  )
}

function MeuComponent3(props) {
  const [fone, setFone] = React.useState('11 3293123')

  setTimeout(() => {
    setFone('22 3293123')
  }, 2500);

  return (
    <div className="component-3">
      <MeuComponent4 addContador={props.addContador} fone={fone} />
    </div>
  )
}

function MeuComponent4(props) {
  const [idade, setIdade] = React.useState(24)

  setTimeout(() => {
    setIdade(25)
  }, 1000);  

  return (    
    <div className="component-4">
      <p>{ props.nome } { idade } {props.fone}</p>
      <button type="button" onClick={props.addContador}>Incrementar</button>
    </div>
  )  
}

function MeuComponent(props) {
  // return React.createElement('div', null,
  //   React.createElement(meuComponent1)
  // )
  
  return (
    <div id="components">
      <MeuComponent1 addContador={props.addContador} />
    </div>
  )
}

function MeuComponentIrmao(props){
  return (
    <div id="componente-irmao">
      <MeuComponentIrmao2 contador={props.contador} />
    </div>
  )
}

function MeuComponentIrmao2(props) {
  return (
    <h2>Contador: { props.contador }</h2>
  )
}

function AppComponent(){
  const [contador, setContador] = React.useState(0)

  const incrementaContador = function (){
    setContador(contador + 1)
  }

  return (
    <React.Fragment>      
      <MeuComponent addContador={incrementaContador} />
      <MeuComponentIrmao contador={contador} />
    </React.Fragment>
    
  )
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById('app')
)