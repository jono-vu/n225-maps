import { getManeuverSymbol } from "../maps";

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

function renderStep({ step, i }: RenderStepProps) {
  const maneuver = step.maneuver;
  return /* html */ `
  
  <h3 tabindex="${i}">${step.distance.text} ${getManeuverSymbol(
    maneuver || ""
  )}</h3>
  ${step.html_instructions}
  <br>  
  `;
}

export { renderStep };
export type { Step };
