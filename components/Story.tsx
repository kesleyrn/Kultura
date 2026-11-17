"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMG } from "@/data";
import { Fade, SplitText } from "./Reveal";
import Img from "./Img";

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  return (
    <section id="story" className="section story" ref={ref}>
      <div className="wrap story__grid">
        <div className="story__text">
          <h2 className="h2"><SplitText text="Kultura means culture, in many languages." /></h2>
          <Fade delay={0.1}>
            <p className="lead">
              The name comes from the founders' wish to share cultures through food, specifically the cuisine of South-East Asia.
            </p>
          </Fade>
          <Fade delay={0.2}>
            <p>
              Sit back, unwind and let our chef build a meal from the best and freshest ingredients. We want Kultura to be the easiest
              way into the food culture of South-East Asia, and for guests travelling to Rwanda, a piece of home: a meaningful meal,
              shared.
            </p>
          </Fade>
          <Fade delay={0.3}>
            <dl className="facts">
              <div><dt>Cuisine</dt><dd>Asian fusion</dd></div>
              <div><dt>Setting</dt><dd>Indoor and outdoor seating</dd></div>
              <div><dt>Bar</dt><dd>Wines and signature cocktails</dd></div>
            </dl>
          </Fade>
        </div>
        <div className="story__media">
          <motion.div className="story__img story__img--a" style={{ y: yA }}>
            <Img src={IMG.dining} alt="Dining at Kultura" sizes="(max-width: 900px) 70vw, 45vw" />
          </motion.div>
          <motion.div className="story__img story__img--b" style={{ y: yB }}>
            <Img src={IMG.meal} alt="A plated dish from Kultura's kitchen" sizes="(max-width: 900px) 50vw, 30vw" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
