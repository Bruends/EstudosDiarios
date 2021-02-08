import React from 'react'
import useFetch from './CustomHooks/useFetch'
import {useLocalStorage} from './CustomHooks/useLocalStorage'

const App = () => {    
  const [state, setState] = useLocalStorage('Yay', 1)
  const {request, data, loading, error} = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const response = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response)
    }
    fetchData()
  }, [])

  if(loading) return <div>Carregando...</div>
  if(error) return <div>error</div>
  if(data){
    
  console.log(state)
    return (
      <>
        <div>
          {state}
          <button onClick={()=>{setState(state+1)}}></button>
          {data.map((produto, i)=> <div key={i}>{produto.id}</div>)}
        </div>
      </>
    )
  }else{
    return null
  }
}


export default App