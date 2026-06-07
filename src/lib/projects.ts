export interface Project {
  title: string;
  description: string;
  stack: string[];
  outcome: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Medical Code Automation with Fine-Tuned LLMs",
    description:
      "A high-throughput data ingestion pipeline processing real-time event streams at scale.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],

    outcome: [
      "Fine-tuned an OpenAI foundational model and deployed it into a live enterprise environment to fully automate healthcare classification workflows",
      "Scaled automation to 350,000+ applicants, eliminating 87,500+ hours of manual labor previously required for assessment and processing",
      "Enabled company entry into the medical services market — the system now represents 30% of total company revenue",
      "Reduced classification turnaround from manual review cycles to real-time automated output across the full applicant pipeline"
      ],
    image: "/medical_code_ai_pipeline.svg",
  },
  {
    title: "Project Beta",
    description:
      "Distributed message processing system for coordinating cross-service workflows.",
    stack: ["Go", "Kafka", "gRPC", "Kubernetes"],
    outcome: [
      "Processed Xm+ events per day with 99.9% uptime.",
      "Reduced end-to-end workflow latency by X% via batched gRPC fanout.",
      "Auto-scaled on Kubernetes to handle 10x traffic spikes with zero downtime.",
    ],
    image: "/arch-beta.svg",
  },
  {
    title: "Project Gamma",
    description:
      "RAG-based AI assistant that surfaces internal knowledge for engineering teams.",
    stack: ["Python", "LLM APIs", "Vector DB", "LangChain"],
    outcome: [
      "Improved knowledge retrieval accuracy by X% vs. keyword search.",
      "Indexed Xk+ internal documents with sub-second query latency.",
      "Reduced time engineers spent searching docs by an estimated X hrs/week.",
      "Built evaluation harness tracking precision, recall, and hallucination rate.",
    ],
    image: "/arch-gamma.svg",
  },
];
