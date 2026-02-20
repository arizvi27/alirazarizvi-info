import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rizvia4743",
    Icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.5v15h-4.5V8zm7.98 0h4.3v2.05h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.86V23h-4.5v-7.3c0-1.74-.03-3.98-2.43-3.98-2.44 0-2.82 1.9-2.82 3.86V23h-4.5V8z"
        />
      </svg>
    )
  },
  {
    label: "GitHub",
    href: "https://github.com/arizvi27",
    Icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.8-.25.8-.57 0-.28-.01-1.04-.02-2.05-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.2-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.74.11 3.03.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .32.21.68.81.57A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"
        />
      </svg>
    )
  },
  {
    label: "Email",
    href: "mailto:ali63017@icloud.com",
    Icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.17l9 5.36 9-5.36V7H3Zm18 2.83-7.95 4.73a2 2 0 0 1-2.1 0L3 9.83V17h18V9.83Z"
        />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <div className="hero-grid">
      <section className="lead">
        <p className="eyebrow">Ali Raza Rizvi</p>
        <h1>Engineer, chip designer, sports fan, investor.</h1>
        <div className="cta-row">
          <Link className="button primary" href="/projects">
            View projects
          </Link>
          <Link className="button quiet" href="/about">
            About me
          </Link>
        </div>
        <div className="socials icon-row">
          {socials.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className="icon-button" aria-label={label}>
              <Icon />
            </Link>
          ))}
        </div>
        <p className="lede">
          A concise snapshot of what I’m into right now—on the desk, on the screen, and on the field.
        </p>

        <div className="interests-card">
          <div className="interest-row">
            <span>Chip design</span>
            <span>Tinkering with low-power architectures.</span>
          </div>
          <div className="interest-row">
            <span>Stocks</span>
            <span>Watching semis & AI infra names closely.</span>
          </div>
          <div className="interest-row">
            <span>Startups</span>
            <span>Advising a couple friends on product velocity.</span>
          </div>
          <div className="interest-row">
            <span>Soccer</span>
            <span>Weekend league winger; tracking Premier League form.</span>
          </div>
          <div className="interest-row">
            <span>Basketball</span>
            <span>Catching NBA west coast games when I can.</span>
          </div>
        </div>
      </section>

      <section className="profile-card">
        <div className="profile-flex">
          <div className="portrait">
            <Image
              src="/profile.jpg"
              alt="Ali Raza Rizvi"
              width={680}
              height={760}
              className="portrait-img"
              priority
            />
          </div>
          <div className="logo-row" aria-label="Affiliations">
            <div className="logo-tile">
              <Image
                src="/ParkwayWestLogo.png"
                alt="Parkway West High School"
                width={140}
                height={110}
                sizes="180px"
              />
              <span className="logo-caption">2017–2021 • Parkway West</span>
            </div>
            <div className="logo-tile">
              <Image src="/GT.png" alt="Georgia Tech" width={140} height={110} sizes="180px" />
              <span className="logo-caption">2021–2026 • Georgia Tech</span>
            </div>
            <div className="logo-tile">
              <Image src="/NVIDIA.png" alt="NVIDIA" width={170} height={90} sizes="200px" />
              <span className="logo-caption">2026–Present • NVIDIA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
