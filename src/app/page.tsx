import Contact from "./components/contact";
import Difference from "./components/difference";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Purpose from "./components/purpose";
import Values from "./components/values";
import WhyWork from "./components/whyWork";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Intro />
          <WhyWork />
          <Purpose />
          <Values />
          <Difference />
          <Contact />
        </main>
      </div>
    </>
  );
}
