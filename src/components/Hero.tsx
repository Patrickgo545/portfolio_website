export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-14">
      <div className="max-w-5xl mx-auto px-6">
        <h1
          className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          Patrick Go
        </h1>
        <p
          className="mt-3 text-xl text-neutral-500 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          Backend &amp; AI Engineer
        </p>
        <p
          className="mt-3 text-base text-neutral-400 max-w-md animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Building reliable systems and intelligent pipelines. Open to new opportunities.
        </p>
      </div>
    </section>
  );
}
