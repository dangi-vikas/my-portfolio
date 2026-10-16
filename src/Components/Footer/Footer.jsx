import React from "react";
import { profile } from "../../data/site";
import { ArrowUp, GithubIcon, LinkedinIcon, MailIcon } from "../ui/Icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="container-content flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-medium tracking-tight text-paper">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-2xs uppercase tracking-widest2 text-muted">
            {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors duration-300 hover:border-accent/50 hover:text-paper"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors duration-300 hover:border-accent/50 hover:text-paper"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors duration-300 hover:border-accent/50 hover:text-paper"
          >
            <MailIcon size={18} />
          </a>
        </div>
      </div>

      <div className="container-content flex flex-col-reverse items-start justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center">
        <p className="text-xs text-muted/85">
          © {year} {profile.name}.
        </p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors duration-300 hover:text-paper"
        >
          Back to top
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/50">
            <ArrowUp size={15} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
