export default function fetch(url, options) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if(url === 'http://goodurl') {
        resolve({
          status: 200,
          json: () => {
            return { someKey: 'someValue' }
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