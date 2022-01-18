import React from "react";

import DevItem from "./../../components/DevItem/DevItem";

//import styles from "./Repos.module.css";

const Devs = ({ Devs }) => {
  //console.log(Devs);
  const DevsList = Devs.map((dev, index, Devs) => {
    //console.log(dev);
    return (
      <div key={dev.username}>
        <DevItem dev={dev} />
        {index !== Devs.length - 1 ? <hr /> : null}
      </div>
    );
  });
  return <ul>{DevsList}</ul>;
};

export default Devs;
