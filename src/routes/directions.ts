import http from "http";

import { env } from "../config";
import {
  placeIdFromText,
  getSteps,
  writeHeaders,
  renderStaticHtml,
} from "../features";

interface Params {
  ["origin_query"]?: string;
  ["destination_query"]?: string;
  ["transport_type"]?: string;
}

interface DirectionsProps {
  res: http.ServerResponse;
  url: string;
}

const Directions = async ({ res, url }: DirectionsProps) => {
  const urlParams = url.replace("/directions?", "");

  const params = Object.fromEntries(
    new URLSearchParams(urlParams).entries()
  ) as Params;

  const originPlaceId = await placeIdFromText(params.origin_query || "");
  const destinationPlaceId = await placeIdFromText(
    params.destination_query || ""
  );

  if (!originPlaceId || !destinationPlaceId) {
    return;
  }

  const qs = new URLSearchParams({
    key: env.GOOGLE_MAPS_API_KEY,
    origin: `place_id:${originPlaceId}`,
    destination: `place_id:${destinationPlaceId}`,
    mode: params.transport_type || "driving",
  });

  const stepsData = await getSteps(qs);

  if (!stepsData) {
    return;
  }

  const { steps, duration } = stepsData;

  writeHeaders(res);

  return renderStaticHtml(
    res,
    /* html */ `
  
  <u>${params.origin_query} → ${params.destination_query}</u>
  <p>${duration.text}</p>
  ${steps.join("<hr>")}

  `
  );
};

export { Directions };
