import React, { useState } from "react";
import DocGroup from "../../components/doc-group";
import Input from "../../components/input/input";
import axios from "axios";
import AutoComplete, {
  DataSourceType,
} from "../../components/input/auto-complete";

type LikersType = {
  value: string;
  index: number;
};

const InputModule: React.SFC = (props) => {
  const [value, setValue] = useState("");
  // const likers: LikersType[] = [
  //   { value: "bradley", index: 0 },
  //   { value: "pope", index: 1 },
  //   { value: "caruso", index: 2 },
  //   { value: "cook", index: 3 },
  //   { value: "cousins", index: 4 },
  //   { value: "james", index: 5 },
  //   { value: "AD", index: 6 },
  //   { value: "green", index: 7 },
  //   { value: "howard", index: 8 },
  //   { value: "kuzma", index: 9 },
  //   { value: "McGee", index: 10 },
  //   { value: "rando", index: 11 },
  // ];

  const likers = ["bradley", "cook"];
  const handleFetchSuggestions = async (keyword: string) => {
    // return likers.filter((item) => item.value.includes(keyword));
    // return likers
    //   .filter((name) => name.includes(keyword))
    //   .map((name) => ({ value: name }));
    // return axios
    //   .get(`//api.github.com/search/users?q=${keyword}`)
    //   .then((res) => res.data)
    //   .then((res) => res.items)
    //   .then(({ login, ...rest }) => ({
    //     value: login,
    //     ...rest,
    //   }));
    const result = await axios.get(
      `//api.github.com/search/users?q=${keyword}`
    );
    const list = result.data.items as githubType[];
    return list
      .filter((item) => item.login.includes(keyword))
      .map(({ login, ...rest }) => ({ value: login, ...rest }));
  };
  // const handleSelect = (item: DataSourceType) => {
  //   console.log(item);
  // };
  type githubType = {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    score: number;
  };
  const handleRenderOptions = (item: DataSourceType) => {
    const i = item as DataSourceType<githubType>;
    return (
      <>
        <h2>name: {i.value}</h2>
        <p>id: {i.id}</p>
        {/* <p>id: {i.avatar_url}</p>
        <p>id: {i.url}</p> */}
        <p>id: {i.score}</p>
      </>
    );
  };
  return (
    <React.Fragment>
      <DocGroup name={"default"}>
        <Input
          defaultValue="112233"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </DocGroup>
      <DocGroup name={"auto-complete"}>
        <AutoComplete
          fetchSuggestions={handleFetchSuggestions}
          // onSelect={handleSelect}
          render={handleRenderOptions}
        />
      </DocGroup>
    </React.Fragment>
  );
};

export default InputModule;
