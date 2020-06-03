import React, { FC, TableHTMLAttributes } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";

type TableHeadProps = {
  className?: classnamesType;
} & Partial<typeof defaultProps> &
  Partial<TableHTMLAttributes<HTMLElement>>;

const defaultProps = {};

const TableHead: FC<TableHeadProps> = (props) => {
  const { children, className, ...restProps } = props;
  const classes = classnames(className);
  return (
    <thead className={classes} {...restProps}>
      {children}
    </thead>
  );
};

TableHead.defaultProps = defaultProps;
TableHead.displayName = "TableHead";

export default TableHead;
