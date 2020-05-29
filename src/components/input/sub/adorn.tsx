import React, { SFC, MouseEvent } from "react";
import classnames from "classnames";
import Button from "../../button";
import { classnamesType } from "../../../interface";
import { presetType } from "../../button/button";

export type AdornProps = {
  adornText?: string;
  adornClass?: classnamesType;
  adornIcon?: string;
  adornColor?: string;
  adornFocusColor?: string[] | string;
  adornFont?: string;
  adornIconSize?: string;
  adornRoute?: string;
  adornClick?: (event: MouseEvent<HTMLElement>) => void;
  adornPadding?: string;
  adornPreset?: presetType;
  adornRadius?: string;
  adornSize?: string;
};

export function getAdornProps(props: any) {
  const keys = Object.keys(props);
  const adornKeys = keys.filter((item) => /^adorn/i.test(item));
  const adornProps: { [prop: string]: any } = {};
  adornKeys.map((item) => (adornProps[item] = props[item]));
  return adornProps;
}

const Adorn: SFC<AdornProps> = (props) => {
  const rest = {
    color: props.adornColor,
    // focusColor: props.adornFocusColor,
    font: props.adornFont,
    icon: props.adornIcon,
    iconSize: props.adornIconSize,
    route: props.adornRoute,
    onClick: props.adornClick,
    padding: props.adornPadding,
    preset: props.adornPreset,
    radius: props.adornRadius,
    size: props.adornSize,
    text: props.adornText,
  };
  const classes = classnames(props.adornClass);
  const focusColor = props.adornFocusColor;
  return <Button className={classes} focusColor={focusColor} {...rest} />;
};

export default Adorn;
