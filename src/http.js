import { CRYPTO_API_URL } from './config'

class Http {
    constructor(url) {
        this.url = url
    }
    get = url => fetch(`${this.url}/${url}`)
        .then(response => {
            return response.json().then(json => {
                return response.ok ? json : Promise.reject(json);
            });
        })


}
const cryptoApi = new Http(CRYPTO_API_URL)
export {
    cryptoApi
} 