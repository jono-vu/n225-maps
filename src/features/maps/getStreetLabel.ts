function getStreetLabel(instructions: string) {
  const label = getTextInHTML(removeDirections(instructions), "<b>", "</b>", 0);

  return label;
}

export { getStreetLabel };

function getTextInHTML(
  string: string,
  elementOpenTag: string,
  elementCloseTag: string,
  index: number
) {
  let text = string;

  text = text.split(elementOpenTag)[index + 1] || text;
  text = text?.substring(0, text.indexOf(elementCloseTag)) || text;

  return text;
}

function removeDirections(string: string) {
  let result = string;

  for (let i = 0; i < directions.length - 1; i++) {
    result = result.replace(`<b>${directions[i]}</b>`, "");
  }

  return result;
}

const directions = [
  "left",
  "right",
  "north",
  "south",
  "east",
  "west",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
];
