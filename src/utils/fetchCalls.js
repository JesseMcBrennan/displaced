import { key, url } from '../utils/apiKey.js';

export const apiFetch = async () => {

  const response = await fetch(url, {
   headers: {
      'X-API-Key':key
    }
    });
    const result = await response.json()
    debugger;
    return result;
  }



