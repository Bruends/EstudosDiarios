const apiUrl = "https://cat-fact.herokuapp.com/facts/random"

function getDataFromApi () {
  fetch(apiUrl)
    .then(function (response) {
      console.log(response)
      const responseJson = response.json()
      console.log(responseJson)
      return responseJson

    }).then(function (data) {
      console.log(data)
      document.getElementById('catFact').innerHTML = data.text

    }).catch(function (error) {
      alert('Erro ao requisitar api');
      console.error(error)
    })
}

getDataFromApi();

