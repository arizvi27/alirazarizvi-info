import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif"
});

const sans = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Ali Raza Rizvi | Portfolio",
  description: "Engineer & builder crafting thoughtful products."
};

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Library", href: "/library" }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <div className="page-shell">
          <header className="topbar">
            <Link href="/" className="wordmark">
              AR
            </Link>
            <nav className="nav">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <span>© {new Date().getFullYear()} Ali Raza Rizvi</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
