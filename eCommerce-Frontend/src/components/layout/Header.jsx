import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NAV_LINKS } from "../../constants/links";

import clsx from "clsx";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={clsx("padding-x",
        menuOpen && " fixed top-0 w-full z-50 h-full"
      )}>
        <nav className="nav-bar">
          <div className="flex gap-5 items-center">
            <Link
              className="font-black tracking-wider uppercase text-sm"
              to="/"
            >
              alpha
            </Link>

            <div id="nav-wrapper" 
              aria-hidden={!menuOpen} className={clsx(
                "nav-list-wrapper",
                menuOpen
                  ? "opacity-100"
                  : "opacity-0 md:opacity-100",
              )}>
            <ul
              className="nav-list"
              aria-label="navigation links"
            >
              {NAV_LINKS.map(({ id, label, href }) => (
                <li key={id} className="flex items-center">
                  <Link className="nav-link" to={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            </div>

          </div>

          <div className="flex">
            <button className="icon-btn">
              <Search size={20} />
            </button>

            <Link to="/cartPage" className="icon-btn">
              <ShoppingBag size={20} />
            </Link>

            <Link to="/accountPage" className="icon-btn">
              <User size={20} />
            </Link>

            <button
              className="icon-btn md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-controls="nav-wrapper"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
