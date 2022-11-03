import { UilGithub } from '@iconscout/react-unicons'
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h4>All rights reserved</h4>
        <a href="https://github.com/jsonfm/platzi-conf-merch" target="_blank">
          <UilGithub />
        </a>
      </div>
    </footer>
  );
};
