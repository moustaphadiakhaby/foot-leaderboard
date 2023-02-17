import "./Header.css";
import logo from "../..//assets/images/logo.svg";
import scheduleImg from "../..//assets/images/schedule.png";
import leaderboardImg from "../..//assets/images/leaderboard.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-content">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo of league web" />
        </div>
        <nav className="nav-menu">
          <Link to="/schedule" className="nav-element">
            <img className="nav-img" src={scheduleImg} alt="a calendar" />
            <span>Schedule</span>
          </Link>
          <Link to="/leaderboard" className="nav-element">
            <img className="nav-img" src={leaderboardImg} alt="a cup" />
            <span>Leaderboard</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
