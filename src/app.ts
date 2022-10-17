import express from "express";

import { env } from "./config";
import { Directions, Landing, NoMatch } from "./routes";

const app = express();

app.get(["/", "/directions"], (req, res) => {
  const { url } = req;

  if (url.startsWith("/directions")) {
    return Directions({ res, url });
  }

  if (url !== "/") {
    return NoMatch({ res });
  }

  return Landing({ res });
});

app.listen(env.PORT, () => console.log(`App listening on port ${env.PORT}.`));
