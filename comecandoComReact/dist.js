function MeuComponent1(props) {
  const meuNome = 'Bruno Mendes';
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MeuComponent2, null, /*#__PURE__*/React.createElement(MeuComponent3, {
    addContador: props.addContador
  })));
}

function MeuComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children)));
}

function MeuComponent3(props) {
  const [fone, setFone] = React.useState('11 3293123');
  setTimeout(() => {
    setFone('22 3293123');
  }, 2500);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MeuComponent4, {
    addContador: props.addContador,
    fone: fone
  }));
}

function MeuComponent4(props) {
  const [idade, setIdade] = React.useState(24);
  setTimeout(() => {
    setIdade(25);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, props.nome, " ", idade, " ", props.fone), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.addContador
  }, "Incrementar"));
}

function MeuComponent(props) {
  // return React.createElement('div', null,
  //   React.createElement(meuComponent1)
  // )
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MeuComponent1, {
    addContador: props.addContador
  }));
}

function MeuComponentIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componente-irmao"
  }, /*#__PURE__*/React.createElement(MeuComponentIrmao2, {
    contador: props.contador
  }));
}

function MeuComponentIrmao2(props) {
  React.useEffect(function () {
    localStorage.setItem('contador', props.contador);
  });
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador);
}

function AppComponent() {
  const [contador, setContador] = React.useState(parseInt(localStorage.getItem('contador')) || 0);

  const incrementaContador = function () {
    setContador(contador + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponent, {
    addContador: incrementaContador
  }), /*#__PURE__*/React.createElement(MeuComponentIrmao, {
    contador: contador
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
