import http from "http";

function writeHeaders(res: http.ServerResponse) {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
}

export { writeHeaders };
