export type NavItem = {
  label: string;
  href: string;
};

export type Mission = {
  id: string;
  title: string;
  objective: string;
  channels: string[];
  status: "draft" | "research" | "approval" | "scheduled" | "published";
  dueDate: string;
};

export type PipelineStage = {
  id: string;
  title: string;
  agent: string;
  status: "pending" | "running" | "blocked" | "approved" | "done";
  summary: string;
};

export type TrendSignal = {
  topic: string;
  channel: string;
  urgency: "low" | "medium" | "high";
};
