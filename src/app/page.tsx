import Contact from "./components/contact";
import Difference from "./components/difference";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Purpose from "./components/purpose";
import Values from "./components/values";
import WhyWork from "./components/whyWork";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Intro />
        <WhyWork />
        <Purpose />
        <Values />
        <Difference />
        <Contact />
      </main>
    </div>
  );
}
