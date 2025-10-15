import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">Harshika Bodekar — Portfolio</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Welcome — this page uses your components. If you want more sections
              (hero, projects, contact) wired up, I can safely add them next.
            </p>
            <About />
          </div>
        </section>
      </main>
    </>
  );
}
