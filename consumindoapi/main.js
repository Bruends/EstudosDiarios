const apiUrl = "https://cat-fact.herokuapp.com/facts/random"

async function getDataFromApi () {
  const response = await fetch(apiUrl)
  const dataJson = await response.json()
  console.log(dataJson)
  document.getElementById('catFact').innerHTML = dataJson.text  

}



getDataFromApi();

