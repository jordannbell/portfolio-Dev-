import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const About = dynamic(() =>
  import("@/components/About").then((m) => ({ default: m.About }))
);
const Skills = dynamic(() =>
  import("@/components/Skills").then((m) => ({ default: m.Skills }))
);
const Projects = dynamic(() =>
  import("@/components/Projects").then((m) => ({ default: m.Projects }))
);
const Education = dynamic(() =>
  import("@/components/Education").then((m) => ({ default: m.Education }))
);
const Contact = dynamic(() =>
  import("@/components/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer }))
);
const QRCode = dynamic(() =>
  import("@/components/QRCode").then((m) => ({ default: m.QRCode }))
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <QRCode />
    </main>
  );
}
