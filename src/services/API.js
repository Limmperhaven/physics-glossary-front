import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://hse-project218-api.herokuapp.com/api`
    })
}
