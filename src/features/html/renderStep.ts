import { getManeuverSymbol, getStreetLabel } from "../maps";

interface Step {
  html_instructions: string;
  distance: { text: string };
  duration: { text: string };
  maneuver?: string;
}

interface RenderStepProps {
  step: Step;
  i: number;
}

function renderStep({ step }: RenderStepProps) {
  const maneuver = step.maneuver;
  const streetLabel = getStreetLabel(step.html_instructions);
  return /* html */ `
  
  ----------------
  <br>
  <h3>
    <a href="">${step.distance.text} ${getManeuverSymbol(maneuver || "")}</a>
  </h3>
  <p>${step.html_instructions}</p>

  `;
}

export { renderStep };
export type { Step };
