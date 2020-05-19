import React from 'react'
import Radio, { RadioProps } from '../index'

export type RadioGroupProps = {
  text?: string;
  value?: string;
  defaultValue?: string;
  checked?: boolean;
  options: RadioProps[]
  onChange?: (v: string[]) => void
}

type DefaultValue = {
  value: string,
  onChange: (value: string, checked: boolean) => void
}

export type State = {
  value: string,
  // onChange: (value: string) => void
}

const RadioContext = React.createContext({} as DefaultValue)

class RadioGroup extends React.Component<RadioGroupProps, State> {
  constructor(props: RadioGroupProps) {
    super(props)
    // const { options } = props;
    this.state = {
      value: props.defaultValue || '',
      // onChange: this.onChange,
    }
  }

  onChange = (value: string, checked: boolean) => {
    console.log(value, checked);

    this.setState({
      value: value
    })
    return value;
  }
  render() {
    const radios = this.props.options.map((item, index) => {
      const { onChange: handleChange, value, checked: ck, ...rest } = item
      const checked = this.state.value === item.value
      return (
        <div key={index}>
          <RadioContext.Consumer>
            {({ value, onChange }) => {
              return <Radio onChange={onChange} checked={checked} value={item.value} {...rest} />
            }}
          </RadioContext.Consumer>
        </div>
      )
    })
    return (
      <RadioContext.Provider value={{
        value: this.state.value,
        onChange: this.onChange
      }}>
        {radios}
      </RadioContext.Provider>
    )
  }
}

export default RadioGroup