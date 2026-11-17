"use client";
import { GOOGLE_BUSINESS_PHOTOS, IMG, INFO } from "@/data";
import { Fade, SplitText } from "./Reveal";
import Img from "./Img";

const SHOTS = [
  { src: IMG.dining, alt: "The dining room", cls: "g1", sizes: "(max-width: 900px) 100vw, 50vw", pos: "center" },
  { src: IMG.meal, alt: "A dish from the kitchen", cls: "g2", sizes: "(max-width: 900px) 50vw, 25vw", pos: "center" },
  { src: IMG.room, alt: "Kultura interior", cls: "g3", sizes: "(max-width: 900px) 50vw, 25vw", pos: "center" },
  { src: IMG.chef, alt: "Chef Enrico", cls: "g4", sizes: "(max-width: 900px) 50vw, 25vw", pos: "top" },
  { src: IMG.story, alt: "A table at Kultura", cls: "g5", sizes: "(max-width: 900px) 100vw, 50vw", pos: "center" },
  { src: IMG.header, alt: "Kultura atmosphere", cls: "g6", sizes: "(max-width: 900px) 50vw, 25vw", pos: "center" },
  ...GOOGLE_BUSINESS_PHOTOS.map((src, i) => ({
    src,
    alt: `Kultura meal or drink, Google Business photo ${i + 1}`,
    cls: `g-google g-google--${i % 5}`,
    sizes: "(max-width: 900px) 50vw, 25vw",
    pos: "center",
  })),
];

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="wrap">
        <div className="gallery__head">
          <h2 className="h2"><SplitText text="A look inside" /></h2>
          <Fade>
            <a className="btn btn--ghost-dark" href={INFO.instagram} target="_blank" rel="noreferrer">More on Instagram</a>
          </Fade>
        </div>
        <div className="gallery__grid">
          {SHOTS.map((s, i) => (
            <figure
              key={s.alt}
              className={`gallery__item ${s.cls}`}
            >
              <Img
                src={s.src}
                alt={s.alt}
                sizes={i === SHOTS.length - 1 ? "(max-width: 900px) 100vw, 50vw" : s.sizes}
                pos={s.pos}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
