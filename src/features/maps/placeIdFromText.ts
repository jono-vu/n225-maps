import fetch from "node-fetch";

import { env } from "../../config";
import { renderStep, Step } from "../html";

async function getSteps(qs: URLSearchParams) {
  let steps;
  let duration;

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
      return;
    }

    steps = json.routes[0]?.legs[0]?.steps.map((step: Step, i: number) =>
      renderStep({ step, i })
    );

    duration = json.routes[0]?.legs[0]?.duration;
  } catch (error) {
    console.log(error);
  }

  return { steps, duration };
}

export { getSteps };
