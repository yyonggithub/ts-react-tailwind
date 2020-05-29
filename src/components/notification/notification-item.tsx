import React, { Component, Fragment } from "react";
import classnames from "classnames";
import Button from "../button";

type NotificationItemProps = {} & Partial<typeof defaultProps>;

const defaultProps = {};

class NotificationItem extends Component<NotificationItemProps, {}> {
  static defaultProps = defaultProps;

  render() {
    const {} = this.props;
    const {} = this;
    return (
      <Fragment>
        <div className="Notifications__item flex items-center relative overflow-hidden mb-4 Notifications__item--dismiss-in bg-primary text-white py-2 pl-4 pr-2 rounded text-base">
          <div className="Icon pointer-events-none flex-shrink-0 mr-2">
            <svg className="fill-current" width="24" height="24">
              {/* <use xlink:href="#glyph-notification--info-24"></use> */}
            </svg>
          </div>
          <div role="alert" className="flex-grow break-word">
            Notification message: Auto Clear
          </div>
          <Button icon="" />
          <button
            id="ember2730"
            className="ember-view Button group min-w-0 translate-z-0 cursor-pointer flex-shrink-0 focus:outline-none h-8 w-8 inline-flex justify-center items-center leading-5 relative rounded-md text-light text-sm font-medium transition ease-in-out duration-200 flex-shrink-0 ml-2"
            role="button"
            type="button"
          >
            <div className="Icon pointer-events-none flex-shrink-0 Button__icon">
              <svg className="fill-current" width="16" height="16">
                {/* <use xlink:href="#outline-remove-16"></use> */}
              </svg>
            </div>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default NotificationItem;
