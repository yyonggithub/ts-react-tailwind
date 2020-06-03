import React, { FC, TableHTMLAttributes } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";

type TableThProps = {
  className?: classnamesType;
  column?: {
    align?: string;
    padding?: string;
    colspan?: number;
    rowspan?: number;
    className?: classnamesType;
  };
} & Partial<typeof defaultProps> &
  Partial<TableHTMLAttributes<HTMLElement>>;

const defaultProps = {
  align: "text-left",
  padding: "px-4 py-2",
};

const TableTh: FC<TableThProps> = (props) => {
  const { children, className, align, padding, column, ...restProps } = props;
  const alignState = column?.align || align;
  const paddingState = column?.padding || padding;

  const classes = classnames(
    "",
    className,
    column?.className,
    alignState,
    paddingState
  );
  return (
    <th
      className={classes}
      colSpan={column?.colspan}
      rowSpan={column?.rowspan}
      role="cell"
      {...restProps}
    >
      {children}
    </th>
  );
};

TableTh.defaultProps = defaultProps;
TableTh.displayName = "TableTh";

export default TableTh;
