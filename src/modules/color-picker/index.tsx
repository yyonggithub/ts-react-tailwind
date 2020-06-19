import React, { FC, useState } from "react";
import DocGroup from "../../components/doc-group";
import { ColorChangeHandler, ColorResult } from "react-color";
import ColorPicker from "../../components/color-picker";

const ColorPickerModule: FC = () => {
  // eslint-disable-next-line
  const [color, setColor] = useState<ColorResult | undefined>();
  const handleChange: ColorChangeHandler = (color, event) => {
    console.log(color);
    setColor(color);
  };

  return (
    <>
      <DocGroup name="default">
        <ColorPicker onChange={handleChange} />
      </DocGroup>
    </>
  );
};

ColorPickerModule.displayName = "ColorPickerModule";

export default ColorPickerModule;
