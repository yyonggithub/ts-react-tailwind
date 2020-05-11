import * as React from 'react';

interface Props {
  color: string;
  outColor?: string;
  size?: string;
  duration?: string;
}

class LoaderDot extends React.Component<Props, {}> {
  static defaultProps = {
    color: 'text-gray-5'
  }
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


    // let cssProperty = '';
    // if (this.props.outColor)
    //   cssProperty = `${cssProperty} --dot-color: ${this.props.outColor};`;
    // if (this.props.size)
    //   cssProperty = `${cssProperty} --dot-size: ${this.props.size};`;
    // if (this.props.duration)
    //   cssProperty = `${cssProperty} --dot-duration: ${this.props.duration};`;
    return style;
  }

  get classStr() {
    const list = [
      "Loader--dot items-center flex flex-shrink-0 justify-center text-center",
      this.props.color,
    ]
    return list.join(' ')
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
