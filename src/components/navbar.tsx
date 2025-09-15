import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Navbar
export const Navbar = () => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-20 bg-primary",
        isAtBottom ? "mt-0" : "mt-0"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Oleksii&nbsp;<span className="sm:block hidden">| Developer</span>
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white" : "text-secondary",
                "hover:text-white text-[18px] font-medium cursor-pointer"
              )}
              onClick={() => !link.link && setActive(link.title)}
            >
              {link.link ? (
                link.id === "cv" ? (
                  <a 
                    href={link.link} 
                    download="Oleksii_CV.pdf"
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg border-3 border-transparent hover:scale-105 transition-all duration-300 ease-in-out group overflow-hidden cursor-pointer"
                    style={{
                      background: 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 3s ease infinite'
                    }}
                  >
                    <span className="relative z-20 text-white font-semibold pointer-events-none">{link.title}</span>
                    <svg 
                      className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform duration-200 pointer-events-none" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                  </a>
                ) : (
                  <a href={link.link} target="_blank" rel="noreferrer noopener">
                    {link.title}
                  </a>
                )
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
            )}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-white" : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px]"
                  )}
                  onClick={() => {
                    !link.link && setToggle(!toggle);
                    !link.link && setActive(link.title);
                  }}
                >
                  {link.link ? (
                    link.id === "cv" ? (
                      <a
                        href={link.link}
                        download="Oleksii_CV.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-transparent group overflow-hidden cursor-pointer"
                        style={{
                          background: 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 3s ease infinite'
                        }}
                      >
                        <span className="relative z-20 text-white font-semibold text-sm pointer-events-none">{link.title}</span>
                        <svg 
                          className="w-3 h-3 text-white group-hover:translate-y-0.5 transition-transform duration-200 pointer-events-none" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                      </a>
                    ) : (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.title}
                      </a>
                    )
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
