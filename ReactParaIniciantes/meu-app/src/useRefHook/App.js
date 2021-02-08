import React from 'react'

const App = () => {
  const [comentarios, setComentarios] = React.useState(['djaisdj', 'kodaksdoa'])
  const [input, setInput] = React.useState('')
  const inputRef = React.useRef()

  React.useEffect(() => {    
    
  })

  const handleClick = function(){
    setComentarios([...comentarios, input])
    setInput('')
    inputRef.current.focus()
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
        <input ref={inputRef} type="text" value={input} onChange={({target})=> {setInput(target.value)}}/>
        <button onClick={() => {handleClick()}}>Comentar</button>
    </div>
  )
}

export default App
