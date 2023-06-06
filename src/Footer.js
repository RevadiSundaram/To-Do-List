import React from "react";

function Footer({ length }) {
  const year = new Date();
  return (
    <footer>
      Copyright &copy; {year.getFullYear()} {length} List{" "}
      {length === 1 ? "item" : "items"}
    </footer>
  );
}

export default Footer;
