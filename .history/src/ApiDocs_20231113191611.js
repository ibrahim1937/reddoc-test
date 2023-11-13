import React from "react";
import Redoc from "redoc";

function ApiDocs() {
  return <Redoc specUrl="/api.yaml" />;
}

export default ApiDocs;
