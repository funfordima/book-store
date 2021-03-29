import { MAIN_URL } from '../Redux/consts';

class HttpService {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async fetchUser(username: string) {
    const response = await fetch(`${this.url}signin`, {
      method: 'POST',
      body: JSON.stringify({
        username
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const json = await response.json();
  
    return json;
  };

  async getBooks(token: string) {
    const response = await fetch(`${MAIN_URL}books`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      localStorage.clear();
      throw new Error('Unauthorized');
    }

    const json = await response.json();

    return json;
  } 

  async getBookById(token: string, id: string) {
    const response = await fetch(`${MAIN_URL}books/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      localStorage.clear();
      throw new Error('Unauthorized');
    }

    const json = await response.json();

    return json;
  }

  async setPurchase(token: string, books: string[]) {
    const response = await fetch(`${MAIN_URL}purchase`, {
      method: 'POST',
      body: JSON.stringify({books}),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }

    const json = await response.json();

    return json;
  }
}

export default new HttpService(MAIN_URL);
