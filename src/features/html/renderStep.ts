import { getManeuverSymbol, getStreetLabel } from "../maps";

interface Step {
  html_instructions: string;
  distance?: { text: string };
  duration?: { text: string };
  maneuver?: string;
}

interface RenderStepProps {
  step: Step;
  i: number;
}

function renderStep({ step }: RenderStepProps) {
  const maneuver = step.maneuver;

  return /* html */ `
    <a href="https://n225-maps.herokuapp.com">
      <h3>
        ${getManeuverSymbol(maneuver || "")}
        ${step.distance?.text}
        ${getStreetLabel(step.html_instructions)}
      </h3>
    </a>
  <p>${step.duration?.text} ${step.html_instructions}</p>
  `;
}

export { renderStep };
export type { Step };
