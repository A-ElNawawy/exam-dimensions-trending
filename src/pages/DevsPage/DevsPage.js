import React from "react";

import DevItem from "./../../components/DevItem/DevItem";

//import styles from "./Repos.module.css";

const Devs = ({ Devs }) => {
  //console.log(Devs);
  //const DevsList = Devs.map((dev) => {
  //  //console.log(dev.username);
  //  return <DevItem key={""} dev={dev} />;
  //});
  return (
    <ul>
      <DevItem
      //key={""} dev={dev}
      />
      <hr />
    </ul>
  );
};

export default Devs;
