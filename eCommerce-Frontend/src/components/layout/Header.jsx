import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NAV_LINKS } from "../../constants/links";

import clsx from 'clsx';

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={clsx(
      "padding-x",
      menuOpen ? "h-full" : "h-fit"
    )}>
      <nav className="nav-bar">
        <div className="flex gap-5 items-center">
          <Link className="font-black tracking-wider uppercase text-sm" to="/">
            alpha
          </Link>

          <ul className={clsx(
            "nav-list",
            menuOpen ? "h-full opacity-100" : "h-fit opacity-0 md:opacity-100"
          )}>
            {NAV_LINKS.map(({ id, label, href }) => (
              <li key={id} className="flex items-center">
                <Link className="nav-link" to={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          <button className="btn">
            <Search size={20} />
          </button>

          <Link to="/cartPage" className="btn">
            <ShoppingBag size={20} />
          </Link>

          <Link to="/accountPage" className="btn">
            <User size={20} />
          </Link>

          <button className="btn md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default Header;
