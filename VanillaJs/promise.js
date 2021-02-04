const promise = new Promise((resolve, reject)=>{
  const isSuccess = false
  
  if(isSuccess) {
    setTimeout(() => {
      resolve(':)')
    }, 1500);
  
  } else {

    setTimeout(() => {
      reject(':(')
    }, 1500);
  }
})

promise
  .then(message => {
    console.log(message)
  })

  .catch(error => {
    console.log(error)
  })

  .finally(() => {
    console.log('fim da promise')
  })