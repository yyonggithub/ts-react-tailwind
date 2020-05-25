import React from "react";
import classnames from "classnames";
import Icon from "../icon";
import CheckBoxGroup from "./checkbox-group";

export type BaseProps = {
  className?: string;
  text?: string;
  name?: string;
  ariaLabel?: string;
  value?: string;
  color?: string;
  focusColor?: string;
  disabled?: boolean;
  disabledColor?: string;
  iconClass?: string;
  iconSize?: string;
  required?: boolean;
  checked?: boolean;
  iconText?: string;
} & Partial<typeof defaultProps>;

export interface Props extends BaseProps {
  checkboxIcon?: string | boolean;
  onChange?: (v: string, checked: boolean) => void;
}

export const defaultProps = {
  align: "items-center",
  display: "inline-flex",
  outline: "focus:outline-none",
  truncate: "truncate",
  padding: "-mx-1 px-1",
  size: "min-h-6",
  radius: "rounded",
  transition: "transition ease-in-out duration-200",
};

type State = {
  value: string;
  checked: boolean;
  focused: boolean;
};

class CheckBox extends React.Component<Props, State> {
  static Group = CheckBoxGroup;

  static defaultProps = defaultProps;

  input: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      focused: false,
      checked: props.checked || false,
      value: props.value || "",
    };
    this.input = React.createRef();
    this.onClick = this.onClick.bind(this);
  }

  get ariaLabel() {
    return this.props.ariaLabel || this.props.text || undefined;
  }

  get cursor() {
    return this.props.disabled ? "cursor-default" : "cursor-pointer";
  }

  get checkboxIcon() {
    const { checkboxIcon } = this.props;
    const { checked } = this.state;
    // if (checkboxIcon === false) return false;

    if (
      checkboxIcon &&
      Array.isArray(checkboxIcon) &&
      checkboxIcon.length === 2
    ) {
      return checked ? checkboxIcon[0] : checkboxIcon[1];
    } else {
      return checked ? "glyph-checkbox--checked-16" : "outline-checkbox-16";
    }
  }

  get iconClass() {
    const { disabled, checked, iconClass } = this.props;

    if (disabled) return checked ? "text-gray-5" : "text-gray-3";

    if (typeof iconClass === "string") return iconClass;

    return checked || this.state.focused ? "text-primary" : "text-gray-5";
  }

  get focusColor() {
    const { focusColor } = this.props;

    if (typeof focusColor === "boolean") return undefined;

    if (typeof focusColor === "string" && this.state.focused) return focusColor;

    return this.state.focused ? "shadow-outline" : undefined;
  }

  get disabledColor() {
    const { disabledColor } = this.props;

    return typeof disabledColor === "string" ? disabledColor : "text-gray-5";
  }

  get color() {
    const { color, disabled } = this.props;

    if (disabled) return this.disabledColor;

    // if (color === undefined) return undefined;

    if (typeof color === "string") return color;

    return "hover:bg-gray-1";
  }

  get classString() {
    const list = [
      "Checkbox relative",
      this.props.className,
      this.props.align,
      this.color,
      this.cursor,
      this.props.display,
      this.props.outline,
      this.props.padding,
      this.props.radius,
      this.props.size,
      this.props.transition,
    ];
    return classnames(list);
  }

  render() {
    const { value, checked } = this.state;
    const iconClassList = [
      "Checkbox__icon rounded-sm",
      this.focusColor,
      this.iconClass,
      this.props.transition,
    ];
    const iconClassString = classnames(iconClassList);
    const checkboxIcon = this.checkboxIcon ? (
      <Icon
        className={iconClassString}
        icon={this.checkboxIcon}
        size={this.props.iconSize}
      />
    ) : null;

    const text = this.props.text ? (
      <span
        className={classnames([
          "Checkbox__text leading-normal",
          this.props.iconText,
          this.props.truncate,
          { "ml-2": this.checkboxIcon },
        ])}
      >
        {this.props.text}
      </span>
    ) : null;

    return (
      <label
        aria-checked={checked}
        aria-disabled={this.props.disabled}
        aria-label={this.ariaLabel}
        className={this.classString}
        role="checkbox"
      >
        <input
          type="checkbox"
          className="absolute inset-y-0 left-0 w-full h-4 my-auto opacity-0 Checkbox__input pointer-events-none"
          disabled={this.props.disabled}
          name={this.props.name}
          required={this.props.required}
          value={value}
          checked={checked}
          // defaultChecked={checked}
          onChange={this.onClick}
          // onClick={this.onClick}
          onFocus={this.onFocus}
        />
        {this.props.children}
        {checkboxIcon}
        {text}
      </label>
    );
  }

  onClick(e: React.ChangeEvent) {
    const { value, checked } = this.state;

    if (this.props.disabled) return;

    if (this.props.onChange && typeof this.props.onChange === "function") {
      this.props.onChange(value, !checked);
    }
    this.setState({
      checked: !checked,
    });
  }
  onFocus = (e: React.FocusEvent) => {
    this.setState({ focused: true });
    this.input.current?.focus();
  };
}

export default CheckBox;
