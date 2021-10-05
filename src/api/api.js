// import fetch from 'cross-fetch';

// export default class ApiService {
//   _domain = 'https://aviasales-test-api.java-mentor.com/';

//   async getResourse(url) {
//     const res = await fetch(`${this._domain}${url}`);

//     if (!res.ok) {
//       throw new Error(`Возникла ошибка ${res.status}`);
//     }
//     // eslint-disable-next-line no-return-await
//     return await res.json();
//   }

//   async getSearchId() {
//     const response = this.getResourse('search');

//     const request = this.getResourse(`tickets?searchId=${response.searchId}`)

//     if (request === undefined) {
//       return { tickets: [], stop: false };
//     }
//     return request
//   }
// }
