import React from "react";
import classnames from "classnames";
import "./style.css";

export type LoaderCircleProps = {} & Partial<typeof defaultProps>;

const defaultProps = {
  background: "border-bright",
  size: "h-8 w-8",
  color: "border-gray-6",
  border: "3px",
  duration: "1s",
};

class LoaderCircle extends React.PureComponent<LoaderCircleProps, {}> {
  static defaultProps = defaultProps;

  render() {
    return (
      <div
        className={classnames(
          "Loader--circle relative flex-shrink-0",
          this.props.size
        )}
        aria-live="polite"
        aria-label="Do not refresh the page"
      >
        <div
          className={classnames(
            "Loader__background rounded-full absolute inset-0 border-solid",
            this.props.background
          )}
          style={{ borderWidth: this.props.border }}
        ></div>
        <div
          className={classnames(
            "Loader__spin rounded-full absolute inset-0 border-solid",
            this.props.color
          )}
          style={{
            borderWidth: this.props.border,
            animationDuration: this.props.duration,
          }}
        ></div>
      </div>
    );
  }
}

export default LoaderCircle;
