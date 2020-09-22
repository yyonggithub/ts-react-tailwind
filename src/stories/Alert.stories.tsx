import React from "react";
import Alert from "../components/alert";
import Layout from "../components/layout";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => {
  return (
    <Layout className="justify-between">
      <Alert
        type="info"
        text="A simple default alert—check it out!"
        className="my-2"
      />
      <Alert
        type="warning"
        text="A simple warning alert—check it out!"
        className="my-2"
      />
      <Alert
        type="secondary"
        text="A simple secondary alert—check it out!"
        className="my-2"
      />
      <Alert
        type="success"
        text="A simple primary alert—check it out!"
        icon="glyph-notification--success-24"
        iconSize="24px"
        className="my-2"
      />
      <Alert
        type="danger"
        text="A simple primary alert—check it out!"
        icon="glyph-notification--warning-24"
        iconSize="24px"
        className="my-2"
      />
    </Layout>
  );
};
