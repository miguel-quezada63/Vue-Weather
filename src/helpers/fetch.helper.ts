export default async function fetchHelper(url: string) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
    return err;
  }
}
