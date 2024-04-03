import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-2xl font-normal md:text-[22px]",
  s: "text-lg font-normal",
  xl: "text-[38px] font-normal md:text-4xl sm:text-[34px]",
  md: "text-[22px] font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
