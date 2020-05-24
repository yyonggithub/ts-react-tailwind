import * as React from 'react';
import classnames from 'classnames';
import Button from '..';
import { presetType } from '../button'

export type Option = {
  text: string;
  selected?: boolean;
  disabled?: boolean;
  selectedColor?: string;
  childColor?: string;
  disabledColor?: string;
  font?: string;
  display?: string;
  onClick?: Function;
  radius?: string;
  shrink?: string;
  size?: string;
  focusColor?: string[] | string;
}

type Preset = presetType

export type ButtonGroupProps = {
  multiple?: boolean;
  selector?: boolean;
  size?: string;
  orientation?: 'vertical' | '';
  display?: string;
  align?: string;
  radius?: string;
  disabledColor?: string;
  preset?: Preset;
  disabled?: boolean;
  font?: string;
  toggleable?: boolean;
  options: Option[];
} & Partial<typeof defaultProps>

const defaultProps = {
  outline: 'focus:outline-none'
}

type State = {
  selected: {
    index: number;
    text: string;
    selected: boolean;
  }[]
}

class ButtonGroup<T extends ButtonGroupProps> extends React.Component<ButtonGroupProps, State> {

  static defaultProps = defaultProps;

  constructor(props: ButtonGroupProps) {
    super(props)
    // if (hasSelected(props)) {
    const { options } = props;
    let list: { index: number, text: string, selected: boolean }[] = [];
    options.forEach((item, index: number) => {
      list.push(
        {
          index,
          text: item.text,
          selected: item.selected ? item.selected : false
        }
      )
    })
    this.state = {
      selected: list,
    }
    // }

    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    // this.onBlur = this.onBlur.bind(this);
  }

  get display() {
    const { orientation, display } = this.props
    if (display) return display;
    return orientation === 'vertical' ? 'inline-flex flex-col' : 'inline-flex'
  }

  get align() {
    const { orientation, align } = this.props;
    if (align) return align;
    return orientation === 'vertical' ? 'items-stretch' : 'items-center';
  }

  get radius() {
    const { orientation, radius } = this.props;
    if (radius) return radius;
    return orientation === 'vertical'
      ? 'first:rounded-t-md last:rounded-b-md'
      : 'first:rounded-l-md last:rounded-r-md';
  }

  get disabledColor() {
    const { disabledColor } = this.props;
    if (disabledColor) return disabledColor;
    return 'border border-transparent text-gray-6 bg-gray-2';
  }

  get selectedColor() {
    switch (this.props.preset) {
      case 'primary':
        return 'border border-primary-dark text-white bg-primary-dark';
      case 'secondary':
        return 'border text-white bg-primary';
      default:
        return 'border border-normal text-body-dark bg-gray-3';
    }
  }

  get childColor() {
    switch (this.props.preset) {
      case 'primary':
        return 'border text-white bg-primary hover:bg-primary-dark hover:border-primary-dark';
      case 'secondary':
        return 'border text-primary hover:bg-primary-opacity-05';
      default:
        return '';
    }
  }

  get ifFocusedColor() {
    switch (this.props.preset) {
      case 'primary':
        return 'shadow-outline border-primary-dark bg-primary-dark';
      case 'secondary':
        return 'shadow-outline border-primary-dark bg-primary-opacity-1';
      default:
        return 'shadow-outline border-primary-opacity-4';
    }
  }

  get elseFocusedColor() {
    switch (this.props.preset) {
      case 'primary':
        return 'border-primary';
      case 'secondary':
        return 'border-primary';
      default:
        return 'border-gray-normal';
    }
  }

  get focusColor() {
    return [this.ifFocusedColor, this.elseFocusedColor]
  }

  get classStr() {
    const orientation = this.props.orientation === 'vertical' ? '-space-y-px' : '-space-x-px';
    const list = [
      "Button-group min-w-0 max-w-full",
      this.display,
      this.align,
      this.props.outline,
      orientation,
    ]
    return classnames(list);
  }

  getButtonList() {
    return this.props.options.map((item, index) => {
      const selected = this.props.selector || this.props.toggleable

      const selectedColor = 'selectedColor' in item ? item.selectedColor : this.selectedColor;
      const childColor = 'childColor' in item ? item.childColor : this.childColor;
      const disabled = 'disabled' in item ? item.disabled : this.props.disabled;
      const disabledColor = 'disabledColor' in item ? item.disabledColor : this.disabledColor
      const font = 'font' in item ? item.font : this.props.font;
      const display = 'display' in item ? item.display : 'flex flex-grow'
      const onClick = 'onClick' in item ? item.onClick : null;
      const radius = 'radius' in item ? item.radius : this.radius;
      const shrink = 'shrink' in item ? item.shrink : 'false'
      const size = 'size' in item ? item.size : this.props.size;
      const focusColor = 'focusColor' in item ? item.focusColor : this.focusColor;

      return (
        < Button
          key={index}
          className={index > 0 ? (this.props.orientation === 'vertical' ? '-mt-px' : '-ml-px') : ''}
          // color={this.selectedColor}
          color={selected && this.state.selected[index].selected ? selectedColor : childColor}
          disabled={disabled}
          disabledColor={disabledColor}
          display={display}
          font={font}
          onClick={() => {
            this.onClick(index);
            if (onClick && typeof onClick === 'function') {
              onClick(item, index);
            }
          }}
          // onBlur={() => { this.onBlur(index) }}
          radius={radius}
          selected={this.state.selected[index].selected}
          shrink={shrink}
          size={size}
          // ifFocusedColor={selected ? undefined : this.ifFocusedColor}
          focusColor={focusColor}
        // elseFocusedColor={this.elseFocusedColor}
        > {item.text}</Button >
      )
    })
  }

  render() {
    return (
      <div
        aria-disabled={this.props.disabled ? true : false}
        className={this.classStr}
        role="group"
      >
        {this.getButtonList()}
      </div>
    )
  }

  onClick(index: number) {
    console.log(index)
    const { selected } = this.state
    const [...list] = selected
    if (this.props.toggleable && this.props.multiple) {
      this.handleToggle(index, list);
    } else {
      this.handleClick(index, list);
    }
  }
  handleClick(index: number, list: State['selected']) {
    list.forEach((item, idx) => {
      if (index === idx) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    })
    this.setState({
      selected: list
    })
  }
  handleToggle(index: number, list: State['selected']) {
    console.log(index, list);

    list.forEach((item, idx) => {
      if (index === idx) {
        item.selected = !item.selected;
      }
    })
    this.setState({
      selected: list
    })
  }
}

export default ButtonGroup
