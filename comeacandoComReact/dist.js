const NomeContext = React.createContext('nome');

function MeuComponent1() {
  const meuNome = 'Bruno Mendes'; // return (
  //   React.createElement(NomeContext.Provider, { value: meuNome },
  //     React.createElement('div', { className: 'component-1' },
  //       React.createElement(meuComponent2, { nome: meuNome }))
  //   )
  // )

  return /*#__PURE__*/React.createElement(NomeContext.Provider, {
    value: meuNome
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MeuComponent2, null)));
}

function MeuComponent2() {
  // return (
  //   React.createElement('div', { className: 'component-2' },
  //     React.createElement(meuComponent3))
  // )
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MeuComponent3, null));
}

function MeuComponent3() {
  // return (
  //   React.createElement('div', { className: 'component-3' },
  //     React.createElement(meuComponent4))
  // )
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MeuComponent4, null));
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
  return /*#__PURE__*/React.createElement(NomeContext.Consumer, null, nomeContext => /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, nomeContext)));
}

function MeuComponent() {
  // return React.createElement('div', null,
  //   React.createElement(meuComponent1)
  // )
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MeuComponent1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponent, null), document.getElementById('app'));
