import { env } from "../../config";

async function placeIdFromText(query: string) {
  let placeId;

  const qs = new URLSearchParams({
    query,
    key: env.GOOGLE_MAPS_API_KEY,
  });

  try {
    const directions = await fetch(
      `${env.GOOGLE_MAPS_API_URL}/place/textsearch/json?${qs}`,
      {
        method: "get",
        headers: {},
      }
    );

    const json = await directions.json();

    if (!json) {
      return;
    }

    const result = json.results[0].place_id;
    placeId = result;
  } catch (error) {
    console.log(error);
  }

  return placeId;
}

export { placeIdFromText };
