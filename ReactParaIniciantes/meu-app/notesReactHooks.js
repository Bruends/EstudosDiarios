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
