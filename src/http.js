import { API_URL } from './config'

export default class Http {
    static get = (url) => {
        return fetch(`${API_URL}/cryptocurrencies`)
            .then(res => res.json().then(res => res))
            .catch(e => console.log(e))
    }
}