import React, { SFC, Fragment } from 'react';
import Icon from '../../components/icon';
import DocGroup from '../../components/doc-group';

const IconModule: SFC = () => {
  return (
    <Fragment>
      <DocGroup name="default">
        <Icon icon="align-bottom"></Icon>
      </DocGroup>
      <DocGroup name="size">
        <Icon size='24px' icon="align-bottom"></Icon>
      </DocGroup>
    </Fragment>
  )
}

export default IconModule