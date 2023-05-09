import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import css from "./SharedLayout.module.css";

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
      <Suspense fallback={<h1>Loading...</h1>}>
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
