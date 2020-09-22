import React, { PureComponent } from "react";
import classnames from "classnames";
import Icon from "../icon";
import { classnamesType } from "../../interface";

export type AlertProps = {
  className?: classnamesType;
  text?: string;
  textClass?: classnamesType;
  color?: string;
  type?: string;
  icon?: string;
  iconClass?: classnamesType;
  iconSize?: string;
} & Partial<IDefaultProps>;

interface IDefaultProps {
  border: string;
  display: string;
  radius: string;
  padding: string;
}

const defaultProps: IDefaultProps = {
  border: "border border-normal border-l-0",
  display: "flex",
  radius: "rounded",
  padding: "px-4 py-2",
};

class Alert extends PureComponent<AlertProps, {}> {
  static defaultProps = defaultProps;
  render() {
    const {
      className,
      color: originColor,
      type,
      border,
      display,
      padding,
      radius,
      icon,
      iconClass,
      iconSize,
      text,
      textClass,
    } = this.props;
    const color = (() => {
      if (typeof originColor === "string") return originColor;

      switch (type) {
        case "info":
          return "text-primary";
        case "warning":
          return "text-warning";
        case "secondary":
          return "text-gray-8";
        case "success":
          return "text-success";
        case "danger":
          return "text-danger";
        default:
          return null;
      }
    })();
    return (
      <div
        className={classnames(
          "Alert relative",
          border,
          display,
          padding,
          radius,
          className
        )}
        role="alert"
      >
        <div
          className={classnames(
            "absolute -inset-y-px left-0 w-1 rounded-r-none bg-current",
            radius,
            color
          )}
        ></div>
        {icon ? (
          <Icon
            icon={icon}
            className={classnames("Alert__icon mr-2", iconClass, color)}
            size={iconSize}
          />
        ) : null}
        {text ? (
          <span
            className={classnames(
              "Alert__text flex-grow text-sm font-medium leading-4",
              textClass
            )}
          >
            {text}
          </span>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

export default Alert;
