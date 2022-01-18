import React from "react";

import styles from "./DevItem.module.css";

const DevItem = ({ dev }) => {
  return (
    <li className={styles.dev_item}>
      <div className={styles.index}>1</div>

      <div className={styles.user}>
        <img
          src='https://avatars.githubusercontent.com/u/8456633?s=96&v=4'
          alt='sdfdf'
        />
        <div>
          <a href='#void'>dsfsdf daskk adue</a>
          <p>name</p>
        </div>
      </div>

      <div className={styles.popular}>
        <button>
          <i className={`${styles.fire} ${"fas fa-fire"}`}></i>&nbsp;
          <p>Popular Repo</p>
        </button>
        <button>
          <i className='fas fa-laptop'></i>&nbsp;
          <a href='#void'>Repo Name</a>
          {/*<p>Repo Name</p>*/}
        </button>
        <button>
          <p>afasdfhlkfsdfs</p>
        </button>
      </div>

      <div className={styles.actions}>
        <button>
          <i className={`${styles.heart} ${"far fa-heart"}`}></i>&nbsp;
          <p>Sponsor</p>
        </button>
        <button>
          <p>Follow</p>
        </button>
      </div>
    </li>
  );
};

export default DevItem;
