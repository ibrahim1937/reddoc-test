import React from "react";
import { RedocStandalone } from "redoc";

function ApiDocs() {
  return <RedocStandalone specUrl="/api.yaml" />;
}

export default ApiDocs;
