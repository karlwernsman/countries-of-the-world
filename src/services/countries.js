import { checkError, client } from './client.js';

export async function getCountries() {
  const res = await client.from('countries').select('*');
  return checkError(res);
}
