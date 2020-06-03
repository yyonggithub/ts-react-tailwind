import React, { FC } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import TableBody from "./tbody";
import TableTd from "./td";
import TableFoot from "./tfoot";
import TableTh from "./th";
import TableHead from "./thead";
import TableTr from "./tr";

type TableProps = {
  className?: classnamesType;
  ariaLabel?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  align: "text-left",
  border: "border-separate",
  layout: "table-auto",
  font: "text-sm",
};

interface ITableFC extends FC<TableProps> {
  tbody: typeof TableBody;
  td: typeof TableTd;
  tfoot: typeof TableFoot;
  th: typeof TableTh;
  thead: typeof TableHead;
  tr: typeof TableTr;
}

const Table: ITableFC = (props) => {
  const {
    children,
    className,
    align,
    border,
    layout,
    font,
    ariaLabel,
    ...restProps
  } = props;
  const classes = classnames("Tables", align, border, layout, font, className);
  return (
    <table
      role="table"
      aria-label={ariaLabel}
      className={classes}
      style={{
        borderSpacing: 0,
      }}
      {...restProps}
    >
      {children}
    </table>
  );
};

Table.defaultProps = defaultProps;
Table.displayName = "Table";

Table.tbody = TableBody;
Table.td = TableTd;
Table.tfoot = TableFoot;
Table.th = TableTh;
Table.thead = TableHead;
Table.tr = TableTr;

export default Table;
