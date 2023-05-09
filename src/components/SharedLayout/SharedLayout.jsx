import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <header>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/tweets" className={css.link}>
            Tweets
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer
        className={css.footer}
        style={{

        }}
      ></footer>
    </div>
  );
};

export default SharedLayout;
