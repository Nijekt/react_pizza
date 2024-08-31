import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={461}
    viewBox="0 0 280 461"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="242" rx="10" ry="10" width="280" height="19" />
    <circle cx="139" cy="117" r="117" />
    <rect x="0" y="288" rx="10" ry="10" width="280" height="77" />
    <rect x="0" y="388" rx="10" ry="10" width="107" height="41" />
    <rect x="125" y="384" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Sceleton;
