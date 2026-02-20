type Project = {
  title: string;
  summary: string;
  tags: string[];
  role: string;
};

const projects: Project[] = [
  {
    title: "Theory to Tapeout (ECE 8804)",
    summary:
      "Full chip DV, PD, and STA flow for a CMOS processor with CORDIC-like functionality; team of four targeting November 2024 tapeout.",
    tags: ["DV", "Physical Design", "STA"],
    role: "Design & verification"
  },
  {
    title: "LLM-driven HLS tooling (Sharc Lab)",
    summary:
      "Built a workflow to generate and evaluate HLS code from LLM prompts; curated Polybench/Machsuite/CHstone benchmarks to speed chip-design research.",
    tags: ["LLM", "HLS", "Research"],
    role: "Research & tooling"
  },
  {
    title: "Tomasulo + Cache simulator",
    summary:
      "C++ simulator of Tomasulo’s algorithm with branch prediction, plus WBWA L1 / WBWT L2 cache model to study pipeline behavior.",
    tags: ["C++", "Architecture", "Simulation"],
    role: "Architecture modeling"
  },
  {
    title: "5-stage RISC-V processor",
    summary:
      "SystemVerilog implementation (ADD/SUB/JAL/LW/SW) with branching and pipelining; built for Digital Design Lab.",
    tags: ["SystemVerilog", "RISC-V", "Pipelining"],
    role: "RTL design"
  }
];

export default function ProjectsPage() {
  return (
    <div className="section stack">
      <div className="section-head">
        <p className="eyebrow">Projects</p>
        <h1>Selected work.</h1>
        <p className="lede">
          A sample of things I’ve built or led. Happy to dive deeper on any of
          these or share more examples privately.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-top">
              <h3>{project.title}</h3>
              <span className="pill subtle">{project.role}</span>
            </div>
            <p>{project.summary}</p>
            <div className="meta">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
