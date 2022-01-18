import React from "react";

import styles from "./RepoItem.module.css";

const RepoItem = ({ repo }) => {
  const builders = repo.builtBy.map((builder) => (
    <img key={builder.username} src={builder.avatar} alt={builder.username} />
  ));

  return (
    <li className={styles.repo_item}>
      <div className={styles.top}>
        <div className='main_data'>
          <i className='fas fa-laptop'></i>
          &nbsp;
          <a href={repo.url} target='_blank' rel='noreferrer'>
            {repo.username} / {repo.repositoryName}
          </a>
          <p className='description'>{repo.description}</p>
        </div>

        <div className={styles.actions}>
          <button>
            <i className={`${styles.heart} ${"far fa-heart"}`}></i>&nbsp;
            <p>Sponsor</p>
          </button>

          <button>
            <i className='far fa-star'></i>&nbsp;
            <p>Star</p>
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.statistics}>
          <span>{repo.language}</span>

          <span>
            <i className='far fa-star'></i>
            &nbsp;{repo.totalStars}
          </span>

          <span>
            <i className='fas fa-code-branch'></i>&nbsp; {repo.forks}
          </span>

          <span className={styles.built_by}>built by&nbsp;</span>

          {builders}
        </div>

        <div className={styles.today}>
          <i className='far fa-star'></i>
          &nbsp; {repo.starsSince} stars today
        </div>
      </div>
    </li>
  );
};

export default RepoItem;
