//setState
const stateDefaultValue = 0
const newStateValue = 1
const [stateName, setStateFunction] = React.useState(stateDefaultValue)
setStateFunction(newStateValue)

 //setEffect 
  // controla as ações que Ocorem 
  // durante o ciclo de vida do componente
  // ciclo de vida: criação, atualização e exclusão
  // executa o codigo apenas quando o valor passado no sugundo parametro muda
  // se o segundo valor for um array vazio executa o codigo apenas uma vez
  React.useEffect(() => {
    console.log('aaaa')

    return () => {
      //função executada quando o componente for desmontado
    }
  }, [dependencies])
//dependencies é o nome da variavel ou state que 


// useRef
// Retorna um objeto com a propriedade current.
//  Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento.
//   Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  }, []);

  return <video ref={video}></video>;
};