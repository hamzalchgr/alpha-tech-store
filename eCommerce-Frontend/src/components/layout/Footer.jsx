//import { LEGAL, navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { LEGAL, NAV_LINKS } from "../../constants/links";

const Footer = () => {
  return (
    <footer className="padding-x py-10 bg-surface">
      <div className="flex flex-col gap-7">
        <div className="flex justify-between uppercase font-medium">
          <p>Alpha — Built to Dominate.</p>
          <p>since'2k26</p>
        </div>
        <Link className="uppercase font-black  cursor-pointer text-xl">alpha</Link>
      </div>

      <div className="grid gap-11 grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-6">
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>

          <form className="flex flex-col gap-2" action="">
            <input className="form-input" type="email" placeholder="mark@monarch.com" required />
            <button className="btn-primary" type="submit">
              subscribe
            </button>
          </form>

          <p>
            Delivering the latest tech, built for your everyday life.
          </p>
        </div>

        <div className="hidden lg:block" />

        <div className="grid grid-cols-1 gap-11 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p>LEGAL</p>
            <ul className="flex flex-col gap-2 text-sm">
              {LEGAL.map(({ label, id }) => (
                <li key={id}>
                  <Link className="nav-link py-0.5" to={`/policies/${id}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p>QUICK LINKS</p>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link className="nav-link py-0.5" to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-sm">© 2026 alpha. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;
