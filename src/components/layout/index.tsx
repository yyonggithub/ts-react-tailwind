import React, { FC } from "react";
import "../../index.css";

const Layout: FC = ({ children }) => {
  return <div className="px-20 py-10">{children}</div>;
};

export default Layout;
