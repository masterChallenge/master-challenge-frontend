import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo-Horizontal-BW.svg";

const Navbar = () => {
  return (
    <header className="w-full bg-primary flex justify-around items-center h-24">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav className="text-white font-bold">
        <ul className="flex">
          <li className="m-6">
            <Link to="/home">Challenges</Link>
          </li>
          <li className="m-6">
            <Link to="https://github.com/masterChallenge">Project Repo</Link>
          </li>
          <li className="m-6">
            <Link to="/">Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
