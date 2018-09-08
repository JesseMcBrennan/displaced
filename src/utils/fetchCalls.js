import { key, url } from '../utils/variables.js';

export const apiFetch = async () => {

  const response = await fetch(url, {
   headers: {
      'X-API-Key':key
    }
    });
    const result = await response.json()
    return result;
  }



