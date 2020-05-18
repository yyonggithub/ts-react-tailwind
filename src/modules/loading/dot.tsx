import React from 'react'
import DocGroup from '../../components/doc-group'
import Loading from '../../components/loading'


const DotModule: React.SFC = () => {
  return (
    <React.Fragment>
      <DocGroup name="default">
        <Loading.Dot />
      </DocGroup>
      <DocGroup name="size">
        <Loading.Dot size="12px" />
      </DocGroup>
      <DocGroup name="color">
        <Loading.Dot color="text-primary" />
        <Loading.Dot color="text-info" outColor="var(--warning)" />
      </DocGroup>
      <DocGroup name="Duration">
        <Loading.Dot duration=".2s" />
      </DocGroup>
    </React.Fragment>
  )
}

export default DotModule