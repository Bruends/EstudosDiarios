import React from 'react'

const App = () => {
  const [contar, setContar] = React.useState(0)
  const [outro, setOutro] = React.useState(0)

  //setEffect 
  // executao apenas uma vez  
  React.useEffect(() => {
    console.log('executou')
  }, [])

  //executado apenas quando o state outro mudar
  React.useEffect(()=> {
    console.clear()
    console.log('contador ' + contar)
  }, [contar])

  return (
    <div>
      <button onClick={()=> {setContar(contar+1)}}>{contar}</button>
      <br />
      <br />
      <button onClick={()=> {setOutro(outro+1)}}>{outro}</button>
    </div>
  )
}

export default App
