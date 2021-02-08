import React from 'react'
import Produto from './Produto'

const ExercicioSetState = () => {
  const notebookUrl = 'https://ranekapi.origamid.dev/json/api/produto/notebook'
  const smathphoneUrl = 'https://ranekapi.origamid.dev/json/api/produto/smartphone'
  const tabletUrl = 'https://ranekapi.origamid.dev/json/api/produto/tablet'

  const [data, setData] = React.useState({nome: '', preco: '', fotos: [{src: ''}]})
  const [loading, setLoading] = React.useState(false)

  async function getProductJson(url) {
    const result = await fetch(url)
    const resultJson = await result.json()
    return resultJson
  }

  async function clickHandle(url){
    setLoading(true)
    const productsJson = await getProductJson(url)
    setLoading(false)
    console.log(productsJson)
    setData(productsJson)
  }

  return (
      <>
        <button onClick={() => {clickHandle(smathphoneUrl)}}>smartphone</button>
        <button onClick={() => {clickHandle(tabletUrl)}}>tablet</button>
        <button onClick={() => {clickHandle(notebookUrl)}}>notebook</button>
        <p>{loading ? 'Carregando...' : ''}</p>
        <Produto dados={data} />
    </>
  )
}

export default ExercicioSetState
