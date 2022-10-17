import http from "http";

import { writeHeaders, renderStaticHtml } from "../features";

interface LandingProps {
  res: http.ServerResponse;
}

const Landing = async ({ res }: LandingProps) => {
  writeHeaders(res);
  return renderStaticHtml(res, staticHtml);
};

export { Landing };

const staticHtml = /*html*/ `
<section>
  <form action="/directions">
    <label hidden for="origin_query">Origin:</label>
    <input name="origin_query" id="origin_query" placeholder="Origin" type="text" autofocus>
    <br>

    <label hidden for="destination_query">Destination:</label>
    <input name="destination_query" id="destination_query" placeholder="Destination" type="text" autofocus>
    <br><br>

    <fieldset>
      <legend>Transport Type</legend>

      <input type="radio" name="transport_type" id="driving" value="driving" checked>
      <label for="driving">Car</label>

      <input type="radio" name="transport_type" id="walking" value="walking">
      <label for="walking">Walk</label>
      
      <input type="radio" name="transport_type" id="transit" value="transit">
      <label for="transit">PT</label>
    </fieldset>
    <br>

    <button type="submit" value="Submit">Submit</button>
  </form>
</section>
`;
