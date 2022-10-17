/* ← ↑ → ↓ */
/* https://developers.google.com/maps/documentation/routes_preferred/reference/rest/Shared.Types/Maneuver */

function getManeuverSymbol(maneuver: string) {
  switch (maneuver) {
    case "turn-slight-left":
      return "←";
    case "turn-sharp-left":
      return "↓←";
    case "uturn-left":
      return "←U";
    case "turn-left":
      return "←←";
    case "turn-slight-right":
      return "→";
    case "turn-sharp-right":
      return "→↓";
    case "uturn-right":
      return "U→";
    case "turn-right":
      return "→→";
    case "straight":
      return "↑";
    case "ramp-left":
      return "↑|";
    case "ramp-right":
      return "|↑";
    case "merge":
      return "--merge";
    case "fork-left":
      return "↑ Y";
    case "fork-right":
      return "Y ↑";
    case "ferry":
      return "Ferry";
    case "ferry-train":
      return "Ferry Train";
    case "roundabout-left":
      return "←O";
    case "roundabout-right":
      return "O→";
    default:
      return "";
  }
}

export { getManeuverSymbol };
