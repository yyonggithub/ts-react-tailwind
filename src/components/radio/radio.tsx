import React from 'react'

type DefaultValue = {
  value: string;
  onChange: (v: string) => void
}



type State = {
  value: string;
  checked: boolean;
}

const RadioContext = React.createContext({} as DefaultValue)

type RadioProps = {
  text?: string;
  value?: string;
  checked?: boolean;
  selected?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.SFC<RadioProps> = (props) => {
  const { value, text, checked, onChange } = props;
  return (
    <label>
      <input type="radio" name={text} value={value} checked={checked} onChange={onChange} />{text}
    </label>
  )
}

type Props = {
  value?: string;
  checked?: boolean;
}

const r = [
  { text: 'radio 1', value: 'radio 1' },
  { text: 'radio 2', value: 'radio 2' },
  { text: 'radio 3', value: 'radio 3' },
  { text: 'radio 4', value: 'radio 4' },
]

class RadioGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: props.value || '',
      checked: props.checked || false,
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const radios = r.map((item, index) => {
      const checked = this.state.value === item.value
      return (
        <Radio onChange={this.onChange} {...item} key={index} checked={checked} />
      )
    })
    return (
      <div>
        {radios}
        {/* <input type="radio" name="radio 1" value="radio 1" checked={this.state.value === 'radio 1'} onChange={this.onChange} />Radio 1
        <input type="radio" name="radio 2" value="radio 2" checked={this.state.value === 'radio 2'} onChange={this.onChange} />Radio 2
        <input type="radio" name="radio 3" value="radio 3" checked={this.state.value === 'radio 3'} onChange={this.onChange} />Radio 3
        <input type="radio" name="radio 4" value="radio 4" checked={this.state.value === 'radio 4'} onChange={this.onChange} />Radio 4 */}
      </div>
    )
  }
}

export default RadioGroup