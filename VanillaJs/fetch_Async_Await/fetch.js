// fetch('https://catfact.ninja/breeds?limit=1')
//   .then((response) => response.json() )
//   .then(({ data }) => { console.log(data) } )

const apiUrl = 'https://catfact.ninja/breeds?limit=1'

async function fetchApi(url) {
  const response = await fetch(url)
  console.log(response)
  const dataJson = await response.json()
  console.log(dataJson)
}

const catBreed = fetchApi(apiUrl)

