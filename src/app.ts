import http from "http";

import { env } from "./config";
import { Directions, Landing, NoMatch } from "./routes";

const requestListener = async function (
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const { url } = req;

  if (!url) {
    return;
  }

  if (url.startsWith("/directions")) {
    return Directions({ res, url });
  }

  if (url !== "/") {
    return NoMatch({ res });
  }

  return Landing({ res });
};

const server = http.createServer(requestListener);
server.listen(env.PORT, Number(env.HOST), () => {
  console.log(`Server is running on http://${env.HOST}:${env.PORT}`);
});
