import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams()
  // const location = useLocation()

  // console.log(location)

  // const search = new URLSearchParams(location.search)
  // console.log(search.get('memoria'))

  return (
    <div>
      {params.id}
    </div>
  )
}

export default Produto
