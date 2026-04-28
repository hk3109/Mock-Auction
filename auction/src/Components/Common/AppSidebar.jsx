import { NavLink } from "react-router-dom";

const links = [
  { to: "/ipl/home1", label: "Home1" },
  { to: "/ipl/home2", label: "Home2" },
  { to: "/ipl/home3", label: "Home3" },
];

const AppSidebar = () => {
  return (
    <aside className="w-56 min-h-screen bg-slate-900 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">App Menu</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `rounded px-3 py-2 ${
                isActive ? "bg-slate-700" : "hover:bg-slate-800"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;
