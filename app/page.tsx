import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Chef from "@/components/Chef";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import Progress from "@/components/Progress";

export default function Page() {
  return (
    <>
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Menu />
        <Chef />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
