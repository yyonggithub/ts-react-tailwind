import React, { FC, TableHTMLAttributes } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";

type TableTrProps = {
  className?: classnamesType;
  index?: number;
  role?: string;
  // ariaChecked?: boolean;
  background?: string;
  // onClick?:MouseEventHandler<HTMLTableRowElement>
} & Partial<typeof defaultProps> &
  Partial<TableHTMLAttributes<HTMLElement>>;

const defaultProps = {};

const TableTr: FC<TableTrProps> = (props) => {
  const { children, className, index, background, ...restProps } = props;
  const classes = classnames(className, background);
  return (
    <tr className={classes} role="row" aria-rowindex={index} {...restProps}>
      {children}
    </tr>
  );
};

TableTr.defaultProps = defaultProps;
TableTr.displayName = "TableTr";

export default TableTr;
