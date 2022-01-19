import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>trending</h1>

      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/developers"}
          element={
            <p>these are the developers building the hot tools today&#46;</p>
          }
        />

        <Route
          path={process.env.PUBLIC_URL + "/repos"}
          element={
            <p>
              see what the&nbsp;
              <span>git</span>
              <span>hub</span>
              &nbsp;community is most excited about today&#46;
            </p>
          }
        />
      </Routes>

      <hr />
    </header>
  );
};

export default memo(Header);
