import React from 'react';
import DocGroup from '../../components/doc-group';
import Radio from '../../components/radio/radio';
// import Radio from '../../components/radio';
// import RadioGroup, { RadioGroupProps } from '../../components/radio/radio-group'

// const group: RadioGroupProps = {
//   // defaultValue: 'Disabled checked',
//   options: [
//     { value: 'Female', text: 'Female' },
//     { value: 'Male', text: 'Male' },
//     { value: 'Other', text: 'Other' },
//     { value: 'Disabled checked', text: 'Disabled checked', disabled: true },
//     { value: 'Disabled', text: 'Disabled', disabled: true },
//   ]
// }


const RadioModule: React.SFC = () => {
  return (
    <React.Fragment>
      {/* <DocGroup name="default">
        <Radio value="radio 1" text="Radio 1" />
      </DocGroup> */}
      <DocGroup name="group">
        <Radio/>
      </DocGroup>
    </React.Fragment>
  )
}

export default RadioModule


// tracked(Object.create({ checked: false, text: 'Female' })),
//   tracked(Object.create({ checked: false, text: 'Male' })),
//   tracked(Object.create({ checked: false, text: 'Other' })),
//   tracked(
//     Object.create({ checked: true, text: 'Disabled checked', disabled: true })
//   ),
//   tracked(
//     Object.create({ checked: false, text: 'Disabled', disabled: true })
//   ),