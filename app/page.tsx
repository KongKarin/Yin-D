import Hero from "./(components)/hero";
import NavigationBar from "./(components)/navigation-bar";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 ">
      <NavigationBar />
      <main className="min-h-[1500px]" id="yin_d">
        <Hero />
      </main>
    </div>
  );
}
