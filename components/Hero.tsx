"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMG } from "@/data";
import Img from "./Img";

// The single orchestrated moment: letters of the name rise one by one, then the rest settles in.
const word = "Kultura".split("");

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y, scale }}>
        <Img src={IMG.hero} alt="Dining at Kultura, Kigali" sizes="100vw" priority />
      </motion.div>
      <div className="hero__shade" />
      <motion.div className="hero__content" style={{ opacity: fade }}>
        <motion.p className="hero__kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}>
          Fine dining in Kibagabaga, Kigali
        </motion.p>
        <h1 className="hero__title" aria-label="Kultura">
          {word.map((ch, i) => (
            <span className="hero__mask" key={i} aria-hidden>
              <motion.span
                initial={{ y: "110%", rotate: 6 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ delay: 0.15 + i * 0.09, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p className="hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }}>
          The next chapter of your Rwandan fine dining experience. Rich Asian dishes, exceptional wines and signature cocktails.
        </motion.p>
        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: 1 }}>
          <a className="btn" href="#visit">Reserve a table</a>
          <a className="btn btn--ghost" href="#menu">See the menu</a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#story"
        className="hero__scroll"
        aria-label="Scroll to story"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span />
      </motion.a>
    </section>
  );
}
