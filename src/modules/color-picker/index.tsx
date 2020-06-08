import React, { FC, useState } from "react";
import DocGroup from "../../components/doc-group";
import { SketchPicker, ColorChangeHandler, ColorResult } from "react-color";
import Button from "../../components/button";

const ColorPickerModule: FC = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState<ColorResult | undefined>();
  const handleChange: ColorChangeHandler = (color, event) => {
    console.log(color);
    setColor(color);
  };
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <DocGroup name="default">
        <div className="relative">
          <Button
            style={{
              backgroundColor: color?.hex,
            }}
            onClick={handleShow}
          ></Button>
          {show ? (
            <div className="absolute">
              <SketchPicker onChange={handleChange} color={color?.hex} />
            </div>
          ) : null}
        </div>
      </DocGroup>
    </>
  );
};

ColorPickerModule.displayName = "ColorPickerModule";

export default ColorPickerModule;
