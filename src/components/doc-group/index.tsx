import * as React from "react";
type Props = {
  name: string;
  children: React.ReactNode;
}

const DocGroup: React.SFC<Props> = ({ name, children }) => {
  return (
    <div className="docs-rounded docs-border docs-border-grey-lighter docs-my-8">
      <p>{name}</p>
      <div className="docs-p-4 flex items-center space-x-4">
        {children}
      </div>
    </div>
  )
}

export default DocGroup;