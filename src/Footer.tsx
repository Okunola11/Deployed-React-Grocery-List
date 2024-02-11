import React, { ReactElement } from "react";

type PropsType = {
  length: number;
};

function Footer({ length }: PropsType): ReactElement {
  return (
    <footer>
      <p>
        {length} List {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
}

export default Footer;
