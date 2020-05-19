class ApiService {
  _url = 'https://api.chucknorris.io';

  errObj = (url, status) => {
    return {
      message: `Invalid request: ${url}, status ${status}`,
      status: status
    };
  };

  async fetchData(url, option) {
    const res = await fetch(`${this._url}${url}`, option);
    if (!res.ok) {
      throw this.errObj(`${this._url}${url}`, res.status);
    }
    return res.json();
  }

  async get(url) {
    return this.fetchData(url, {
      mode: 'cors'
    });
  }
}

export default new ApiService();
