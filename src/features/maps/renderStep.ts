import { getManeuverSymbol } from "../maps";

interface Step {
  html_instructions: string;
  distance: { text: string };
  duration: { text: string };
  maneuver?: string;
}

function renderStep(step: Step) {
  const maneuver = step.maneuver;
  return /* html */ `
  
  <h3>${step.distance.text} ${getManeuverSymbol(maneuver || "")}</h3>
  ${step.html_instructions}
  <br>  
  `;
}

export { renderStep };
export type { Step };
