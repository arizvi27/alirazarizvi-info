import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rizvia4743" },
  { label: "GitHub", href: "https://github.com/arizvi27" },
  { label: "Email", href: "mailto:ali63017@icloud.com" }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Ali Raza Rizvi</p>
        <h1>
          Building products that feel thoughtful, fast, and useful.
        </h1>
        <p className="lede">
          Engineer and tinkerer focused on web experiences, AI tooling, and
          delightful developer workflows. I like shipping end-to-end: design,
          code, deploy.
        </p>
        <div className="actions">
          <Link className="button primary" href="#projects">
            Recent work
          </Link>
          <Link className="button ghost" href="#contact">
            Say hello
          </Link>
        </div>
      </section>

      <section id="projects" className="card-grid">
        <article className="card">
          <p className="eyebrow">Featured</p>
          <h3>Personal website</h3>
          <p>
            This site is a minimal, fast-loading React app deployed on Vercel.
            Built with Next.js, TypeScript, and accessible-first styling.
          </p>
          <div className="meta">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Vercel</span>
          </div>
        </article>
        <article className="card">
          <p className="eyebrow">Tooling</p>
          <h3>AI helpers for builders</h3>
          <p>
            Experiments that combine LLMs with product telemetry to surface
            actionable insights for teams shipping weekly.
          </p>
          <div className="meta">
            <span>LLM</span>
            <span>Product</span>
            <span>DX</span>
          </div>
        </article>
        <article className="card">
          <p className="eyebrow">Experiment</p>
          <h3>Fast prototypes</h3>
          <p>
            Rapid weekend builds to validate ideas: lightweight APIs, crisp
            frontends, and pragmatic deployments.
          </p>
          <div className="meta">
            <span>APIs</span>
            <span>Design</span>
            <span>Shipping</span>
          </div>
        </article>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something useful</h2>
          <p>
            Open to collaborations, advisory, or just swapping ideas. The fastest
            way to reach me is email; socials below also work.
          </p>
        </div>
        <div className="links">
          {socials.map((item) => (
            <Link key={item.href} href={item.href} className="social">
              <span>{item.label}</span>
              <span aria-hidden>↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
