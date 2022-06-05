import React from "react";
import Form from "./Form";

const Contact = ({ titulo }) => {
  return (
    <div>
      <h1 className="ofertas-titulo text-4xl">{titulo}</h1>
      <Form />
    </div>
  );
};

export default Contact;
