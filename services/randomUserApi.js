import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.RANDOM_USER_API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
