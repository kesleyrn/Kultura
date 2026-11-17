"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMG, INFO } from "@/data";

const LINKS = [
  ["Story", "#story"],
  ["Menu", "#menu"],
  ["Chef", "#chef"],
  ["Gallery", "#gallery"],
  ["Visit", "#visit"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      className={`nav ${solid ? "nav--solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#top" className="nav__brand" aria-label="Kultura home">
        <Image src={IMG.logo} alt="Kultura logo" width={160} height={46} priority style={{ height: 46, width: "auto" }} />
      </a>
      <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
        {LINKS.map(([l, h]) => (
          <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a className="btn btn--small" href="#visit" onClick={() => setOpen(false)}>Reserve a table</a>
      </nav>
      <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <a className="sr-only" href={INFO.phoneHref}>Call {INFO.phone}</a>
    </motion.header>
  );
}
