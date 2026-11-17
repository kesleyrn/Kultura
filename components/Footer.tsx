import Image from "next/image";
import { IMG, INFO } from "@/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <Image src={IMG.logo} alt="Kultura" width={160} height={56} style={{ height: 56, width: "auto" }} />
        <p>{INFO.address}<br />{INFO.phone}</p>
        <p>Open daily, 12 pm to 12 am</p>
        <a href={INFO.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Kultura Flavours of Asia, Kigali.</p>
    </footer>
  );
}
