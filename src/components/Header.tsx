import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

// Definiamo un'interfaccia per i link: ordine e chiarezza
interface NavItem {
  path: string;
  label: string;
}

const navLinks: NavItem[] = [
  { path: "/", label: "Azienda agricola" },
  { path: "/fattoria", label: "Fattoria didattica" },
  { path: "/agriturismo", label: "Agriturismo" },
  { path: "/bio", label: "Bio e sostenibilità" },
  { path: "/turismo", label: "Turismo e territorio" },
  { path: "/contatti", label: "Dove siamo" },
];

const Header: React.FC = () => {
  return (
    <header 
      className="sticky top-0 z-500 flex h-20 w-full items-center justify-between bg-emerald-900 px-6 lg:px-20"
      aria-label="Main navigation"
    >
      {/* Logo: Usiamo Link per evitare il refresh della pagina */}
      <Link to="/" className="flex h-10 w-16.75 items-center transition-opacity hover:opacity-80">
        <img 
          src={logo} 
          alt="Soulfarm Logo" 
          className="h-full w-full object-contain" 
        />
      </Link>

      <nav>
        <ul className="flex items-center gap-6 lg:gap-10">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `
                  text-[14px] font-bold leading-5.5 transition-colors duration-200
                  ${isActive ? "text-green-300 underline underline-offset-4" : "text-white hover:text-green-300"}
                `}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;