import React, { SFC, Fragment } from "react";
import DocGroup from "../../components/doc-group";
import Avatar from "../../components/avatar";
import { AvatarGroupProps } from "../../components/avatar/avatar-group";

const list: AvatarGroupProps = {
  options: [
    {
      ariaLabel: "Name",
      image:
        "https://mir-s3-cdn-cf.behance.net/user/50/ff67d93001299.5d82542e4838a.jpg",
    },
    {
      ariaLabel: "Name",
      image:
        "https://mir-s3-cdn-cf.behance.net/user/50/2120565.53b7b9b087a34.jpg",
    },
    {
      ariaLabel: "Name",
      image:
        "https://mir-s3-cdn-cf.behance.net/user/50/08685926519399.56ae8de425dda.jpg",
    },
    {
      ariaLabel: "Name",
    },
    {
      ariaLabel: "Name",
      image:
        "https://mir-s3-cdn-cf.behance.net/user/50/ff67d93001299.5d82542e4838a.jpg",
    },
    {
      ariaLabel: "Name",
      image:
        "https://mir-s3-cdn-cf.behance.net/user/50/ff67d93001299.5d82542e4838a.jpg",
    },
    {
      ariaLabel: "Name",
      image:
        "https://mir-s3-cdn-cf.behance.net/user/50/ff67d93001299.5d82542e4838a.jpg",
    },
  ],
};

const AvatarModule: SFC = () => {
  return (
    <Fragment>
      <DocGroup name="default">
        <Avatar
          ariaLabel="Name"
          image="https://mir-s3-cdn-cf.behance.net/user/50/4448d1123127927.5a5866dc2a926.jpg"
        />
      </DocGroup>
      <DocGroup name="size">
        <Avatar
          ariaLabel="Name"
          image="https://mir-s3-cdn-cf.behance.net/user/50/ff67d93001299.5d82542e4838a.jpg"
          size="h-6 w-6"
        />
        <Avatar
          ariaLabel="Name"
          image="https://mir-s3-cdn-cf.behance.net/user/50/2120565.53b7b9b087a34.jpg"
          size="h-8 w-8"
        />
        <Avatar
          ariaLabel="Name"
          image="https://mir-s3-cdn-cf.behance.net/user/50/08685926519399.56ae8de425dda.jpg"
          size="h-12 w-12"
        />
      </DocGroup>
      <DocGroup name="letter">
        <Avatar ariaLabel="Wester Cloud" size="h-12 w-12" />
        <Avatar ariaLabel="Alexandra Kalinina" size="h-12 w-12" />
        <Avatar ariaLabel="Vladimir Kornienko" size="h-12 w-12" />
        <Avatar ariaLabel="余欢水" size="h-12 w-12" />
        <Avatar
          ariaLabel="westergmail.com"
          color="bg-primary text-white"
          size="h-8 w-8"
        />
        <Avatar
          ariaLabel="alexandragmail.com"
          color="bg-info text-white"
          size="h-8 w-8"
        />
        <Avatar
          ariaLabel="vladimirgmail.com"
          color="bg-warning"
          size="h-8 w-8"
        />
      </DocGroup>
      <DocGroup name="Radius">
        <Avatar
          ariaLabel="Name"
          image="https://mir-s3-cdn-cf.behance.net/user/50/ff67d93001299.5d82542e4838a.jpg"
          radius="rounded-full"
        />
        <Avatar
          ariaLabel="Name"
          image="https://mir-s3-cdn-cf.behance.net/user/50/2120565.53b7b9b087a34.jpg"
          radius="rounded-none"
        />
        <Avatar
          ariaLabel="Name"
          image="https://mir-s3-cdn-cf.behance.net/user/50/08685926519399.56ae8de425dda.jpg"
          radius="rounded"
        />
      </DocGroup>
      <DocGroup name="avatar-group">
        <Avatar.Group {...list}></Avatar.Group>
      </DocGroup>
    </Fragment>
  );
};

export default AvatarModule;