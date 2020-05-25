import React, { createRef, RefObject } from 'react';
import classnames from 'classnames';
import { classnamesType } from '../../interface';

type InputProps = {
  className?: classnamesType
  value?: string;
  ref?: any
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type State = {
  focused: boolean;
  value: string;
}

class Input extends React.PureComponent<InputProps, State> {

  input: React.RefObject<HTMLInputElement>;

  state = {
    focused: false,
    value: this.props.value || ''
  }

  constructor(props: InputProps) {
    super(props);
    this.input = createRef()
  }

  onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      focused: false
    })
    this.input.current?.blur()
    if ('onBlur' in this.props && typeof this.props.onBlur === 'function') {
      this.props.onBlur(e)
    }
  }
  onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      focused: true
    })
    this.input.current?.focus();
    const { onFocus } = this.props;
    if (onFocus && typeof onFocus === 'function') {
      onFocus(e)
    }
  }
  onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { onClick } = this.props;
    if (onClick && typeof onClick === 'function') {
      onClick(e)
    }
  }
  onMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    const { onMouseDown } = this.props;
    if (onMouseDown && typeof onMouseDown === 'function') {
      onMouseDown(e)
    }
  }
  onMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const { onMouseUp } = this.props;
    if (onMouseUp && typeof onMouseUp === 'function') {
      onMouseUp(e)
    }
  }
  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyUp } = this.props;
    if (onKeyUp && typeof onKeyUp === 'function') {
      onKeyUp(e)
    }
  }
  onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyDown } = this.props;
    if (onKeyDown && typeof onKeyDown === 'function') {
      onKeyDown(e)
    }
  }
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(e)
    } else {
      this.setState({
        value: e.target.value
      })
    }
  }
  render() {
    const { value, className,
      onBlur, onFocus, onClick, onMouseDown, onMouseUp, onKeyDown, onKeyUp, onChange,
      ...rest } = this.props;
    const classString = classnames('TextField__input bg-none', className)
    return (
      <input
        className={classString}
        value={value}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onClick={this.onClick}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        ref={this.props.ref || this.input}
        {...rest}
      />
    )
  }
}

export default Input