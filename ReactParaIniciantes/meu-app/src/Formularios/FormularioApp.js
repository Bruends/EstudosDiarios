import React from 'react'

function FormularioApp() {
  const [nome, setNome] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(nome)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        
        <input 
          id="nome"
          type="text" 
          value={nome} 
          onChange={(event)=> setNome(event.target.value)
        } 
        />

      <button>Enviar</button>
      </form>
    </div>
  )
}

export default FormularioApp
