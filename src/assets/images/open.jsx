import React from "react";

export const OpenSVG = ({
  fillColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      height={props?.width || 20}
      width={props?.height || 20}
      viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
    >
      {/* Path for menu icon */}
      <path d="M3 6h24v2H3zm0 7h24v2H3zm0 7h24v2H3z" />
    </svg>
  );
};
