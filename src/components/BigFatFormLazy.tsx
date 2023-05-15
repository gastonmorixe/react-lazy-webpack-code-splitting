import React from "react";

const LazyComponent = () => (
  <React.Suspense fallback="loading BigFatForm...">
    {React.createElement(React.lazy(() => import("./BigFatForm")))}
  </React.Suspense>
);

export default LazyComponent;
