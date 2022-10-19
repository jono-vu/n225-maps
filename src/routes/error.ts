import { Response } from "express";

import { renderStaticHtml } from "../features";

interface ErrorProps {
  res: Response;
  message: string;
}

const Error = async ({ res, message }: ErrorProps) => {
  return renderStaticHtml(
    res,
    /* html */ `
    <section>
      <h3>Error</h3>
      <p>${message}</p>
    </section>
  `
  );
};

export { Error };
