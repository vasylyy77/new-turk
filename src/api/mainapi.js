import axios from 'axios'

const newLocal = 'https://jsonplaceholder.typicode.com/'
const axiosinst = axios.create({
baseURL: newLocal
})

export default axiosinst;