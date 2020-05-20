import React, { SFC, Fragment } from "react";
import DocGroup from "../../components/doc-group";
import Alert from "../../components/alert";
import Button from "../../components/button";

const AlertModule: SFC = () => {
  return (
    <Fragment>
      <DocGroup name="default">
        <Alert type="info" text="A simple default alert—check it out!" />
        <Alert type="warning" text="A simple warning alert—check it out!" />
        <Alert type="secondary" text="A simple secondary alert—check it out!" />
        <Alert
          type="success"
          text="A simple primary alert—check it out!"
          icon="glyph-notification--success-24"
          iconSize="24px"
        />
        <Alert
          type="danger"
          text="A simple primary alert—check it out!"
          icon="glyph-notification--warning-24"
          iconSize="24px"
        />
      </DocGroup>
      <DocGroup name="Additional">
        <Alert
          className="text-white shadow-lg bg-gray-8"
          display="flex-col"
          padding="p-4"
        >
          <h4 className="text-xl font-bold uppercase">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          {/* <Divider className="my-4 opacity-50" /> */}
          <div className="flex items-center">
            <p className="flex-grow text-sm">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
            <Button
              className="font-bold uppercase"
              text="Confirm"
              preset="danger"
            />
          </div>
        </Alert>
      </DocGroup>
    </Fragment>
  );
};

export default AlertModule;
