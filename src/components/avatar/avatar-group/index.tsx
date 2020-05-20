import React, { Component } from "react";
import classnames from "classnames";
import Avatar, { AvatarProps } from "..";
import { classnamesType } from "../../../interface";
import Button from "../../button";

export type AvatarGroupProps = {
  className?: classnamesType;
  buttonColor?: string;
  options: AvatarProps[];
  radius?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  showMax: 3,
  align: "justify-center items-center flex-row-reverse",
  display: "inline-flex",
  size: "h-6 w-6",
  moreFont: "text-xs",
  border: "border-2 border-white",
  buttonFocusColor: ["bg-gray-2", "bg-gray-3"],
};

class AvatarGroup extends Component<AvatarGroupProps, {}> {
  static defaultProps = defaultProps;

  get buttonColor() {
    const { buttonColor, border } = this.props;

    if (typeof buttonColor === "string") return buttonColor;

    return `text-body hover:bg-gray-2 active:bg-gray-4 ${border}`;
  }

  get stackLimit() {
    const { options, showMax } = this.props;
    return options.length > (showMax as number);
  }

  get options() {
    const { showMax, options } = this.props;
    if (this.stackLimit) {
      return options.slice(0, showMax);
    } else {
      return options;
    }
  }

  get remaining() {
    const { options, showMax } = this.props;
    return options.length - (showMax as number);
  }

  renderOptions() {
    const { size, radius, border } = this.props;
    const { options } = this;
    const avatars =
      options.length > 0
        ? options.map((item, index) => {
            return (
              <Avatar
                key={index}
                size={size}
                radius={radius}
                border={border}
                margin="-mr-2"
                {...item}
              />
            );
          })
        : null;

    return avatars;
  }

  render() {
    const {
      className,
      align,
      display,
      buttonFocusColor,
      moreFont,
      size,
    } = this.props;
    const { buttonColor, stackLimit, remaining } = this;
    return (
      <div
        className={classnames("Avatar--group", align, display, className)}
        role="group"
      >
        {stackLimit ? (
          <Button
            text={`+${remaining}`}
            color={buttonColor}
            focusColor={buttonFocusColor}
            font={moreFont}
            padding={false}
            radius="rounded-full"
            size={size}
            zIndex="z-0"
          />
        ) : null}
        {this.renderOptions()}
      </div>
    );
  }
}

export default AvatarGroup;
