import React, { FC } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";

type TableFootProps = {
  className?: classnamesType;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const TableFoot: FC<TableFootProps> = (props) => {
  const { children, className, ...restProps } = props;
  const classes = classnames(className);
  return (
    <tfoot className={classes} {...restProps}>
      {children}
    </tfoot>
  );
};

TableFoot.defaultProps = defaultProps;
TableFoot.displayName = "TableFoot";

export default TableFoot;
