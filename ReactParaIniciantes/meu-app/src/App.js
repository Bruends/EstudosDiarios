import React from 'react'
import Footer  from './Footer'
import Form from './form/Form'
import Header from './Header'

const App = () => {  
  function handleClick(event) {
    console.log(event.target)
  }

  return (
    <>
      <Form />
    </>
  )
}


export default App