import React, { FC, useState } from "react";
import {
  Route,
  NavLink,
  RouteComponentProps,
} from "react-router-dom";
import DocGroup from "../../components/doc-group";
import Nav from "../../components/nav";
import Button from "../../components/button";

const options = [
  {
    selected: true,
    text: "One",
    route: "page1",
    icon: "image",
  },
  {
    selected: false,
    text: "Two",
    route: "page2",
    icon: "book-bookmark-2",
  },
  {
    selected: false,
    text: "Three",
    route: "page3",
    icon: "palette",
  },
  {
    selected: false,
    text: "Disabled",
    route: "index",
    disabled: true,
    icon: "vibrance",
  },
];

const Page1: FC = () => {
  return <div>Page1</div>;
};
const Page2: FC = () => {
  return <div>Page2</div>;
};
const Page3: FC = () => {
  return <div>Page3</div>;
};

const Page: FC<RouteComponentProps<{ id: string }>> = (props) => {
  const { match } = props;
  console.log(match);
  let component = null;
  switch (match.params.id) {
    case "page1":
      component = <Page1 />;
      break;
    case "page2":
      component = <Page2 />;
      break;
    case "page3":
      component = <Page3 />;
      break;
    default:
      component = null;
  }
  return (
    <div>
      <p>{JSON.stringify(props.match.params)}</p>
      {component}
    </div>
  );
};

interface INavContext {
  id: string;
  handleSetId?: (id: string) => void;
}

const NavModule: FC<{
  match: { url: string; params: { [prop: string]: string } };
}> = (props) => {
  const { match } = props;
  const [selected, setSelect] = useState("");

  // const handleSetId = (id: string) => {
  //   setSelect(id);
  // };
  return (
    <>
      <DocGroup name="default">
        <Nav>
          {options.map((item, index) => {
            return (
              <Button
                key={index}
                disabled={item.disabled}
                selected={item.route === selected ? true : false}
                color={
                  item.route === selected
                    ? "text-white bg-white-opacity-2"
                    : "text-white-opacity-6 hover:bg-white-opacity-1 active:bg-white-opacity-2"
                }
              >
                <NavLink
                  to={`${match.url + "/" + item.route}`}
                  onClick={() => {
                    setSelect(item.route);
                    console.log(item.route);
                  }}
                  style={{
                    pointerEvents: item.disabled ? "none" : "auto",
                  }}
                >
                  {item.text}
                </NavLink>
              </Button>
            );
          })}
        </Nav>
      </DocGroup>
      <div>
        <p>route</p>
        <Route path={`${match.url}/:id`} component={Page} />
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a url.</h3>}
        />
      </div>
      <DocGroup name="default">
        <Nav color="bg-primary">
          {options.map((item, index) => {
            return (
              <Button
                className="p-4"
                key={index}
                disabled={item.disabled}
                selected={item.route === selected ? true : false}
                color={
                  item.route === selected
                    ? "text-white bg-primary-dark"
                    : "text-white-opacity-8 hover:bg-primary-bright"
                }
                focusColor="bg-primary-bright"
                icon={item.icon}
                iconMargin={"mr-2"}
              >
                <NavLink
                  to={`${match.url + "/" + item.route}`}
                  onClick={() => {
                    setSelect(item.route);
                    console.log(item.route);
                  }}
                  style={{
                    pointerEvents: item.disabled ? "none" : "auto",
                  }}
                >
                  {item.text}
                </NavLink>
              </Button>
            );
          })}
        </Nav>
      </DocGroup>
      <div>
        <p>route</p>
        <Route path={`${match.url}/:id`} component={Page} />
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a url.</h3>}
        />
      </div>
    </>
  );
};

NavModule.displayName = "NavModule";

export default NavModule;
