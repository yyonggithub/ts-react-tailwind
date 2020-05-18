import React from 'react'
import DocGroup from '../../components/doc-group'
import Loading from '../../components/loading'

const CircleModule: React.SFC = () => {
  return (
    <React.Fragment>
      <DocGroup name="default">
        <Loading.Circle />
      </DocGroup>
      <DocGroup name="size">
        <Loading.Circle size="12px" />
      </DocGroup>
      <DocGroup name="color">
        <Loading.Circle color="text-primary" />
        <Loading.Circle color="text-info"/>
      </DocGroup>
      <DocGroup name="Duration">
        <Loading.Circle duration=".2s" />
      </DocGroup>
    </React.Fragment>
  )
}

export default CircleModule