import React, { FC } from "react";
import "../../index.css";

const Layout: FC = ({ children }) => {
  return <div className="px-10 flex space-x-5 flex-wrap">{children}</div>;
};

export default Layout;
