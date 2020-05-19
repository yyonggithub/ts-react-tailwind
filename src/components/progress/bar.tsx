import React, { SFC, Component, ComponentType } from "react";
import classnames from 'classnames';
import { ClassType } from "../../interface";

export type BarProps = {
  className?: ClassType
  progress: number;
} & Partial<typeof defaultProps>

const defaultProps = {
  color: 'bg-primary',
  background: 'bg-gray-1',
  size: 'h-2',
  radius: 'rounded-full',
  transition: 'transition ease-in-out duration-200'
}

const Bar: SFC<BarProps> = (props) => {
  const { background, radius, size, color, transition, className } = props
  const progress = props.progress ? props.progress : 0;

  return (
    <div className={classnames("Progress--bar w-full", className)} role="progressbar">
      <div className={classnames("Progress__background flex-grow", background, radius, size)}>
        <div
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className={classnames("Progress__bar", color, radius, size, transition)}
          style={{
            width: `${progress}%`,
            transition: "width .4s linear"
          }}
        ></div>
      </div>
      {props.children}
    </div >
  )
}
Bar.defaultProps = defaultProps

type HocState = {
  progress: number;
}

export const HOCProgressBar = (WrappedComponent: ComponentType<BarProps>) => {
  return class extends Component<BarProps, HocState>{
    render() {
      const { progress } = this.props
      return (
        <Bar {...this.props} className="flex items-center">
          <WrappedComponent progress={progress} />
        </Bar>
      )
    }
  }
}

export default Bar;