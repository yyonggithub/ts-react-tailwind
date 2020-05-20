import React, { PureComponent } from "react";
import classnames from "classnames";
import AvatarGroup from './avatar-group'

export type AvatarProps = {
  ariaLabel?: string;
  image?: string;
  border?: string;
  margin?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  align: "justify-center items-center",
  display: "inline-flex",
  color: "bg-gray-3 text-white",
  size: "h-6 w-6",
  radius: "rounded-full",
};

class Avatar extends PureComponent<AvatarProps, {}> {

  static Group = AvatarGroup

  static defaultProps = defaultProps;

  state = {
    id: "id_" + Math.random() * Math.random(),
  };
  static group: typeof import("/Users/leo/workspace/other-projects/ts-react-tailwind/src/components/avatar/avatar-group/index").default;

  get character() {
    return this.props.ariaLabel ? this.props.ariaLabel[0] : "";
  }

  renderSvg() {
    const { size } = this.props;
    const { id } = this.state;
    return (
      <svg
        className={classnames(size)}
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <pattern id={id} width="100%" height="100%">
            <text
              className="text-6xl uppercase"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              alignmentBaseline="central"
              textAnchor="middle"
            >
              {this.character}
            </text>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          x="0"
          y="0"
          fill={`url(#${id})`}
        ></rect>
      </svg>
    );
  }
  render() {
    const {
      ariaLabel,
      border,
      margin,
      align,
      display,
      color,
      size,
      radius,
      image,
    } = this.props;
    return (
      <div
        aria-label={ariaLabel}
        className={classnames(
          "Avatar bg-cover bg-center bg-no-repeat align-middle flex-shrink-0 relative",
          border,
          margin,
          align,
          color,
          display,
          radius,
          size
        )}
        role="img"
        style={image ? { backgroundImage: `url("${image}")` } : undefined}
      >
        {this.props.children}
        {image ? null : this.renderSvg()}
      </div>
    );
  }
}

export default Avatar;
