import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <p>
        <strong>
          &copy; {new Date().getFullYear()} Devansh-Portfolio.com | All Rights
          Reserved
        </strong>
      </p>
    </footer>
  );
}

export default Footer;
