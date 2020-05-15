import React from 'react';
import CheckBoxGroup, { CheckboxGroupProps } from '../../components/checkbox/checkbox-group';
import DocGroup from '../../components/doc-group';
import CheckBox from '../../components/checkbox';


const list: CheckboxGroupProps = {
  onChange: (v) => {
    console.log(v)
  },
  options: [
    { checked: false, text: 'First', value: 'First' },
    { checked: false, text: 'Second', value: 'Second' },
    { checked: false, text: 'Third', value: 'Third' },
    { checked: true, text: 'Disabled checked', value: 'Disabled checked', disabled: true },
    { checked: false, text: 'Disabled', value: 'Disabled', disabled: true },
  ]
}

const custom: CheckboxGroupProps = {
  onChange: (v) => {
    console.log(v);
  },
  options: [
    {
      checked: false,
      text: 'Customized green',
      iconClass: 'text-success',
      focusColor: 'shadow-outline-success text-success',
    },
    {
      checked: false,
      text: 'Customized purple',
      color: 'text-info',
      iconClass: 'text-info',
      focusColor: 'shadow-outline-info text-info',
    }
  ]
}

const CheckBoxModule: React.SFC = () => {
  return (
    <React.Fragment>
      <DocGroup name="default">
        <CheckBox text="checkbox1" value="checkbox1" />
      </DocGroup>
      <DocGroup name="list">
        <CheckBoxGroup {...list} />
      </DocGroup>
      <DocGroup name="custom">
        <CheckBoxGroup {...custom} />
      </DocGroup>
    </React.Fragment>
  )
}

export default CheckBoxModule