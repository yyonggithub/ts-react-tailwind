import React from "react";
import classnames from "classnames";

export type LoaderBarProps = {
  start?: boolean;
  end?: boolean;
  children?: React.ReactNode;
} & Partial<typeof defaultProps>;

const defaultProps = {
  background: "bg-gray-1",
  color: "bg-primary",
  size: "h-2px",
  radius: "rounded-full",
  startDuration: "5s",
  endDuration: ".5s",
  fadeDuration: ".2s",
  delay: "1.25s",
};

class LoaderBar extends React.PureComponent<LoaderBarProps, {}> {
  static defaultProps = defaultProps;

  get progress() {
    if (this.props.start && !this.props.end) return "85%";
    if (this.props.end) return "100%";
    return 0;
  }

  get durationStart() {
    return this.props.end ? this.props.endDuration : this.props.startDuration;
  }
  get classString() {
    const list = [
      "Loader--bar relative",
      this.props.background,
      this.props.radius,
      this.props.size,
      { "opacity-0": this.props.end },
    ];
    return classnames(list);
  }
  get otherClassString() {
    const list = [
      "Loader__bar absolute inset-0",
      this.props.color,
      this.props.radius,
      this.props.end,
    ];
    return classnames(list);
  }

  render() {
    return (
      <React.Fragment>
        <div
          aria-live="polite"
          aria-label="Do not refresh the page"
          style={{
            transition: `opacity ${this.forceUpdate}`,
            transitionDelay: this.props.delay,
          }}
          className={this.classString}
        >
          <div
            className={this.otherClassString}
            style={{
              width: this.progress,
              transition: `width ${this.durationStart} cubic-bezier(0.16, 1, 0.3, 1)`,
              // transition:width 5s cubic-bezier(0.16, 1, 0.3, 1);
            }}
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoaderBar;
