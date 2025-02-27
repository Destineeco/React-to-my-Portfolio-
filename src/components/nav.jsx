import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const pages = [
  { name: "AboutMe", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" }
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-left">
        {pages
          .filter((page) => location.pathname === page.path)
          .map((page) => (
            <Link key={page.name} to={page.path} className="active">
              {page.name}
            </Link>
          ))}
      </div>
      <div className="nav-right">
        {pages
          .filter((page) => location.pathname !== page.path)
          .map((page) => (
            <Link key={page.name} to={page.path}>
              {page.name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Navigation;
