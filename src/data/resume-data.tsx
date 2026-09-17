import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Elvis Segbawu",
  initials: "ES",
  location: "Accra, Ghana, GMT",
  locationLink: "https://www.google.com/maps/place/Accra",
  about:
    "Platform & Developer Experience Engineer designing systems and building the infrastructure teams ship on",
  summary:
    "Seven years in technology: four as a backend engineer in Python and Java, then platform engineering. I design system architecture and build the infrastructure that runs it. I own internal developer platforms end to end, from self-service tooling, APIs, and automated workflows to application templates and engineering guardrails, so engineering teams can ship quickly, reliably, and with confidence.",
  avatarUrl: "/avatar.jpeg",
  personalWebsiteUrl: "https://github.com/eliblurr",
  contact: {
    email: "elvissegbawu@gmail.com",
    tel: "+233532585150",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/eliblurr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/elvis-segbawu-b88b0a166/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Ghana",
      degree: "BSc. Computer Engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Brevan Howard",
      link: "https://www.brevanhoward.com",
      badges: ["Contract", "Remote", "via Turntabl"],
      title: "Platform Engineer | Developer Experience",
      start: "2023",
      end: "Present",
      description:
        "Build and own the internal developer platform for the front office: golden-path container images, self-service APIs, reusable CI/CD, Helm and GitOps delivery, and repository blueprints. Led a zero-downtime GitLab-to-GitHub migration of ~300 repositories. Run Kafka (MSK), NATS JetStream, and Prefect on EKS. Technologies: AWS, Kubernetes, Terraform, ArgoCD, GitHub Actions, Python",
    },
    {
      company: "Turntabl",
      link: "https://turntabl.io",
      badges: ["Hybrid"],
      title: "Software Engineer → Platform Engineer (Consulting)",
      start: "2022",
      end: "Present",
      description:
        "Designed a low-latency Java/Spring Boot trade engine (Best System Design Award, 2022) and led an NLP-based legal contract assistant. Advise clients on platform architecture and CI/CD. Best Client Delivery Award, 2025. Technologies: Java, Spring Boot, Python, Kubernetes",
    },
    {
      company: "GI-KACE",
      link: "https://gi-kace.gov.gh",
      badges: ["On-site"],
      title: "Software Engineer & Research Associate",
      start: "2019",
      end: "2022",
      description:
        "Led a team of four building a multi-tenant asset management backend for 12+ enterprise clients. Built the real-time polling backend for Ghana's 2020 election coverage and a backend for the UNDP. Standardised CI and code review practices org-wide. Technologies: Python, FastAPI, PostgreSQL, Redis, Docker",
    },
  ],
  skills: [
    "Python/FastAPI/Django/Flask",
    "Go",
    "Java/Spring Boot",
    "TypeScript/Next.js",
    "AWS",
    "Kubernetes/Helm",
    "Terraform",
    "Ansible",
    "ArgoCD/FluxCD/GitOps",
    "GitHub Actions",
    "Docker",
    "Bazel",
    "Kafka (AWS MSK)",
    "NATS JetStream",
    "PostgreSQL",
    "Prometheus/Grafana/Datadog",
    "OpenTelemetry",
    "Cloudflare Zero Trust",
    "SOPS/Supply-chain Security",
  ],
  projectSuites: {
    northstar: {
      title: "Northstar",
      subtitle: "Multi-site infrastructure provisioning & reliability platform",
      description:
        "A suite of five repositories that take a Linux site from bare metal to monitored production on a Cloudflare Mesh network.",
      link: {
        label: "github.com/prometejs",
        href: "https://github.com/prometejs",
      },
    },
  },
  projects: [
    {
      title: "cf-mesh-site-monitor",
      suite: "northstar",
      techStack: [
        "Prometejs",
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Cloudflare Access",
      ],
      description:
        "Northstar NOC dashboard for the mesh fleet: fleet health, per-site telemetry, CIDR topology, and orphan-tunnel detection, gated by Cloudflare Access with edge JWT verification",
      link: {
        label: "northstar.prometejs.network",
        href: "https://northstar.prometejs.network",
      },
    },
    {
      title: "cf-mesh-terraform-infra",
      suite: "northstar",
      techStack: [
        "Prometejs",
        "Terraform",
        "Cloudflare Zero Trust",
        "GitHub Actions",
        "AWS S3",
      ],
      description:
        "Terraform-managed Cloudflare Mesh site-to-site network: tunnels, routes, Gateway policies, and DNS, with PR-time plans, gated applies, and state-sourced Ansible inventory",
      link: {
        label: "github.com",
        href: "https://github.com/prometejs/cf-mesh-terraform-infra",
      },
    },
    {
      title: "cf-mesh-cloud-init",
      suite: "northstar",
      techStack: ["Prometejs", "cloud-init", "PXE/iPXE", "Bash", "Linux"],
      description:
        "NoCloud cloud-init first-boot provisioning for bare-metal and VM mesh nodes, delivered via PXE/iPXE, CIDATA ISO, or local seed, driven by the site list in Terraform state",
      link: {
        label: "github.com",
        href: "https://github.com/prometejs/cf-mesh-cloud-init",
      },
    },
    {
      title: "cf-mesh-site-config",
      suite: "northstar",
      techStack: ["Prometejs", "Ansible", "Terraform", "GitHub Actions"],
      description:
        "Day-2 Ansible configuration for mesh nodes with a dynamic inventory materialised directly from S3-backed Terraform state, so provisioning and configuration never drift",
      link: {
        label: "github.com",
        href: "https://github.com/prometejs/cf-mesh-site-config",
      },
    },
    {
      title: "cf-mesh-node-agent",
      suite: "northstar",
      techStack: [
        "Prometejs",
        "Go",
        "GoReleaser",
        "Cosign",
        "Prometheus/OTLP/Loki",
      ],
      description:
        "Per-node telemetry agent for mesh hosts with pluggable metric and log sinks, shipped as signed multi-arch .deb, .rpm, and OCI images with SBOMs via GoReleaser",
      link: {
        label: "github.com",
        href: "https://github.com/prometejs/cf-mesh-node-agent",
      },
    },
    {
      title: "prometejs-miner",
      techStack: ["Prometejs", "Python", "Bitcoin", "Stratum V1", "Docker"],
      description:
        "Self-hosted, non-custodial Bitcoin solo-mining Stratum V1 server with per-miner work-space accounting; wire format frozen by golden-vector tests from a real miner session",
      link: {
        label: "github.com",
        href: "https://github.com/prometejs/prometejs-miner",
      },
    },
    {
      title: "XmlExtractor",
      techStack: ["Open Source", "Java", "Kafka Connect", "SMT"],
      description:
        "Kafka Connect Single Message Transforms that extract selected XML keys from records and project them to JSON fields, with aliasing and nested-key support",
      link: {
        label: "github.com",
        href: "https://github.com/eliblurr/XmlExtractor",
      },
    },
    {
      title: "E-Asset Management",
      techStack: [
        "GI-KACE",
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Multi-tenant asset management API service with Docker, Heroku, and AWS EC2 deployment paths, built for enterprise clients at GI-KACE",
      link: {
        label: "github.com",
        href: "https://github.com/eliblurr/asset",
      },
    },
    {
      title: "ComprehendNow",
      techStack: ["Hackathon", "Python", "FastAPI", "NLP", "Angular"],
      description:
        "Gold medal, FINOS GAAD Hackathon 2023 (AXA Inclusive Contracts Challenge): NLP chat assistant that simplifies insurance and legal documents for users with cognitive disabilities",
      link: {
        label: "github.com",
        href: "https://github.com/eliblurr/TurntablTitans",
      },
    },
    {
      title: "Ripple Mobile",
      techStack: ["Side Project", "Python", "USSD", "XRP Ledger", "SMS"],
      description:
        "USSD payment layer for the Ripple blockchain so users on basic phones without internet can send, receive, and check balances with SMS confirmations",
      link: {
        label: "github.com",
        href: "https://github.com/eliblurr/RippleMobile",
      },
    },
  ],
} as const;
