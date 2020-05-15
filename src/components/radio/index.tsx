import React from 'react';
import classnames from 'classnames';
import { BaseProps, defaultProps } from '../checkbox'
import Icon from '../icon';
// TODO:

export interface RadioProps extends BaseProps {
  defaultValue?: string;
  radioIcon?: string | boolean;
  textClass?: string;
  onChange?: (v: string, checked: boolean) => void
}

type State = {
  value: string;
  checked: boolean;
  focused: boolean;
}

class Radio extends React.Component<RadioProps, State> {
  static defaultProps = defaultProps

  input: React.RefObject<HTMLInputElement>;

  constructor(props: RadioProps) {
    super(props)
    this.state = {
      value: props.value || '',
      checked: this.props.checked || false,
      focused: false,
    }
    console.log(this.state);

    this.input = React.createRef();
  }

  get cursor() {
    return this.props.disabled ? 'cursor-default' : 'cursor-pointer';
  }
  get ariaLabel() {
    return this.props.ariaLabel || this.props.text || undefined;
  }

  get radioIcon() {
    const { radioIcon } = this.props;
    if (radioIcon === false) return false;

    if (radioIcon && Array.isArray(radioIcon) && radioIcon.length === 2) {
      return this.state.checked ? radioIcon[0] : radioIcon[1];
    } else {
      return this.state.checked ? 'glyph-radio--checked-16' : 'outline-radio-16';
    }
  }

  get iconClass() {
    const { disabled, iconClass } = this.props;

    if (disabled) return this.state.checked ? 'text-gray-5' : 'text-gray-3';
    if (typeof iconClass === 'string') return iconClass;
    return this.state.checked || this.state.focused ? 'text-primary' : 'text-gray-5';
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
      'Radio relative',
      this.props.align,
      this.color,
      this.cursor,
      this.props.display,
      this.props.outline,
      this.props.padding,
      this.props.radius,
      this.props.size,
      this.props.transition,
    ]
    return classnames(list);
  }

  onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let value = e.target.value;
    const { value } = this.state
    if (this.props.disabled) return;

    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange(value, e.target.checked);
    } else {
      this.setState({
        checked: e.target.checked,
      })
    }
  }
  onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: true })
    this.input.current?.focus();
  }

  render() {
    // const checked = this.props.value === this.state.value;
    console.log(this.props.value, this.props.checked);
    const checked = this.props.checked || this.state.checked;
    const iconClassList = [
      "Radio__icon rounded-full",
      this.props.iconClass,
      this.focusColor,
      this.iconClass,
      this.props.transition,
    ]
    const iconClassString = classnames(iconClassList)
    const checkboxIcon = this.radioIcon ?
      <Icon class={iconClassString} icon={this.radioIcon} size={this.props.iconSize} /> : null;

    const text = this.props.text ?
      <span className={classnames(["Radio__text leading-normal", this.props.textClass, this.props.truncate, { 'ml-2': this.radioIcon }])}>{this.props.text}</span> : null

    const type = 'radio'
    return (
      <label
        aria-checked={checked}
        aria-disabled={this.props.disabled}
        aria-label={this.ariaLabel}
        className={this.classString}
        role={type}
      >
        <input
          type={type}
          className="absolute inset-y-0 left-0 w-full h-4 my-auto opacity-0 Radio__input pointer-events-none"
          disabled={this.props.disabled}
          name={this.props.name}
          required={this.props.required}
          value={this.props.value}
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
    )
  }


}

export default Radio;