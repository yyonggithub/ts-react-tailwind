import React, { ChangeEventHandler } from "react";
import CheckBox, { Props as CheckboxProps } from "../index";

export type CheckboxGroupProps = {
  text?: string;
  value?: string;
  checked?: boolean;
  options: CheckboxProps[];
  onChange?: (v: string[]) => void;
};

export type State = {
  value: string[];
  list: CheckboxProps[];
};

type DefaultValue = {
  value: string[];
  onChecked: ChangeEventHandler<HTMLInputElement>;
};

export const CheckBoxContext = React.createContext({} as DefaultValue);

class CheckBoxGroup extends React.Component<CheckboxGroupProps, State> {
  state: State = {
    value: [],
    list: [],
  };
  constructor(props: CheckboxGroupProps) {
    super(props);
    const { options } = props;
    let arr: string[] = [];
    options.forEach((item) => {
      if (item.checked) {
        arr.push(item.value || item.text || "");
      }
    });
    this.state = {
      value: arr,
      list: options,
    };
  }

  // onChecked = (value: string, checked: boolean) => {
  onChecked: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const idx = Number(e.target.dataset.index);
    console.log(value, checked);
    const [...rest] = this.state.value;
    let arr: string[] = [];
    let index = rest.indexOf(value);
    if (checked && index === -1) {
      rest.push(value);
      arr = rest;
    }
    if (!checked && index > -1) {
      arr = rest.filter((str) => value !== str);
    }
    const list = this.state.list.map((item, index) => {
      const { value, checked, ...rest } = item;
      return {
        value,
        checked: index === idx ? !checked : checked,
        ...rest,
      };
    });
    this.setState({
      value: arr,
      list,
    });

    const { onChange } = this.props;
    if (onChange && typeof onChange === "function") onChange(arr);
  };

  render() {
    const { list } = this.state;
    const checkBoxes = list.map((item, index) => {
      return (
        <div key={index}>
          <CheckBoxContext.Consumer>
            {({ onChecked }) => (
              <CheckBox
                text={item.text}
                value={item.value}
                onChange={onChecked}
                checked={item.checked}
                data-index={index}
                {...item}
              />
            )}
          </CheckBoxContext.Consumer>
        </div>
      );
    });

    return (
      <CheckBoxContext.Provider
        value={{
          value: this.state.value,
          onChecked: this.onChecked,
          // list:this.state.list,
        }}
      >
        {checkBoxes}
      </CheckBoxContext.Provider>
    );
  }
}

export default CheckBoxGroup;
