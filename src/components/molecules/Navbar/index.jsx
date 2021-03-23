import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Logo-Horizontal-BW.svg";

const Navbar = () => {
  return (
    <header className="w-full bg-primary flex justify-around items-center h-24">
      <Link to="/">
        <Logo alt="Logo" />
      </Link>
      <nav className="text-white font-bold">
        <ul className="flex">
          <li className="m-6">
            <Link to="/home">Challenges</Link>
          </li>
          <li className="m-6">
            <Link to="https://wiki.master-challenge.me/">Documentation</Link>
          </li>
          <li className="m-6">
            <Link to="https://airtable.com/shr5cd3oViPHxHpkv">
              Send your feedback
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
