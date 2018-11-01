import { CRYPTO_API_URL } from './config'

class Http {
    constructor(url) {
        this.url = url
    }
    get = url => {
        return fetch(`${this.url}/${url}`)
            .then(res => res.json().then(res => res))
            .catch(e => e.errorMessage)
    }
}
const cryptoApi = new Http(CRYPTO_API_URL)
export {
    cryptoApi
} 