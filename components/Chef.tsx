"use client";
import { IMG } from "@/data";
import { Fade, SplitText } from "./Reveal";
import Img from "./Img";

const STEPS = [
  { year: "18", text: "Starts as a dishwasher at an Asian restaurant in the Philippines and falls in love with the craft." },
  { year: "2008", text: "Moves to Kenya to widen his culinary expertise." },
  { year: "2010", text: "Relocates to Kigali and spends the next years in the city's kitchens." },
  { year: "Today", text: "Founds Kultura Flavours of Asia with like-minded partners, bringing fused Asian flavours to Kigali." },
];

export default function Chef() {
  return (
    <section id="chef" className="section chef">
      <div className="wrap chef__grid">
        <Fade className="chef__photo">
          <Img src={IMG.chef} alt="Chef Enrico in the Kultura kitchen" sizes="(max-width: 900px) 90vw, 40vw" />
        </Fade>
        <div>
          <h2 className="h2"><SplitText text="In the kitchen with Chef Enrico" /></h2>
          <Fade delay={0.1}>
            <p className="lead">A career that began at the dish pit, now one of the most inventive kitchens in the region.</p>
          </Fade>
          <ol className="timeline">
            {STEPS.map((s, i) => (
              <Fade key={s.year} delay={0.1 * i} className="timeline__item">
                <span className="timeline__year">{s.year}</span>
                <p>{s.text}</p>
              </Fade>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
