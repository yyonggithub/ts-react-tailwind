import React, { SFC } from "react";
import classnames from "classnames";

type MessageProps = {
  size?: string;
  focused?: string;
  className?: string;
};

const Message: SFC<MessageProps> = ({ children, className, ...restProps }) => {
  return (
    <div className={classnames(className)} {...restProps}>
      {children}
    </div>
  );
};

export default Message;
