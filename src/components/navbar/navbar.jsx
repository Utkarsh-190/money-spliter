import classes from './navbar.module.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={classes.navbarContainer}>
        <Link to = "/friends"
            style={{textDecoration : "none"}}>
            Friends
        </Link>

        <Link to = "/groups"
            style={{textDecoration : "none"}}>
            Groups
        </Link>
    </div>
  );
}

export default Navbar;
