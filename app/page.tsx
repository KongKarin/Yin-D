import About from "./(components)/about";
import Footer from "./(components)/footer";
import Hero from "./(components)/hero";
import NavigationBar from "./(components)/navigation-bar";
import WritingCard from "./(components)/writingCard";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto" id="yin_d">
      <NavigationBar />
      <main className="min-h-[1500px]">
        <Hero />
        <div id="write">
          <WritingCard />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}
