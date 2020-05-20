import React from "react";
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
};

type DefaultValue = {
  value: string[];
  onChecked: (value: string, checked: boolean) => void;
};

export const CheckBoxContext = React.createContext({} as DefaultValue);

class CheckBoxGroup extends React.Component<CheckboxGroupProps, State> {
  state: State = {
    value: [],
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
    };
  }

  onChecked = (value: string, checked: boolean) => {
    // console.log(value, checked)
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
    this.setState({
      value: arr,
    });

    const { onChange } = this.props;
    if (onChange && typeof onChange === "function") onChange(arr);
  };

  render() {
    const { options } = this.props;
    const checkBoxes = options.map((item, index) => {
      return (
        <div key={index}>
          <CheckBoxContext.Consumer>
            {({ onChecked }) => (
              <CheckBox
                text={item.text}
                value={item.value}
                onChange={onChecked}
                checked={item.checked}
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
        }}
      >
        {checkBoxes}
      </CheckBoxContext.Provider>
    );
  }
}

export default CheckBoxGroup;
