const result = {
  "isOnOver": false,
  "qty": 20,
  "rate": 10,
  "tempRate": 0  
}


export default function fetch(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if(url === 'http://goodurl') {
        resolve({
          status: 200,
          json: () => {
            return { result }
          }
        })
      }
      else {
        resolve({
          status: 404,
          statusText: 'Not found'
        })
      }
    })
  })
}