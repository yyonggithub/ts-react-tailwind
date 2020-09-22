import React, { FC } from "react";
import classnames from "classnames";
import "../../index.css";

interface IProps {
  className?: string;
}

const Layout: FC<IProps> = ({ className, children }) => {
  return (
    <div className={classnames("px-10 py-10 flex flex-wrap", className)}>
      {children}
    </div>
  );
};

export default Layout;
