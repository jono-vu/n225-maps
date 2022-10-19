import fetch from "node-fetch";

import { env } from "../../config";
import { renderStep, Step } from "../html";

async function getSteps(qs: URLSearchParams) {
  let steps;
  let duration;
  let error;

  try {
    const directions = await fetch(
      `${env.GOOGLE_MAPS_API_URL}/directions/json?${qs}`,
      {
        method: "get",
        headers: {},
      }
    );

    const json = await directions.json();

    if (!json) {
      error = "Couldn't get convert directions.";
      return { error };
    }

    steps = json.routes[0]?.legs[0]?.steps.map((step: Step, i: number) =>
      renderStep({ step, i })
    );

    duration = json.routes[0]?.legs[0]?.duration;
  } catch (err) {
    error = JSON.stringify(err);

    return { error };
  }

  return { steps, duration, error };
}

export { getSteps };
