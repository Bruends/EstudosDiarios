import React from 'react'
import Produto from './useContext/Produto'
import { GlobalContext } from './useContext/UseContext'

const App = () => {    

  return (
    <>
      <GlobalContext>
        <Produto />
      </GlobalContext>
    </>
  )
}


export default App