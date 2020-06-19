import React, {
  FC,
  useState,
  useRef,
  MouseEventHandler,
  isValidElement,
  cloneElement,
} from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import { Placement } from "../overlay/utils";
import Overlay from "../overlay";
import Button from "../button";
import Icon from "../icon";

type SelectProps = {
  className?: classnamesType;
  offSize?: number;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string | number;
  placement?: Placement;
  preventScroll?: string;
  onChange?: (v: string | number) => void;
  isOpen?: boolean;
} & Partial<typeof defaultProps>;

const defaultProps = {
  display: "inline-block",
  extendIcon: "outline-small-down-16",
  allowClear: false,
  offSize: 0,
};

const Select: FC<SelectProps> = (props) => {
  const {
    children,
    className,
    placeholder,
    value,
    disabled,
    display,
    isOpen,
    extendIcon,
    allowClear,
    placement,
    offSize,
    onChange,
    ...restProps
  } = props;
  const selectRef = useRef<HTMLButtonElement>(null);

  const [currentValue, setValue] = useState(value ? value : placeholder || "");
  const handleChange = (v: string | number) => {
    setValue(v);
    if (onChange) {
      onChange(v);
    }
    setOpen(!currentOpen);
  };

  const [currentOpen, setOpen] = useState(isOpen ? isOpen : false);
  const handleOpen = () => {
    setOpen(!currentOpen);
  };

  const handleIconClick: MouseEventHandler<HTMLDivElement> = (e) => {
    placeholder ? setValue(placeholder) : setValue("");
    e.stopPropagation();
  };
  const iconUrl = (() => {
    if (currentValue === placeholder || currentValue === "") {
      return extendIcon;
    }
    return allowClear ? "outline-remove-12" : extendIcon;
  })();
  const icon = (
    <div
      style={{
        lineHeight: 0,
      }}
      onClick={allowClear ? handleIconClick : undefined}
    >
      <Icon
        className={classnames(
          "Button__extend transform -mr-1 ml-2 hover:border-primary-dark",
          {
            "opacity-50": disabled,
            "opacity-100": currentOpen,
            "opacity-50 group-hover:opacity-100": !currentOpen,
            relative: allowClear,
            "inline-block": allowClear,
          }
        )}
        icon={iconUrl as string}
      />
    </div>
  );

  const getTrigger = () => {
    return selectRef.current;
  };

  const classes = classnames("Select", className, display);

  return (
    <>
      <div className={classes} {...restProps}>
        <Button
          ref={selectRef}
          disabled={disabled ? true : false}
          onClick={handleOpen}
        >
          {currentValue}
          {icon}
        </Button>
      </div>
      {currentOpen ? (
        <Overlay
          placement={placement || "bottom-start"}
          getTrigger={getTrigger}
          hasMask={true}
          handleShow={() => {
            setOpen(false);
          }}
          arrowSize={offSize}
        >
          <ul
            className={classnames(
              "w-auto bg-body border border-normal overflow-hidden rounded-md shadow-lg",
              "min-w-max-content"
            )}
          >
            {React.Children.map(children, (child) => {
              if (isValidElement(child)) {
                return cloneElement(child, {
                  handleChange,
                  handleOpen,
                  currentValue,
                });
              }
              return child;
            })}
          </ul>
        </Overlay>
      ) : null}
    </>
  );
};

Select.defaultProps = defaultProps;
Select.displayName = "Select";

export default Select;
