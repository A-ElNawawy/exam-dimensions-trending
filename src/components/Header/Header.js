import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>trending</h1>
      <p>
        see what the&nbsp;
        <span>Git</span>
        <span>Hub</span>
        &nbsp;community is most excited about today&#46;
      </p>
      <p>these are the developers building the hot tools today&#46;</p>
      <hr />
    </header>
  );
};

export default Header;
