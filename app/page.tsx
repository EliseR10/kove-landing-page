import Image from "next/image";
import TestimonialCarousel from "./components/TestimonialCarousel.server";
import RollingTextButton from "./components/rollingTextButton";
import ScrollInViewSection from "./components/scrollInViewSection";
import FeatureCard from "./components/stickyNavBar";

const features = [
  {
    title: "Hot-Swappable Switches",
    description:
      "Change your typing feel in minutes — no soldering, no tools, no waiting.",
  },
  {
    title: "Custom-Tuned Acoustics",
    description:
      "A foam-dampened case gives every keystroke a deep, satisfying thock instead of a hollow click.",
  },
  {
    title: "Aircraft-Grade Aluminium Body",
    description:
      "CNC-milled from a single block. Cold to the touch, heavy in the hand, built to outlast the desk it sits on.",
  },
  {
    title: "Per-Key Backlighting, Tastefully Done",
    description:
      "Sixteen million colors. We recommend using about four of them.",
  },
];

const specs = [
  "Layout: 75% (84 keys)",
  "Switches: Hot-swappable, 5-pin, factory-lubed",
  "Keycaps: Double-shot PBT, cherry profile",
  "Connectivity: USB-C wired, 2.4GHz wireless, Bluetooth 5.0",
  "Battery: Up to 40 hours (backlight on)",
  "Weight: 1.2kg",
  "Body: CNC-milled aluminum, anodized finish",
];

export default function Home() {
  return (
    <main className="font-body">
      {/* Nav */}
      <header className="bg-burgundy">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-display text-2xl font-semibold text-cream">
            KOVE
          </span>
          <nav className="flex items-center gap-8 text-sm text-cream/90">
            <a href="#features" className="hidden sm:inline transition hover:text-cream">
              Feature
            </a>
            <a href="#colorways" className="hidden sm:inline transition hover:text-cream">
              Colorways
            </a>
            <a href="#specs" className="hidden sm:inline transition hover:text-cream">
              Specs
            </a>
            <a id="pre-order" href="#pre-order" className="font-semibold text-cream transition hover:opacity-80">
              PRE-ORDER
            </a>
            
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="max-w-md font-display text-3xl font-semibold text-olive-deep sm:text-4xl">
            Built to feel as good as it sounds.
          </h1>

          <div className="relative mx-auto mt-8 aspect-[16/8] w-full max-w-4xl">
            <Image
              src="/keyboard-closeup.jpg"
              alt="KOVE mechanical keyboard"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <p className="mx-auto mt-6 max-w-xs text-right font-body text-olive-deep/90 sm:ml-auto sm:mr-0">
            A mechanical keyboard tuned for people who notice the details.
          </p>
        </div>
      </section>

      {/* Problem statement */}
      <ScrollInViewSection className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Most keyboards are an afterthought. Yours shouldn&apos;t be.
            </h2>
            <p className="mt-6 text-ink/80">
              Mushy switches, hollow plastic, sound that goes straight to
              landfill. KOVE was built by people who type for a living and
              got tired of settling.
            </p>
            <RollingTextButton
              href="#"
              className="mt-8 inline-block rounded-full bg-olive px-8 py-3 font-body font-medium text-cream transition hover:bg-olive-deep"
              label="Pre-Order Now !"
              ariaLabel="Pre-Order Now !"
            />
          </div>
        </div>
      </ScrollInViewSection>

      {/* Features */}
      <ScrollInViewSection className="bg-burgundy">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-10 font-mono text-sm uppercase tracking-widest text-cream">
            Product Features
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                className="rounded-2xl bg-cream-card px-6 py-8 text-center"
              >
                <h3 className="font-display text-lg font-semibold text-olive-deep">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm text-ink/80">
                  {feature.description}
                </p>
              </FeatureCard>
            ))}
          </div>
        </div>
      </ScrollInViewSection>

      {/* What's actually inside */}
      <ScrollInViewSection id="specs" className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-olive-deep sm:text-3xl">
            What&apos;s actually inside?
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-ink/80">
                Every switch is factory-lubed and burned in for 50 million
                keystrokes before it ships. You&apos;ll feel the difference on
                day one, not after the warranty runs out.
              </p>
              <p className="mt-4 text-ink/80">
                The plate is polycarbonate, tuned to flex just enough to
                soften your typing without going mushy. Underneath, three
                layers of foam kill the ping that cheaper boards can&apos;t
                get rid of.
              </p>

              <ul className="mt-6 space-y-2 font-mono text-sm text-ink/90">
                {specs.map((spec) => (
                  <li key={spec} className="flex gap-2">
                    <span className="text-olive">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/switch.webp"
                alt="Close-up of a KOVE keyboard switch"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ScrollInViewSection>

      {/* Testimonials */}
      <ScrollInViewSection id="colorways" className="bg-burgundy">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 font-mono text-2xl text-cream">
            Testimonials
          </h2>
          <TestimonialCarousel />
        </div>
      </ScrollInViewSection>

      {/* Final CTA */}
      <ScrollInViewSection className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Type it like it matters
          </h2>
          <RollingTextButton
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-olive px-8 py-3 font-body font-medium text-cream transition hover:bg-olive-deep"
            label={
              <>
                Pre-Order — <span className="font-mono">$189</span>
              </>
            }
            ariaLabel="Pre-Order — $189"
          />
          <p className="mt-6 text-sm text-muted">
            Free shipping on all pre-orders. 30-day returns.
          </p>
        </div>
      </ScrollInViewSection>

      {/* Footer */}
      <footer className="bg-olive">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <span className="font-display text-xl font-semibold text-cream">
              KOVE
            </span>
            <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-cream/90">
              <a href="#" className="hover:text-cream">Support</a>
              <span>·</span>
              <a href="#" className="hover:text-cream">Shipping</a>
              <span>·</span>
              <a href="#" className="hover:text-cream">Warranty</a>
              <span>·</span>
              <a href="#" className="hover:text-cream">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:text-cream">Twitter</a>
            </nav>
          </div>
          <p className="mt-6 text-center font-mono text-xs text-cream/70">
            © 2026 KOVE. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
