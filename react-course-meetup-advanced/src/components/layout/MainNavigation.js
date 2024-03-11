import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  // anchor tag will send a new request to react server
  // and should not be used for links. Link tag uses anchor tag
  // however react-router-dom has a click event listener to anchor tag and
  // prevents browser default of sending a request and parses the url from
  // request and changes the browser URL bar and loads the component
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            ̦<Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
