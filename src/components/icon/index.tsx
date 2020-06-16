import * as React from "react";
import { ReactSVG } from "react-svg";
import classnames from "classnames";
import { classnamesType } from "../../interface";

type Props = {
  icon?: string;
  className?: classnamesType;
  style?: any;
  src?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  size: "16px",
  transition: "transition ease-in-out duration-200",
};

class Icon extends React.PureComponent<Props, {}> {
  static defaultProps = defaultProps;

  get classStr() {
    const list = [
      "Icon pointer-events-none flex-shrink-0",
      this.props.transition,
      this.props.className,
    ];
    return classnames(list);
  }

  getSrc() {
    const { src, icon } = this.props;
    if (src) {
      return src;
    }
    return `assets/svg/${icon}.svg`;
  }

  render() {
    const style = {
      width: this.props.size,
      height: this.props.size,
    };
    return (
      <div
        aria-live="polite"
        aria-label="Do not refresh the page"
        className={this.classStr}
        style={this.props.style}
      >
        <ReactSVG
          style={style}
          src={this.getSrc()}
          className={"fill-current"}
        />
      </div>
    );
  }
}

export default Icon;
