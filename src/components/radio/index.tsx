import React from 'react';
import { filterClassNameAndToString } from '../../utils';

type Props = {
  text: string;
  checked: boolean | "false" | "mixed" | "true";
  disabled: boolean;
  ariaLabel: string;
  align: string;
  color: string;
  cursor: string;
  display: string;
  outline: string;
  padding: string;
  radius: string;
  size: string;
  transition: string;
  id: string;
  checkboxIcon: string[] | boolean;
  iconClass: string;
  focusColor: string;
  disabledColor: string;
}

const defaultProps = {
  align: 'items-center',
  display: 'inline-flex',
  outline: 'focus:outline-none',
  truncate: 'truncate',
  padding: '-mx-1 px-1',
  size: 'min-h-6',
  radius: 'rounded',
  transition: 'transition ease-in-out duration-200',
}

type State = {
  focused: boolean;
}

class Radio extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      focused: false,
    }
  }

  get cursor() {
    return this.props.disabled ? 'cursor-default' : 'cursor-pointer';
  }

  get checkboxIcon() {
    const { checkboxIcon, checked } = this.props;
    if (checkboxIcon === false) return false;
    if (checkboxIcon && Array.isArray(checkboxIcon) && checkboxIcon.length === 2) {
      return checked ? checkboxIcon[0] : checkboxIcon[1];
    } else {
      return checked ? '#glyph-checkbox-checked-16' : '#outline-checkbox-16';
    }
  }

  get iconClass() {
    const { disabled, checked, iconClass } = this.props;
    if (disabled) return checked ? 'text-gray-5' : 'text-gray-3';
    if (typeof iconClass === 'string') return iconClass;
    return checked || this.state.focused ? 'text-primary' : 'text-gray-5';
  }

  get focusColor() {
    const { focusColor } = this.props;
    if (typeof focusColor === 'boolean') return undefined;
    if (typeof focusColor === 'string' && this.state.focused) return focusColor;
    return this.state.focused ? 'shadow-outline' : undefined;
  }

  get disabledColor() {
    const { disabledColor } = this.props;
    return typeof disabledColor === 'string' ? disabledColor : 'text-gray-5';
  }

  get color() {
    const { color, disabled } = this.props;
    if (disabled) return this.disabledColor;
    if (color === '') return undefined;
    if (typeof color === 'string') return color;
    return 'hover:bg-gray-1';
  }


  get classString() {
    const list = [
      'Raido relative',
      this.props.align,

    ]
    return filterClassNameAndToString(list);
  }

  render() {
    const checked = this.props.checked || false;
    const disabled = this.props.disabled || false;
    const ariaLabel = this.props.ariaLabel || this.props.text || undefined;

    return (
      <label
        aria-checked={checked}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        className={this.classString}
      ></label>
    )
  }


}

export default Radio;