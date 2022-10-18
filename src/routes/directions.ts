import { Response } from "express";

import { env } from "../config";
import { getSteps, placeIdFromText, renderStaticHtml } from "../features";

interface Params {
  ["origin_query"]?: string;
  ["destination_query"]?: string;
  ["transport_type"]?: string;
  ["avoid_tolls"]?: boolean;
}

interface DirectionsProps {
  res: Response;
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
    avoid: params.avoid_tolls ? "tolls" : "",
  });

  const stepsData = await getSteps(qs);

  if (!stepsData) {
    return;
  }

  const { steps, duration } = stepsData;

  return renderStaticHtml(
    res,
    /* html */ `
  
    <a>${params.origin_query}</a> → <a>${params.destination_query}</a>
    <p>${duration?.text}</p>

    ${steps?.join("")}

  `
  );
};

export { Directions };
