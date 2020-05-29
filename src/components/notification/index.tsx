import React, { Component } from 'react'
import classnames from 'classnames'

type NotificationProps = {

} &Partial<typeof defaultProps>

const defaultProps = {

}

class Notification extends Component<NotificationProps> {
  render(){
    return(<div></div>)
  }
}

export default Notification