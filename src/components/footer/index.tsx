import { FaLinkedin } from "react-icons/fa";

import classes from "./style.module.scss";

export default function Footer() {
  return (
    <div className={classes.root}>
      <span className={classes.spanElement}>
        <p>Developed with React by Max Wilson Pereira</p>
      </span>
      <span className={classes.spanElement}>
        <a
          href="https://www.linkedin.com/in/maxwilsonpereira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.favicon}>
            <FaLinkedin size={35} />
          </div>
        </a>
      </span>
    </div>
  );
}
