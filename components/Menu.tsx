"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MENU } from "@/data";
import { Fade, SplitText } from "./Reveal";
import Img from "./Img";

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active)!;
  return (
    <section id="menu" className="section menu">
      <div className="wrap">
        <h2 className="h2 h2--light"><SplitText text="From the kitchen and the bar" /></h2>
        <Fade className="tabs">
          <div role="tablist" aria-label="Menu categories">
            {MENU.map((c) => (
              <button key={c.id} role="tab" aria-selected={active === c.id} className={`tab ${active === c.id ? "is-active" : ""}`} onClick={() => setActive(c.id)}>
                {c.label}
                {active === c.id && <motion.span layoutId="tab-underline" className="tab__line" />}
              </button>
            ))}
          </div>
        </Fade>

        <div className="menu__grid">
          <AnimatePresence mode="wait">
            <motion.ul
              key={cat.id}
              className="menu__list"
              initial="hidden"
              animate="show"
              exit="out"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } }, out: { opacity: 0, transition: { duration: 0.2 } } }}
            >
              {cat.dishes.map((d) => (
                <motion.li
                  key={d.name}
                  className="menu__item"
                  variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>

          <div className="menu__photo">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={cat.id}
                className="menu__photo-inner"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Img src={cat.img} alt={cat.alt} sizes="(max-width: 900px) 92vw, 45vw" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <p className="menu__note">Dishes shown are a sample. Ask your server for today&apos;s full menu and wine list.</p>
      </div>
    </section>
  );
}
