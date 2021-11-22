class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  
  getInitialCards() {
    return customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    });
  }
  
  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    });
  }
}

const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "a422b90c-eef7-4772-9177-7c895e07d221",
    "Content-Type": "application/json"
  }
});

export default api;
