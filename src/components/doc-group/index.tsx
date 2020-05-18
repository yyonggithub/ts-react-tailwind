import * as React from "react";
import classnames from 'classnames'
import { ClassType } from "../../interface";

type Props = {
  className?: ClassType
  name: string;
  children: React.ReactNode;
}

const DocGroup: React.SFC<Props> = ({ name, children, className }) => {
  return (
    <div className="docs-rounded docs-border docs-border-grey-lighter docs-my-8">
      <p>{name}</p>
      <div className={classnames("docs-p-4 flex items-center space-x-4", className)}>
        {children}
      </div>
    </div>
  )
}

export default DocGroup;