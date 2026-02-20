const timeline = [
  {
    year: "2026–Present",
    title: "NVIDIA — Memory Systems (Intern 2025, continuing engagement)",
    detail:
      "ASIC design & verification on Rubin/Feynman GPUs; exploring perf/area trade-offs and timing closure for memory subsystems."
  },
  {
    year: "2021–2026",
    title: "Georgia Tech — B.S. CmpE (3.8 GPA) + M.S. ECE",
    detail:
      "Computer Engineering undergrad and ECE master’s; focus on advanced VLSI, computer architecture, GPU programming."
  },
  {
    year: "2017–2021",
    title: "Parkway West High School",
    detail: "Foundations in math, physics, and early hardware tinkering."
  }
];

const experience = [
  {
    role: "ASIC Design & Verification Intern — NVIDIA",
    time: "Summer 2025",
    bullets: [
      "Refined memory subsystem architecture for Rubin/Feynman GPUs; synthesized design variants (DC/ICC-FP) and cut area ~10% without perf loss.",
      "Read timing (WNS/TNS/FEP) to drive iterations; delivered a performance/area impact report that informed tape-in choices."
    ]
  },
  {
    role: "Digital Engineering / SWE Intern — Northrop Grumman",
    time: "Summers 2022, 2023",
    bullets: [
      "Built SV assertions for AES interface; achieved 98% code / 84% functional coverage.",
      "Automated radar data transfer (Python/C++), doubling throughput with multithreading."
    ]
  },
  {
    role: "Research — GTRI / Sharc Lab",
    time: "2023–2024",
    bullets: [
      "Developed SV testbench for RISC-V accelerator co-design.",
      "Created LLM-driven HLS workflow; curated Polybench/Machsuite/CHstone benchmarks for chip-design research."
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="section stack">
      <div className="section-head">
        <p className="eyebrow">About</p>
        <h1>Chip-focused engineer with a product mindset.</h1>
        <p className="lede">
          Objective: apply computer architecture and design verification skills to build faster, more reliable
          systems—while keeping the experience polished end-to-end.
        </p>
      </div>

      <div className="card column">
        <h3>Education</h3>
        <p>
          Georgia Tech — B.S. Computer Engineering (3.8 GPA), M.S. ECE in progress. Coursework spans Advanced VLSI,
          Computer Architecture, GPU Programming (CUDA), Semiconductor Physics, and Theory to Tapeout.
        </p>
      </div>

      <div className="card column">
        <h3>Experience snapshots</h3>
        <div className="list" style={{ listStyle: "none", paddingLeft: 0, gap: "14px" }}>
          {experience.map((item) => (
            <div key={item.role} className="exp-block">
              <p className="muted" style={{ margin: 0 }}>{item.time}</p>
              <strong>{item.role}</strong>
              <ul className="list">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <article key={item.year} className="timeline-item">
            <div className="pill subtle">{item.year}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
