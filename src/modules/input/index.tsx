import React from 'react';
import DocGroup from '../../components/doc-group';
import Input from '../../components/input/input';

const InputModule: React.SFC = (props) => {
  return (
    <React.Fragment>
      <DocGroup name={'default'}>
        <Input />
      </DocGroup>
    </React.Fragment>
  )
}

export default InputModule