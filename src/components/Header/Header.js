import { memo } from "react";
import { Route } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>trending</h1>

      <Route path='/developers'>
        <p>these are the developers building the hot tools today&#46;</p>
      </Route>

      <Route path='/repos'>
        <p>
          see what the&nbsp;
          <span>git</span>
          <span>hub</span>
          &nbsp;community is most excited about today&#46;
        </p>
      </Route>

      <hr />
    </header>
  );
};

export default memo(Header);
