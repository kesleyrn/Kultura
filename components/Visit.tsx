"use client";
import { useState } from "react";
import { INFO } from "@/data";
import { Fade, SplitText } from "./Reveal";

export default function Visit() {
  const [f, setF] = useState({ name: "", phone: "", guests: "2", date: "", time: "19:00", notes: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hello Kultura,\n\nI'd like to reserve a table.\n\nName: ${f.name}\nPhone: ${f.phone}\nGuests: ${f.guests}\nDate: ${f.date}\nTime: ${f.time}\nNotes: ${f.notes || "None"}\n`;
    window.location.href = `mailto:${INFO.email}?subject=${encodeURIComponent("Table reservation request")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="visit" className="section visit">
      <div className="wrap visit__grid">
        <div>
          <h2 className="h2 h2--light"><SplitText text="Reserve your table" /></h2>
          <Fade delay={0.1}>
            <p className="lead lead--light">Reservations are required. Send a request below, call us, or message us on Instagram.</p>
          </Fade>
          <Fade delay={0.2}>
            <ul className="contact">
              <li><span>Address</span><a href={INFO.mapUrl} target="_blank" rel="noreferrer">{INFO.address}</a></li>
              <li><span>Phone</span><a href={INFO.phoneHref}>{INFO.phone}</a></li>
              <li><span>Email</span><a href={`mailto:${INFO.email}`}>{INFO.email}</a></li>
              <li><span>Instagram</span><a href={INFO.reservationsUrl} target="_blank" rel="noreferrer">@kultura_flavours_of_asia</a></li>
            </ul>
            <div className="hours">
              {INFO.hours.map((h) => (
                <p key={h.days}><strong>{h.days}</strong> {h.time}</p>
              ))}
            </div>
          </Fade>
        </div>

        <Fade delay={0.15}>
          <form className="form" onSubmit={submit}>
            <label>Full name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
            <label>Phone<input required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
            <div className="form__row">
              <label>Guests
                <select value={f.guests} onChange={set("guests")}>
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => <option key={n}>{n}</option>)}
                </select>
              </label>
              <label>Date<input required type="date" value={f.date} onChange={set("date")} /></label>
              <label>Time
                <select value={f.time} onChange={set("time")}>
                  {["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>
            <label>Anything we should know?<textarea rows={3} value={f.notes} onChange={set("notes")} /></label>
            <button className="btn" type="submit">Send reservation request</button>
            {sent && <p className="form__ok" role="status">Your email app should open with the request ready to send. You can also call {INFO.phone}.</p>}
          </form>
        </Fade>
      </div>
    </section>
  );
}
