import React from "react";

import RepoItem from "./../../components/RepoItem/RepoItem";

//import styles from "./Repos.module.css";

const Repos = ({ Repos }) => {
  //console.log(Repos);
  const ReposList = Repos.map((repo) => {
    //console.log(repo.username);
    return (
      <RepoItem
        key={repo.username}
        username={repo.username}
        repositoryName={repo.repositoryName}
      />
    );
  });
  return (
    <ul>
      <RepoItem />
      <RepoItem />
      <RepoItem />
      {ReposList}
    </ul>
  );
};

export default Repos;
