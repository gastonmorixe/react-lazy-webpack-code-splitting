import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <pre>{Date.now()}</pre>
      <aside id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Root</Link>
            </li>
            <li>
              <Link to={`page-1`}>Page 1</Link>
            </li>
            <li>
              <Link to={`page-2`}>Page 2</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section id="content">
        <Outlet />
      </section>
    </>
  );
};
