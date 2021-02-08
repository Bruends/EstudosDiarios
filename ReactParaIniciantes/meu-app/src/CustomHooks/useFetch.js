import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  const request = React.useCallback(async (url, options) => {
    let response, json

    try{
      setError(null)
      setLoading(true)
      const response = await fetch(url, options)
      const json = await response.json()
      setData(json)      
      
    } catch(erro) {
      setError(erro)      
    
    } finally {      
      setLoading(false)
      return response
    }
  }, [])

  return {data, error, loading, request}
}

export default useFetch