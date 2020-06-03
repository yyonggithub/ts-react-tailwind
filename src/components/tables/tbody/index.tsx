import React, { FC } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";

type TbodyProps = {
  className?: classnamesType;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const Tbody: FC<TbodyProps> = (props) => {
  const { children, className, ...restProps } = props;
  const classes = classnames(className);
  return (
    <tbody className={classes} {...restProps}>
      {children}
    </tbody>
  );
};

Tbody.defaultProps = defaultProps;
Tbody.displayName = "Tbody";

export default Tbody;
