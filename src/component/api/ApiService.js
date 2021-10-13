export default class ApiService {
  _domain = "https://aviasales-test-api.java-mentor.com/";

  async getResourse(url) {
    const result = await fetch(`${this._domain}${url}`);

    if (result.status === 500) {
      return { tickets: [], stop: false };
    }

    if (!result.ok) {
      throw new Error(`Возникла ошибка ${result.status}`);
    }
    // eslint-disable-next-line no-return-await
    return await result.json();
  }

  async getSessionId() {
    const result = await this.getResourse("search");
    const { searchId } = result;
    return searchId;
  }

  async getTicketData(id) {
    const result = await this.getResourse(`tickets?searchId=${id}`);
    return result;
  }
}
