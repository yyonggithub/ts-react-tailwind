import * as React from 'react'
import { ReactSVG } from 'react-svg'
import './style.css'

interface Props {
  icon: string;
  class?: string;
  size?: number;
  transition?: string;
  style?: any
}

class Icon extends React.Component<Props, {}> {
  static defaultProps = {
    size: "16px",
    transition: 'transition ease-in-out duration-200',
    hidden: false,
  }

  get classStr() {
    const list = [
      'Icon pointer-events-none flex-shrink-0',
      this.props.transition,
      this.props.class
    ].filter(str => str !== '' || typeof str !== 'undefined')
    return list.join(' ')
  }
  render() {
    const style = {
      width: this.props.size,
      height: this.props.size,
    }
    return (
      <div
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