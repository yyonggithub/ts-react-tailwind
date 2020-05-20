import React, { PureComponent } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";

type DividerProps = {
  className?: classnamesType;
  size?: string;
  orientation?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  color: "bg-gray-2",
};

class Divider extends PureComponent<DividerProps, {}> {
  static defaultProps = defaultProps;

  get orientationCase() {
    switch (this.props.orientation) {
      case "vertical":
        return "w-px";
      default:
        return "h-px";
    }
  }

  render() {
    const { className, size, color, orientation, ...rest } = this.props;
    const { orientationCase } = this;
    return (
      <div
        className={classnames(
          "Divider flex-shrink-0",
          size,
          color,
          orientationCase,
          className
        )}
        {...rest}
      ></div>
    );
  }
}

export default Divider;
