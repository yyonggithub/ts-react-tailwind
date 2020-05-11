import * as React from 'react';
import Icon from '../icon';
import LoaderDot from '../loading/dot'

interface Props {
  text?: string;
  class?: string;
  align?: string;
  display?: string;
  shrink?: string;
  font?: string;
  outline?: string;
  radius?: string;
  lineHeight?: string;
  extendIcon?: string;
  transition?: string;
  disabledColor?: string;
  ifFocusedColor?: string;
  elseFocusedColor?: string;
  ariaLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  padding?: boolean | string;
  icon?: string;
  size?: string | boolean;
  preset?: string;
  color?: string;
  iconMargin?: string;
  iconColor?: string;
  isOpen?: boolean;
  onClick?: Function;
  onMousedown?: Function
  onMouseup?: Function;
}

interface State {
  focused: boolean;
}

class Button extends React.Component<Props, State> {

  static defaultProps = {
    text: '按钮',
    align: 'justify-center items-center',
    display: 'inline-flex',
    shrink: 'flex-shrink-0',
    font: 'text-sm font-medium',
    outline: 'focus:outline-none',
    radius: 'rounded-md',
    lineHeight: 'leading-5',
    extendIcon: '#outline-small-down-16',
    transition: 'transition ease-in-out duration-200',
    disabledColor: 'border border-transparent bg-gray-2 text-gray-6'
  }
  input: React.RefObject<HTMLButtonElement>;


  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      focused: false,
    }
    this.input = React.createRef();
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onMousedown = this.onMousedown.bind(this);
    this.onMouseup = this.onMouseup.bind(this);
  }

  get ariaLabel() {
    return this.props.ariaLabel || this.props.text || undefined;
  }

  get zIndex() {
    return this.state.focused ? 'z-2' : null;
  }

  get cursor() {
    const { disabled, loading, selected } = this.props;
    if (loading) {
      return 'cursor-wait';
    }
    if (selected || disabled) {
      return 'cursor-default';
    }
    return 'cursor-pointer';
  }

  get padding() {
    const { padding, icon, text } = this.props
    if (typeof padding === 'boolean' && padding === false) {
      return null;
    }
    if (typeof padding === 'string') {
      return padding;
    }
    return icon && !text ? null : 'px-4'
  }

  get size() {
    const { size, icon, text } = this.props
    if (typeof size === 'boolean' && size === false) {
      return null;
    }
    if (typeof size === 'string') {
      return size;
    }
    return icon && !text ? 'h-8 w-8' : 'h-8'
  }

  get focusColor() {
    const { ifFocusedColor, elseFocusedColor } = this.props
    return typeof ifFocusedColor === 'string' && this.state.focused ? ifFocusedColor : elseFocusedColor;
  }

  get focusState() {
    const { preset } = this.props
    switch (preset) {
      case 'primary':
        return this.state.focused
          ? 'shadow-outline border-primary-dark'
          : 'border-transparent';
      case 'secondary':
        return this.state.focused
          ? 'shadow-outline border-primary-opacity-3'
          : 'border-transparent';
      case 'danger':
        return this.state.focused
          ? 'shadow-outline-danger border-danger-dark'
          : 'border-transparent';
      default:
        return this.state.focused
          ? 'shadow-outline border-primary-opacity-4'
          : 'border-normal';
    }
  }

  get color(): string | undefined {
    const { preset, disabled, color } = this.props;
    if (disabled) return this.props.disabledColor;
    if (typeof color === 'string') return color;
    switch (preset) {
      case 'text':
        return `${this.focusState} text-body hover:bg-gray-1 active:bg-gray-2 active:text-body-dark`;
      case 'primary':
        return `border ${this.focusState} text-white primary hover:primary-bright active:primary-dark`;
      case 'secondary':
        return `border ${this.focusState} text-primary primary-opacity-1 hover:primary-opacity-05`;
      case 'danger':
        return `border ${this.focusState} text-white danger hover:danger-bright active:danger-dark`;
      default:
        return `border ${this.focusState} text-body body hover:text-body-bright active:text-body-dark active:gray-1`;
    }
  }

  get iconMargin(): string | null {
    const { iconMargin, text } = this.props;
    if (iconMargin) return iconMargin;
    return text ? '-ml-1 mr-2' : null;
  }

  get iconColor(): string | null {
    const { iconColor, preset } = this.props;
    if (iconColor) return iconColor;
    if (preset === 'text') return 'text-secondary group-hover:text-body';
    return null;
  }

  get extendOpacity(): string {
    const { disabled, isOpen } = this.props;
    if (disabled) return 'opacity-50';
    return isOpen ? 'opacity-100' : 'opacity-50 group-hover:opacity-100';
  }

  get classStr() {
    const list = [
      "Button relative group min-w-0 max-w-full",
      this.props.class,
      this.props.align,
      this.color,
      this.cursor,
      this.props.display,
      this.focusColor,
      this.props.font,
      this.props.lineHeight,
      this.props.outline,
      this.padding,
      this.props.radius,
      this.props.shrink,
      this.size,
      this.props.transition,
      this.zIndex
    ].filter(value => typeof value !== 'undefined' || value !== null)
    return list.join(' ')
  }

  render() {
    let styles = {}
    if (this.props.loading) {
      styles = {
        visibility: 'hidden'
      }
    }
    const className = ['Button__text truncate flex-grow'].join(' ')
    //  TODO:
    const loading = this.props.loading ? <div className="absolute inset-0 flex items-center justify-center"><LoaderDot color={'text-current'} /></div> : null
    //  TODO:
    const icon = this.props.icon ? <Icon icon={this.props.icon} style={styles} /> : null
    const text = this.props.text ? <span className={className} style={styles}>{this.props.text}</span> : null;
    //  TODO:
    const extend = this.props.extendIcon ?
      <Icon icon={this.props.extendIcon} class={["Button__extend transform ml-2 -mr-1", this.extendOpacity].join(' ')} style={styles} /> : null;
    return (
      <button
        aria-disabled={this.props.disabled}
        aria-label={this.ariaLabel}
        aria-busy={this.props.loading}
        className={this.classStr}
        disabled={this.props.disabled}
        type="button"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onClick={this.onClick}
        onMouseDown={this.onMousedown}
        onMouseUp={this.onMouseup}
        ref={this.input}
      >
        {loading}
        {icon}
        {this.props.children}
        {text}
        {extend}
      </button>
    )
  }

  onFocus(e: any) {
    this.setState({ focused: true })
    this.input.current?.focus();
    console.log('focus')
  }
  onBlur() {
    this.setState({ focused: false })
    this.input.current?.blur();
    console.log('blur')
  }
  onClick(e: React.MouseEvent) {
    if (!this.props.disabled && typeof this.props.onClick === 'function') {
      this.props.onClick(e)
    }
    this.setState({ focused: true })
    console.log('click');

  }
  onMousedown(e: React.MouseEvent) {
    if (!this.props.disabled && typeof this.props.onMousedown === 'function') {
      this.props.onMousedown(e)
    }
    console.log('mousedown');
  }
  onMouseup(e: React.MouseEvent) {
    if (!this.props.disabled && typeof this.props.onMouseup === 'function') {
      this.props.onMouseup(e)
    }
    console.log('mouseup');
  }
}

export default Button;