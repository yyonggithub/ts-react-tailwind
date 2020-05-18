import React, { useState } from 'react'
import CheckBox from '../../components/checkbox';
import DocGroup from '../../components/doc-group';
import Loading, { LoaderBarProps } from '../../components/loading';

const BarGroup: React.SFC<LoaderBarProps> = (props) => {
  const [startState, setStart] = useState(false)
  const [successState, setSuccess] = useState(false)

  const { start, end, ...rest } = props;
  return (
    <React.Fragment>
      <div className={'w-screen'}>
        <Loading.Bar start={startState} end={successState} {...rest}></Loading.Bar>
      </div>
      <div className={'w-screen'}>
        <CheckBox text='Start' checked={startState} onChange={() => { setStart(!startState) }}></CheckBox>
        <CheckBox text='Success' checked={successState} onChange={() => { setSuccess(!successState) }}></CheckBox>
      </div>
    </React.Fragment >
  )
}

const BarModule: React.SFC = () => {
  return (
    <React.Fragment>
      <DocGroup name="bar" className={'flex-wrap'}>
        <BarGroup />
      </DocGroup>
      <DocGroup name="color" className={'flex-wrap'}>
        <BarGroup color="bg-success" />
      </DocGroup>
      <DocGroup name="size" className={'flex-wrap'}>
        <BarGroup size="h-2" />
      </DocGroup>
    </React.Fragment>
  )
}

export default BarModule;