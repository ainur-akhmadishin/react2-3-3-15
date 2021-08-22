export default class Api {
  BASEURL = 'https://front-test.beta.aviasales.ru/';

  finalUrl = (endUrl, param = '') => `${this.BASEURL}${endUrl}?${param}`;

  async request(url, method = 'get', value = null) {
    const data = {};
    if (method === 'post') {
      data.method = 'POST';
      data.headers = { 'Content-Type': 'application/json;charset=utf-8' };
      data.body = JSON.stringify(value);
    }
    const res = await fetch(url, data);
    return res;
  }

  async getSearchID() {
    const url = this.finalUrl('search ');
    const res = await this.request(url);
    if (!res.ok) {
      this.getSearchID();
    }
    const data = await res.json();
    const searchID = data.searchId;
    return searchID;
  }

  async getTickets(searchID) {
    const url = this.finalUrl('tickets', `searchId=${searchID}`);
    const res = await this.request(url);
    const data = await res.json();
    return data;
  }
}
