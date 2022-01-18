import React from "react";

import RepoItem from "./../../components/RepoItem/RepoItem";

//import styles from "./Repos.module.css";

const Repos = ({ Repos }) => {
  //console.log(Repos);
  const ReposList = Repos.map((repo) => {
    //console.log(repo.username);
    return (
      <RepoItem
        key={repo.username + repo.repositoryName}
        //username={repo.username}
        //repositoryName={repo.repositoryName}
        repo={repo}
      />
    );
  });
  return <ul>{ReposList}</ul>;
};

export default Repos;
