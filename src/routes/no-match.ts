import http from "http";

import { writeHeaders, renderStaticHtml } from "../features";

interface NoMatchProps {
  res: http.ServerResponse;
}

const NoMatch = async ({ res }: NoMatchProps) => {
  writeHeaders(res);
  return renderStaticHtml(res, staticHtml);
};

export { NoMatch };

export { staticHtml };

const staticHtml = /*html*/ `
<section>
  <a href="/">Go back to home</a>
</section>
`;
