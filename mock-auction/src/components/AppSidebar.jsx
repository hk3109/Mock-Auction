import { NavLink } from "react-router-dom";

const apps = [
  { label: "Home-1", to: "/ipl/home1" },
  { label: "Home-2", to: "/ipl/home2" },
  { label: "Home-3", to: "/ipl/home3" },
];

const AppSidebar = () => {
  return (
    <aside className="app-sidebar">
      <div className="brand">IPL Mock Auction</div>
      <p className="sidebar-title">Apps</p>
      <nav className="app-nav" aria-label="App Sidebar">
        {apps.map((app) => (
          <NavLink
            key={app.to}
            to={app.to}
            className={({ isActive }) =>
              `app-nav-item${isActive ? " app-nav-item-active" : ""}`
            }
          >
            {app.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;
