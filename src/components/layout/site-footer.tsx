import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SocialLinks } from "@/components/contact/social-links";
import { Container } from "@/components/primitives/container";
import { navLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/35">
      <Container className="py-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/#top"
              className="rounded-sm font-display text-xl font-bold tracking-tight text-foreground"
            >
              {siteConfig.name}
              <span aria-hidden className="text-primary">
                .
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors duration-[var(--duration-base)] hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
              Elsewhere
            </p>
            <SocialLinks
              links={siteConfig.socialLinks}
              variant="inline"
              className="mt-4"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6875rem] text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#site-top"
            className="group inline-flex w-fit items-center gap-2 rounded-sm font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-[var(--duration-base)] hover:text-foreground"
          >
            Back to top
            <ArrowUp
              aria-hidden
              className="h-3.5 w-3.5 transition-transform duration-[var(--duration-base)] group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
