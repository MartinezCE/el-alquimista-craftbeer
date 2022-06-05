import React from "react";
import Porfolio from "./Porfolio";

const AboutUsView = ({ titulo }) => {
  return (
    <div>
      <h1 className="ofertas-titulo text-4xl">{titulo}</h1>
      <Porfolio />
    </div>
  );
};
export default AboutUsView;
