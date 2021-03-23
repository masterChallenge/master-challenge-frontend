import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Logo-Horizontal-BW.svg";

const Navbar = () => {
  return (
    <header className="w-full bg-primary flex justify-between px-24 items-center h-24 shadow-lg">
      <Link to="/">
        <Logo alt="Logo" />
      </Link>
      <nav className="text-white font-bold">
        <ul className="flex">
          <li className="m-6">
            <Link to="/home">Challenges</Link>
          </li>
          <li className="m-6">
            <a
              target="_blank"
              without
              rel="noreferrer"
              href="https://wiki.master-challenge.me/"
            >
              Documentation
            </a>
          </li>
          <li className="m-6">
            <a
              target="_blank"
              without
              rel="noreferrer"
              href="https://airtable.com/shr5cd3oViPHxHpkv"
            >
              Send your feedback
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
