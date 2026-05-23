export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-8">About</h2>
        <div className="max-w-2xl space-y-4">
          <p className="text-neutral-600 leading-relaxed">
            I&apos;m a backend and AI engineer with experience building distributed systems, data
            pipelines, and LLM-powered tooling for production environments. I care about
            reliability, observability, and keeping systems simple under the hood.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            My recent focus has been on applied AI — specifically retrieval-augmented generation,
            structured output pipelines, and integrating language models into backend workflows.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Before that, I spent time on distributed data infrastructure: high-throughput ingestion,
            event-driven architectures, and API platform work. Placeholder content — real details
            coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
