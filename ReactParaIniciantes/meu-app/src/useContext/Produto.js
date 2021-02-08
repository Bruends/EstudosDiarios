import React from 'react'
import {UserContext} from './UseContext'

const Produto = () => {
  const {contar, setContar} = React.useContext(UserContext)
  
  return (
    <>
      <div>{contar}</div>
      <button onClick={() => {setContar(contar+ 1)}}></button>
    </>
  )
}

export default Produto