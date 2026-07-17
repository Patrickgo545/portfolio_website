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
      "Fine-tuned an OpenAI foundational model and deployed it into a live enterprise environment to fully automate healthcare classification workflows",
    stack: ["C#", "LLM APIs", "AI - Fine Tuning", "SQL"],

    outcome: [
      "Scaled automation to 350,000+ applicants, eliminating 87,500+ hours of manual labor previously required for assessment and processing",
      "Enabled company entry into the medical services market — the system now represents 30% of total company revenue",
      "Reduced classification turnaround from manual review cycles to real-time automated output across the full applicant pipeline"
      ],
    image: "/project1_ai_pipeline_branching_v2.svg",
  },
  {
    title: "Serverless PII/PHI Redaction Pipeline",
    description:
      "Architected and deployed a serverless AWS pipeline to automatically redact sensitive healthcare data across enterprise systems, maintaining HIPAA/HITRUST compliance at scale.",
    stack: ["AWS", "Cloud Computing", "C#", "Kubernetes"],
    outcome: [
      "Automated detection and redaction of PII/PHI across all customer support workflows using AWS Textract and Comprehend Medical",
      "Eliminated manual review exposure, protecting active HIPAA/HITRUST certifications",
      "Mitigated compliance violation risk of up to $50,000 per incident through real-time automated coverage",
    ],
    image: "/project2_phi_redaction_hub_spoke_v2.svg",
  },
  {
    title: "Foundational Model Evaluation & Benchmarking Pipeline",
    description:
      "Led a 6-month enterprise AI partnership to architect a scalable benchmarking pipeline that systematically evaluated multiple foundational models to drive data-informed model selection.",
    stack: ["Python", "LLM APIs", "Vector DB", "LangChain"],
    outcome: [
      "Architected a multi-model evaluation pipeline scoring 7 foundational models across 20+ operational, accuracy, and quality metrics",
      "Led technical collaboration with an enterprise AI engineering team over a 6-month partnership program",
      "Delivered a 26% improvement in model accuracy — directly informing a production model migration decision",
      "Eliminated critical model hallucinations impacting healthcare classification output",
    ],
    image: "/project3_model_evaluation_parallel_v4.svg",
  },
];
