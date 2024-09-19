import { API_URL } from './urls';

export function getImageUrl(input: string) {
  if (input.includes('http')) {
    return input;
  }

  return `${API_URL}${input}`;
}
