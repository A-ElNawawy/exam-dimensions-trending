import React from "react";
import { NavLink } from "react-router-dom";

//import Header from "./../Header/Header";
import Container from "./../Container/Container";

import styles from "./Layout.module.css";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Container>
      {/*<Header />*/}
      <div className={styles.layout}>
        <nav className={styles.nav}>
          <div className={styles.links}>
            <NavLink
              to='/repos'
              activeClassName='active'
              className={styles.repos}
            >
              Repositories
            </NavLink>

            <NavLink
              to='/developers'
              activeClassName='active'
              className={styles.devs}
            >
              Developers
            </NavLink>

            {/*<a href='#void' className={`${styles.active} ${styles.repos}`}>
              Repositories
            </a>*/}

            {/*<a href='#void' className={styles.devs}>
              Developers
            </a>*/}
          </div>

          <div className={styles.filters}>
            <label>
              Spoken Languages:
              <select name='spokenLangs'>
                <option value='any'>Any</option>
              </select>
            </label>
            <label>
              Languages:
              <select name='langs'>
                <option value='any'>Any</option>
              </select>
            </label>
            <label>
              Date Range:
              <select name='dateRange'>
                <option value='today'>Today</option>
              </select>
            </label>
          </div>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </Container>
  );
};

export default Layout;
