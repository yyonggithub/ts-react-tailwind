import React, { FC } from "react";
import { TextFieldProps } from "../text-field";
import useFocused from "../../../hooks/useFocused";
import handleProps from "../handleProps";
import PickTextArea from "../pick-textarea";
import "./style.scss";

const defaultProps = {
  iconMargin: "mt-2",
  padding: "p-2",
  size: "min-h-16",
  align: "text-left",
  font: "text-sm",
  labelDisplay: "inline-block",
  labelMargin: "mb-2",
  lineHeight: "leading-5",
  outline: "focus:outline-none",
  placeholderColor: "placeholder-gray-4",
  radius: "rounded",
  transition: "transition ease-in-out duration-200",
};

const TextArea: FC<TextFieldProps> = (props) => {
  const {
    focused,
    handleBlur,
    handleFocus,
    // handleMouseEnter,
    // handleMouseLeave,
  } = useFocused(props as any, false);

  const pickProps = handleProps(props, focused);
  return (
    <PickTextArea
      {...pickProps}
      focused={focused}
      handleBlur={handleBlur}
      handleFocus={handleFocus}
    />
  );
};

TextArea.defaultProps = defaultProps;
TextArea.displayName = "TextArea";

export default TextArea;
