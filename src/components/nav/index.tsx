import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";

type NavProps = { className?: classnamesType; ariaLabel?: string } & Partial<
  typeof defaultProps
>;

const defaultProps = {
  align: "justify-start items-center",
  color: "bg-black",
  display: "flex",
  padding: "px-4",
  space: "space-x-4",
  size: "h-16",
};

export type BtnProps = {
  font: string;
  disabledColor: string;
  focusColor: string;
  size: string;
};

interface INav extends FC<NavProps> {}

const Nav: INav = (props) => {
  const {
    children,
    align,
    color,
    display,
    padding,
    size,
    space,
    ariaLabel,
    ...restProps
  } = props;

  const btnProps: BtnProps = {
    font: "text-md font-medium",
    disabledColor: "text-white-opacity-4",
    focusColor: "bg-white-opacity-1",
    size: "h-10",
  };

  return (
    <div
      className={classnames(
        "Navigation relative",
        align,
        color,
        display,
        padding,
        size,
        space
      )}
      role="navigation"
      aria-label={ariaLabel}
    >
      {typeof children === "function"
        ? children(btnProps)
        : React.Children.map(children, (child) =>
            React.cloneElement(child as any, btnProps)
          )}
    </div>
  );
};

Nav.defaultProps = defaultProps;
Nav.displayName = "Nav";

export default Nav;
