import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navItems, profile } from "../../data/site";
import { useActiveSection, useScrolled } from "../../hooks/useScroll";
import {
  CloseIcon,
  DownloadIcon,
  GithubIcon,
  MenuIcon,
} from "../ui/Icons";

const NAV_IDS = navItems.map((n) => n.id);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(28);
  const active = useActiveSection(NAV_IDS);
  const reduce = useReducedMotion();

  // Lock body scroll + close on Escape while the mobile panel is open.
  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("nav-open");
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div
        className={`transition duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-content flex h-16 items-center justify-between gap-4 sm:h-[72px]"
        >
          {/* Wordmark */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 rounded-full py-2"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.03] font-display text-xs font-medium tracking-tight text-accent-soft transition-colors duration-300 group-hover:border-accent/50 group-hover:text-white">
              {profile.initials}
            </span>
            <span className="hidden font-display text-[15px] font-medium tracking-tight text-paper lg:inline">
              {profile.name}
            </span>
          </a>

          {/* Desktop / tablet links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-flex items-center rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                      isActive ? "text-paper" : "text-muted hover:text-paper"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.05]"
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors duration-300 hover:border-accent/50 hover:text-paper lg:inline-flex"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="hidden items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-paper transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.06] sm:inline-flex"
            >
              <DownloadIcon size={16} />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper transition-colors duration-300 hover:border-accent/50 md:hidden"
            >
              {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-white/[0.07] bg-ink-950/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-content flex flex-col py-4">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="border-b border-white/[0.05] last:border-none">
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className={`flex items-center justify-between py-3.5 font-display text-lg transition-colors duration-300 ${
                        isActive ? "text-paper" : "text-muted"
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-2xs text-accent-soft/80">
                        {String(navItems.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="container-content flex flex-col gap-3 pb-6">
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                <DownloadIcon size={16} />
                Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                onClick={closeMenu}
                className="btn-ghost w-full"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
