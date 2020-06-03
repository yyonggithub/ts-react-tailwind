import React, { FC } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";

type TableTdProps = {
  className?: classnamesType;
  column?: {
    align?: string;
    padding?: string;
    colspan?: number;
    rowspan?: number;
  };
} & Partial<typeof defaultProps>;

const defaultProps = {
  align: "text-left",
  padding: "px-4 py-2",
};

const TableTd: FC<TableTdProps> = (props) => {
  const { children, className, align, padding, column, ...restProps } = props;
  const alignState = column?.align || align;
  const paddingState = column?.padding || padding;

  const classes = classnames("", className, alignState, paddingState);
  return (
    <td
      className={classes}
      role="cell"
      colSpan={column?.colspan}
      rowSpan={column?.rowspan}
      {...restProps}
    >
      {children}
    </td>
  );
};

TableTd.defaultProps = defaultProps;
TableTd.displayName = "TableTd";

export default TableTd;
