import { API_URL } from '../config';

export async function fetchProducts() {
  const url = `${API_URL}/products`;
  const response = await fetch(url, {
    mode: 'cors',
    headers: { 'Accept': 'application/json' }
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`API error ${response.status}: ${text || response.statusText}`);
  }

  return response.json();
}


