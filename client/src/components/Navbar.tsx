import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavItem = ({ title, classProps }: any) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav className="full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-intial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-intial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavItem title={item} key={item + index} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2346bd]">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
