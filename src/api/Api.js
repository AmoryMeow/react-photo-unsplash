import API_KEY from './api-key.js';

class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(query) {
    
    return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка получения данных: ${res.status} ${res.statusText}`);
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.unsplash.com/',
  apiKey: API_KEY
});

export default api;