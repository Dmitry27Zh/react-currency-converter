import response from './response.json'

const fetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 1000)
  })
}

const api = {
  fetch,
}

export default api
