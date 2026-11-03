import { getDictionary } from "../dictionaries/get-dictionary";
import Introduction from "@/src/app/(sections)/Introduction";
import Projects from "@/src/app/(sections)/Projects";
import DesignPhilosophy from "@/src/app/(sections)/DesignPhilosophy";
import Navbar from "@/src/app/components/layout/Navbar";
import { lenisSmoothScroll } from "@/src/lib/animations";
import GridBackground from "@/src/app/components/ui/GridBackground";
import Home from "@/src/app/(sections)/Home";
import Contact from "@/src/app/(sections)/Contact";
import Footer from "@/src/app/components/layout/Footer";

export default async function Main({ params }: { params: Promise<{ lang: "pl" | "en" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="select-none overflow-x-hidden">
      <Navbar dict={dict.navbar} />
      <GridBackground />
      <Home head={dict.home.topText} middle={dict.home.middleTsxt} bottom={dict.home.bottomText} />
      <DesignPhilosophy quote={dict.designPhilosophy.quote} author={dict.designPhilosophy.author} />
      <Introduction {...dict.introduction} />
      <Projects title={dict.projects.title} description={dict.projects.subtitle} projects={dict.projectCards} index={dict.projects.index} />
      <Contact {...dict.contact} />
      <Footer />
    </main>
  );
}
