import React from "react";
import Redoc from "redoc";

function ApiDocs() {
  return (
    <Redoc
      specUrl="/api.yaml"
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: "#dd4b39" } } },
      }}
    />
  );
}

export default ApiDocs;
