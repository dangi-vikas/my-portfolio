import React from "react";
import { contact, profile } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import CurtainSection from "../ui/CurtainSection";
import { ArrowRight, GithubIcon, LinkedinIcon, MailIcon } from "../ui/Icons";

const Contact = () => (
  <CurtainSection
    id="contact"
    labelledBy="contact-heading"
    className="section-anchor section-pad curtain-panel"
  >
    <div className="container-content">
      <div className="card relative overflow-hidden p-8 sm:p-12 lg:p-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(201,168,106,0.20), rgba(201,168,106,0))",
          }}
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow={contact.eyebrow}
              title={contact.heading}
              description={contact.supporting}
            />

            <Reveal delay={0.12} className="mt-9">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.02] px-5 py-3 text-base text-paper transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.05]"
              >
                <MailIcon size={18} className="text-accent-soft" />
                <span className="font-medium">{contact.email}</span>
                <ArrowRight
                  size={16}
                  className="text-muted transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="flex flex-col gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.05]"
            >
              <span className="flex items-center gap-3">
                <GithubIcon size={20} className="text-paper" />
                <span>
                  <span className="block text-sm font-medium text-paper">GitHub</span>
                  <span className="block font-mono text-2xs text-muted">
                    {profile.githubLabel}
                  </span>
                </span>
              </span>
              <ArrowRight
                size={16}
                className="text-muted transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.05]"
            >
              <span className="flex items-center gap-3">
                <LinkedinIcon size={20} className="text-paper" />
                <span>
                  <span className="block text-sm font-medium text-paper">LinkedIn</span>
                  <span className="block font-mono text-2xs text-muted">
                    {profile.linkedinLabel}
                  </span>
                </span>
              </span>
              <ArrowRight
                size={16}
                className="text-muted transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  </CurtainSection>
);

export default Contact;
