import React, { SFC, useState, useRef, RefObject } from 'react'
import classnames from 'classnames'
import { ClassType } from '../../interface';

const sizeMappings = {
  xs: {
    baseSize: 8,
    margin: 1,
  },
  sm: {
    baseSize: 12,
    margin: 2,
  },
  md: {
    baseSize: 16,
    margin: 2,
  },
  lg: {
    baseSize: 24,
    margin: 2,
  },
};

export type SwitchProps = {
  className?: ClassType
  textClass?: ClassType;
  ariaLabel?: string;
  text?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  checked?: boolean;
  disabledColor?: string;
  leverColor?: string;
  checkedColor?: string;
  focusColor?: string | boolean;
  color?: string;
  position?: string;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.ChangeEvent) => void;
} & Partial<typeof defaultProps>

type PresetType = 'xs' | 'sm' | 'md' | 'lg'

const defaultProps = {
  align: 'items-center align-middle',
  display: 'inline-flex',
  font: 'text-sm font-medium',
  lineHeight: 'leading-5',
  outline: 'focus:outline-none',
  preset: 'md',
  transition: 'transition-all ease-in-out duration-200',
}

const Switch: SFC<SwitchProps> = (props) => {

  const [focused, setFocused] = useState(props.checked || false)
  const input: RefObject<HTMLInputElement> = useRef(null)
  /**
   * 获取是否被选中状态
   * - 如果外部未传入`checked` 和 `onChange` 时使用内部state 否则使用外部状态和方法
   */
  const finalFocused = 'checked' in props && 'onChange' in props ? props.checked : focused;

  const ariaLabel = props.ariaLabel || props.text || undefined;
  const cursor = (() => {
    const { disabled, loading, selected } = props;

    if (loading) {
      return 'cursor-wait';
    } else if (selected || disabled) {
      return 'cursor-default';
    } else {
      return 'cursor-pointer';
    }
  })()
  const leverHeight = sizeMappings[props.preset as PresetType].baseSize;
  const leverWidth = (() => {
    const { baseSize, margin } = sizeMappings[props.preset as PresetType]
    return baseSize * 2 - margin * 4;
  })()
  const thumbSize = (() => {
    const { baseSize, margin } = sizeMappings[props.preset as PresetType];
    return baseSize - margin * 2;
  })()
  const thumbTop = sizeMappings[props.preset as PresetType].margin
  const thumbLeft = (() => {
    const { baseSize, margin } = sizeMappings[props.preset as PresetType];
    return finalFocused ? baseSize - margin * 3 : margin;
    // if ('checked' in props) {
    //   const { checked } = props;
    // } else {
    //   return focusState ? baseSize - margin * 3 : margin;
    // }
  })()
  const font = (() => {
    const { preset } = props
    switch (preset) {
      case 'xs':
        return 'text-2xs';
      case 'sm':
        return 'text-xs';
      case 'lg':
        return 'text-base';
      default:
        return 'text-sm';
    }
  })()
  const leading = (() => {
    const { preset } = props
    switch (preset) {
      case 'xs':
        return 'text-2xs';
      case 'sm':
        return 'text-xs';
      case 'lg':
        return 'text-base';
      default:
        return 'text-sm';
    }
  })()
  const leverColor = (() => {
    const { disabled, disabledColor, leverColor } = props

    if (disabled) return disabledColor ? 'bg-current' : 'bg-gray-3';

    if (typeof leverColor === 'string') return leverColor;
    // const ck = 'onChange' in props && 'checked' in props ? checked : focused;
    return finalFocused ? 'bg-primary' : 'bg-gray-3 group-hover:bg-gray-4';
  })()
  const checkedColor = (() => {
    const { checkedColor, disabled, disabledColor } = props
    if (typeof checkedColor === 'string') return checkedColor;
    return disabled
      ? disabledColor
        ? 'bg-white-opacity-8'
        : 'bg-gray-4'
      : 'bg-white';
  })()
  const disabledColor = (() => {
    const { disabled, disabledColor } = props;
    return disabled
      ? typeof disabledColor === 'string'
        ? disabledColor
        : 'text-gray-6'
      : null;
  })()
  const focusState = (() => {
    const { focusColor } = props;
    // const ck = 'checked' in props ? checked : focused;
    if (focusColor === false) return undefined;

    if (typeof focusColor === 'string')
      return finalFocused ? focusColor : undefined;

    return finalFocused ? 'shadow-outline': 'bg-gray-4 shadow-outline-gray';
    // return focused
    //   ? checked
    //     ? 'shadow-outline'
    //     : 'bg-gray-4 shadow-outline-gray'
    //   : undefined;
  })()
  const color = (() => {
    const { disabled, color } = props

    if (disabled) return null;

    if (typeof color === 'string') return color;

    return `${focusState}`;
  })()

  function onClick(e: React.MouseEvent) {
    if ('onClick' in props && typeof props.onClick === 'function') {
      props.onClick(e)
    }
  }
  function onChange(e: React.ChangeEvent) {
    if ('onChange' in props && typeof props.onChange === 'function') {
      props.onChange(e)
    } else {
      setFocused(!focused)
    }
  }
  function onBlur() {
    input.current?.blur()
  }
  function onFocus() {
    // setFocused(!focused)
    input.current?.focus();
  }

  return (
    <label
      aria-checked={props.checked ? props.checked : undefined}
      aria-disabled={props.disabled ? props.disabled : undefined}
      aria-label={ariaLabel}
      className={classnames(
        "Switch group select-none",
        props.className,
        props.size,
        props.align,
        cursor,
        disabledColor,
        props.display,
        font,
        props.lineHeight,
        props.outline,
        props.position,
      )}
      role="switch"
    >
      {props.children}
      <div
        className={classnames(
          "Switch__lever relative rounded-full",
          color,
          leverColor,
          props.transition,
        )}
        style={{
          height: `${leverHeight}px`,
          width: `${leverWidth}px`
        }}
      >
        <div
          className={classnames(
            "Switch__thumb absolute rounded-full shadow-sm",
            checkedColor,
            props.transition,
          )}
          style={{
            height: `${thumbSize}px`,
            width: `${thumbSize}px`,
            top: `${thumbTop}px`,
            left: `${thumbLeft}px`
          }}
        >
          <input
            checked={finalFocused}
            className="absolute w-full h-full opacity-0 Switch__input pointer-events-none"
            disabled={props.disabled}
            tabIndex={0}
            type="checkbox"
            onClick={onClick}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            ref={input}
          />
        </div>
      </div>
      {
        props.text ?
          <div className={classnames(props.textClass, "ml-2 Switch__text", leading)}>
            {props.text}
          </div> : null
      }
    </label>
  )
}
Switch.defaultProps = defaultProps

export default Switch;
