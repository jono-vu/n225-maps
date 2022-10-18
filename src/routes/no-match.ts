import { Response } from "express";

import { renderStaticHtml } from "../features";

interface NoMatchProps {
  res: Response;
}

const NoMatch = async ({ res }: NoMatchProps) => {
  return renderStaticHtml(res, staticHtml);
};

export { NoMatch };

export { staticHtml };

const staticHtml = /* html */ `
<section>
  <a href="/">Go back to home</a>
</section>
`;
