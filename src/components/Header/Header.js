import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>trending</h1>
      <Routes>
        <Route
          path='/developers'
          element={
            <p>these are the developers building the hot tools today&#46;</p>
          }
        />

        <Route
          path='/repos'
          element={
            <p>
              see what the&nbsp;
              <span>Git</span>
              <span>Hub</span>
              &nbsp;community is most excited about today&#46;
            </p>
          }
        />
      </Routes>

      {/*<p>
        see what the&nbsp;
        <span>Git</span>
        <span>Hub</span>
        &nbsp;community is most excited about today&#46;
      </p>
      <p>these are the developers building the hot tools today&#46;</p>*/}
      <hr />
    </header>
  );
};

export default Header;
