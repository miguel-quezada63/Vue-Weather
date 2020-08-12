import fetch from 'node-fetch';
export default async function fetchHelper(url: string) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    throw new Error(err);
  }
}
