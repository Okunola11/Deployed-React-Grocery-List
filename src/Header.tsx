import React, { ReactElement } from "react";

type PropsType = {
  title: string;
};

const Header = ({ title }: PropsType): ReactElement => {
  /* const headerStyle = {
    backgroundColor: "mediumblue",
    color: "#fff",
  }; */

  return (
    <header /* style={headerStyle} */>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
