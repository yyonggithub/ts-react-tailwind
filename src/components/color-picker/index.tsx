import React, { FC, useState, useRef } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import { ColorResult, ColorChangeHandler, SketchPicker } from "react-color";
import Button from "../button";
import Overlay from "../overlay";

type ColorPickerProps = {
  className?: classnamesType;
  onChange?: ColorChangeHandler;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const ColorPicker: FC<ColorPickerProps> = (props) => {
  const { children, className, onChange, ...restProps } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [color, setColor] = useState<ColorResult | undefined>();
  const handleChange: ColorChangeHandler = (color, event) => {
    setColor(color);
    if (onChange) {
      onChange(color, event);
    }
  };
  const triggerRef = useRef<HTMLButtonElement>(null);
  const getTrigger = () => {
    return triggerRef.current;
  };
  const classes = classnames("Color_Pick", className);
  return (
    <>
      <Button
        className={classes}
        style={{
          backgroundColor: color?.hex,
        }}
        onClick={handleShow}
        ref={triggerRef}
      ></Button>
      {show ? (
        <Overlay
          placement={"bottom-start"}
          getTrigger={getTrigger}
          hasMask={true}
          handleShow={() => {
            setShow(false);
          }}
        >
          <SketchPicker
            onChange={handleChange}
            color={color?.hex}
            {...restProps}
          />
        </Overlay>
      ) : null}
    </>
  );
};

ColorPicker.defaultProps = defaultProps;
ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
