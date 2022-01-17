import React from "react";

import styles from "./RepoItem.module.css";
const RepoItem = ({ username, repositoryName }) => {
  console.log(username);
  return (
    <li className={styles.repo_item}>
      <div className={styles.top}>
        <div className='main_data'>
          <i className='fas fa-laptop'></i>
          <a href='#void'> {username} / </a>
          <a href='#void'>{repositoryName}</a>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            sapiente reiciendis quod recusandae eum veritatis distinctio,
            adipisci inventore culpa eos odio veniam mollitia quibusdam suscipit
            ab earum dolorum placeat magni!
          </p>
        </div>
        <div className={styles.actions}>
          <button>
            <i className={`${styles.heart} ${"far fa-heart"}`}></i>&nbsp;
            Sponsor
          </button>
          <button>
            <i className='far fa-star'></i>&nbsp; Star
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.statistics}>
          <span>Python</span>
          <span>
            <i className='far fa-star'></i>
            &nbsp;2,345
          </span>
          <span>
            <i className='fas fa-code-branch'></i>&nbsp; 344
          </span>
          <span className={styles.built_by}>built by&nbsp;</span>
          <img
            src='https://avatars.githubusercontent.com/u/4923655?s=40&v=4'
            alt='username'
          />
          <img
            src='https://avatars.githubusercontent.com/u/4923655?s=40&v=4'
            alt='username'
          />
          <img
            src='https://avatars.githubusercontent.com/u/4923655?s=40&v=4'
            alt='username'
          />
        </div>
        <div className={styles.today}>
          <i className='far fa-star'></i>
          &nbsp; 222 stars today
        </div>
      </div>
      <hr />
    </li>
  );
};

export default RepoItem;
