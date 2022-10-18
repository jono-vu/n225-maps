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
  <a href=""><h3>${step.distance.text} ${getManeuverSymbol(
    maneuver || ""
  )}</h3></a>
  <p>${step.html_instructions}</p>

  `;
}

export { renderStep };
export type { Step };
