export interface Project {
  title: string;
  description: string;
  stack: string[];
  role: string;
  outcome: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A high-throughput data ingestion pipeline processing real-time event streams at scale.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    role: "Backend Lead",
    outcome: "Reduced end-to-end latency by X% under peak load.",
    image: "/arch-alpha.svg",
  },
  {
    title: "Project Beta",
    description:
      "Distributed message processing system for coordinating cross-service workflows.",
    stack: ["Go", "Kafka", "gRPC", "Kubernetes"],
    role: "Systems Engineer",
    outcome: "Processed Xm+ events per day with 99.9% uptime.",
    image: "/arch-beta.svg",
  },
  {
    title: "Project Gamma",
    description:
      "RAG-based AI assistant that surfaces internal knowledge for engineering teams.",
    stack: ["Python", "LLM APIs", "Vector DB", "LangChain"],
    role: "AI Engineer",
    outcome: "Improved knowledge retrieval accuracy by X% vs. keyword search.",
    image: "/arch-gamma.svg",
  },
];
