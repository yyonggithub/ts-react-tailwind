import * as React from 'react';
import { filterClassNameAndToString } from '../../../utils';
import './style.css';

type Props = {
  outColor?: string;
  size?: string;
  duration?: string;
} & Partial<typeof defaultProps>

const defaultProps = {
  color: 'text-gray-5'
}

class LoaderDot extends React.Component<Props & typeof defaultProps, {}> {
  static defaultProps = defaultProps
  get cssVar() {
    const style: any = {
    }
    if (this.props.outColor) {
      style['--dot-color'] = this.props.outColor
    }
    if (this.props.size) {
      style['--dot-size'] = this.props.size
    }
    if (this.props.duration) {
      style['--dot-duration'] = this.props.duration
    }

    return style;
  }

  get classStr() {
    const list = [
      "Loader--dot items-center flex flex-shrink-0 justify-center text-center",
      this.props.color,
    ]
    return filterClassNameAndToString(list)
  }
  render() {
    return (
      <div
        aria-live="polite"
        aria-label="Do not refresh the page"
        style={this.cssVar}
        className={this.classStr}
      >
        <div className="Loader__dot"></div>
        <div className="Loader__dot"></div>
      </div>
    )
  }
}

export default LoaderDot
