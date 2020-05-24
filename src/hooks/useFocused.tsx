import { useState, FocusEventHandler, MouseEventHandler } from "react";

interface Props {
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
}

const useFocused = (props: Props, initialFocused = false) => {
  const [focused, setFocused] = useState(initialFocused);

  const handleFocus: FocusEventHandler<HTMLElement> = (e) => {
    e.target.focus();
    setFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };
  const handleBlur: FocusEventHandler<HTMLElement> = (e) => {
    e.target.blur();
    setFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };
  const handleMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
    setFocused(false);
    if (props.onMouseLeave) {
      props.onMouseLeave(e);
    }
  };
  const handleMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
    setFocused(true);
    if (props.onMouseEnter) {
      props.onMouseEnter(e);
    }
  };
  return {
    focused,
    handleBlur,
    handleFocus,
    handleMouseLeave,
    handleMouseEnter,
  };
};

export default useFocused;
