import Axios from 'axios'

const axio = Axios.create({
  baseURL: 'https://api.github.com/users/'
})

export default axio