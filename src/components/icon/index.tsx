import * as React from 'react'
import { ReactSVG } from 'react-svg'
import classnames from 'classnames';
import { ClassType } from '../../interface';

type Props = {
  icon: string;
  className?: ClassType
  style?: any
} & Partial<typeof defaultProps>

const defaultProps = {
  size: "16px",
  transition: 'transition ease-in-out duration-200',
}

class Icon extends React.Component<Props & typeof defaultProps, {}> {
  static defaultProps = defaultProps

  get classStr() {
    const list = [
      'Icon pointer-events-none flex-shrink-0',
      this.props.transition,
      this.props.className
    ]
    return classnames(list)
  }
  render() {
    const style = {
      width: this.props.size,
      height: this.props.size,
    }
    return (
      <div
        aria-live="polite"
        aria-label="Do not refresh the page"
        className={this.classStr}
        style={this.props.style}
      >
        <ReactSVG
          style={style}
          src={`assets/svg/${this.props.icon}.svg`}
          className={'fill-current'}
        />
      </div>
    )
  }
}

export default Icon