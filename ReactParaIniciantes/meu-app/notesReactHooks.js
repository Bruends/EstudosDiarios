//setState
const stateDefaultValue = 0
const newStateValue = 1
const [stateName, setStateFunction] = React.useState(stateDefaultValue)
setStateFunction(newStateValue)

// =====================================

 //setEffect 
  // controla as ações que Ocorem 
  // durante o ciclo de vida do componente
  // ciclo de vida: criação, atualização e exclusão
  // executa o codigo apenas quando o valor passado no sugundo parametro muda
  // se o segundo valor for um array vazio executa o codigo apenas uma vez
  React.useEffect(() => {
    // codigo executado quando o a dependencia for alterada

    return () => {
      //função executada quando o componente for desmontado
    }
  }, [dependencies])
//dependencies é o nome da variavel ou state que 


// ============================================


// useRef
// Retorna um objeto com a propriedade current.
//  Esse objeto pode ser utilizado para guardarmos
// valores que irão persistir durante todo o
// ciclo de vida do elemento.
//  Geralmente usamos o mesmo para nos referirmos
// a um elemento do DOM, sem precisarmos utilizar
// o querySelector ou similar.
//O seu uso não é restrito a elementos do dom.
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  }, []);

  return <video ref={video}></video>;
};


// ===========================================

// useMemo
//Memoriza um valor, evitando a recriação do mesmo todas 
//as vezes em que um componente for atualizado. 
//Recebe um callback e uma array de dependências.
const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    // só será executado uma vez
    console.log('teste');
    return localStorageItem;
  }, []);



  // ======================================

// useContext
 // O contexto irá permitir passarmos dados/estado a todos os componentes, 
 // sem a necessidade de utilizar propriedades. 
 // Serve principalmente para dodos/estados globais
 // como por exemplo dados do usuário logado.
 
 //criando context 
 const UserContext = React.createContext();

 // usando provider
const App = () => {    

  return (
    <>
      <UserContext.Provider value={{nome: 'Bruno'}}>
        <div>
          <Produto />
        </div>
      </UserContext.Provider>
    </>
  )
}

//utilizando o valor do context global
const Produto = () => {
  const dados = React.useContext(UserContext)
  console.log(dados)
  return (
    <div>{dados.nome}</div>
  )
}


//=============================



