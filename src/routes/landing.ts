import { Response } from "express";

import { renderStaticHtml } from "../features";

interface LandingProps {
  res: Response;
}

const Landing = async ({ res }: LandingProps) => {
  return renderStaticHtml(res, staticHtml);
};

export { Landing };

const staticHtml = /* html */ `
<section>
  <form action="/directions">
    <input name="origin_query" id="origin_query" placeholder="Origin" type="text" autofocus>
    <label hidden for="origin_query">Origin</label>
    <br>

    
    <input name="destination_query" id="destination_query" placeholder="Destination" type="text">
    <label hidden for="destination_query">Destination</label>
    <br>

    <button type="submit" value="Submit">Submit</button>
    <br>

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

    <input name="avoid_tolls" id="avoid_tolls" type="checkbox" checked>
    <label for="avoid_tolls">Avoid Tolls</label>
    <br>
  </form>
</section>
`;
