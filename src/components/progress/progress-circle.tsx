import React, { SFC, Component } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";

type CircleProps = {
  text?: boolean;
  progress?: number;
} & Partial<typeof defaultProps>;

const defaultProps = {
  color: "text-primary",
  size: 64,
  strokeWidth: 4,
  background: "text-gray-1",
  font: "text-base font-bold",
  position: "relative",
};

type SubCircleProps = {
  center?: number;
  radius?: number;
  circumference?: number;
  strokeWidth?: number;
  dashOffset?: number;
  transform?: string;
  style?: React.CSSProperties;
  className?: classnamesType;
};

const SubCircle: SFC<SubCircleProps> = (props) => {
  const {
    center,
    radius,
    circumference,
    strokeWidth,
    transform,
    style,
    className,
  } = props;
  return (
    <circle
      className={classnames("stroke-current", className)}
      cx={center}
      cy={center}
      fill="none"
      r={radius}
      strokeDasharray={circumference}
      strokeWidth={strokeWidth}
      style={style}
      transform={transform}
    ></circle>
  );
};

class Circle extends Component<CircleProps, { id: string }> {
  static defaultProps = defaultProps;

  state = {
    id: "id_" + Math.random() * Math.random(),
  };
  render() {
    const {
      size,
      strokeWidth,
      color,
      position,
      font,
      text,
      background,
    } = this.props;
    const progress = this.props.progress || 0;
    const viewBox = `0 0 ${size} ${size}`;
    const center = (size as number) / 2;
    const diameter = (size as number) - (strokeWidth as number) - 1;
    const radius = diameter / 2;
    const circumference = Math.PI * diameter;
    const dashOffset = (() => {
      const tmpProgress = Math.max(0, Math.min(progress, 100));
      return ((100 - tmpProgress) / 100) * circumference;
    })();
    const transform = `rotate(-90, ${center}, ${center})`;

    const subCircleOtherProps = {
      center,
      radius,
      circumference,
      strokeWidth,
      dashOffset,
      transform,
    };
    return (
      <div
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        className={classnames("Progress--circle", color, position)}
        role="progressbar"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox={viewBox}
        >
          <defs>
            <pattern
              patternUnits="userSpaceOnUse"
              width={size}
              height={size}
              viewBox="0 0 64 64"
              id={this.state.id}
            >
              <text
                // TODO: text 缺少颜色
                className={font}
                alignmentBaseline="central"
                dominantBaseline="middle"
                textAnchor="middle"
                x="32"
                y="32"
              >
                {progress}%
              </text>
            </pattern>
          </defs>
          {text ? (
            <rect
              width="100%"
              height="100%"
              x="0"
              y="0"
              fill={`url(#${this.state.id})`}
            ></rect>
          ) : null}
          <SubCircle
            {...subCircleOtherProps}
            className={background as string}
          />
          <SubCircle
            {...subCircleOtherProps}
            style={{
              strokeDashoffset: dashOffset,
              transition: "stroke-dashoffset 0.2s linear",
            }}
          />
        </svg>
      </div>
    );
  }
}

export default Circle;
