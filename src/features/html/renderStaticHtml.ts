import http from "http";

function renderStaticHtml(res: http.ServerResponse, children: string) {
  res.write(`<html><body>`);
  res.write(children);
  res.write(`</body></html>`);

  res.end();
}

export { renderStaticHtml };
