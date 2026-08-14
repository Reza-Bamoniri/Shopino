import { TbBooks, TbHome, TbInfoCircle, TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <header className=" bg-white border-b border-slate-200  w-full! h-22">
          <nav className="flex-between **:flex-ic **:gap-1 :gap-3! container h-full">
            <div className="text-slate-800 font-medium! gap-4!">
              <Link to="/">
                <TbHome />
                 Home
              </Link>
              <div className="w-px h-4 bg-black/10" />
              <Link to="/articles">
                <TbBooks />
                <span>Articles</span>
              </Link>
              <div className="w-px h-4 bg-black/10" />
              <Link to="/about-us">
                <TbInfoCircle />
                <span>َAbout US</span>
              </Link>
              <div className="w-px h-4 bg-black/10" />
              <Link to="/contact-us">
                <TbPhoneCall />
                <span>Contact US</span>
              </Link>
            </div>
            <Buttons />
          </nav>
        </header>
  )
}

export default Header