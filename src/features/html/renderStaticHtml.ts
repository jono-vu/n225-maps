import { Response } from "express";

function renderStaticHtml(res: Response, children: string) {
  res.send(/* html */ `
    <html>
      <body>${children}</body>
    </html>
  `);
}

export { renderStaticHtml };
