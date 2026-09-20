"use client";

import * as React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Waleado transformed our e-commerce sales. The automated abandoned cart reminders with dynamic Spintax have generated an extra $18,400 in revenue in just 30 days.",
    author: "Omar Faruk",
    role: "Head of Growth",
    company: "TrendMart Direct",
    metric: "+340% Cart Recovery",
    stars: 5,
  },
  {
    quote:
      "The missed call auto-responder is pure magic. High-intent property buyers calling after hours immediately get our WhatsApp brochure. We closed 3 additional deals this month!",
    author: "Liam Davies",
    role: "Managing Director",
    company: "Horizon Real Estate",
    metric: "3 Extra Deals / Mo",
    stars: 5,
  },
  {
    quote:
      "Running bulk campaigns across 8 connected SIMs with round-robin rotation and zero account bans is unprecedented. Our marketing agency has completely switched to Waleado.",
    author: "Elena Rossi",
    role: "Founder & CEO",
    company: "Scalex Agency Group",
    metric: "8 SIMs Operating Safely",
    stars: 5,
  },
  {
    quote:
      "The visual chatbot builder took our support team 15 minutes to configure. It answers 75% of routine questions instantly, freeing up our human agents for complex issues.",
    author: "Rajesh Menon",
    role: "Customer Operations Lead",
    company: "PayFlow Africa",
    metric: "75% Inquiries Automated",
    stars: 5,
  },
  {
    quote:
      "No Meta developer verification headaches and zero per-message charges. We connected our WhatsApp Business number via QR code and were sending campaigns in 3 minutes.",
    author: "Sophie Dubois",
    role: "E-Commerce Founder",
    company: "Maison Botanicals",
    metric: "3 Min Onboarding",
    stars: 5,
  },
  {
    quote:
      "The live unified team inbox lets our 6 support agents collaborate simultaneously on the same WhatsApp business hotline without stepping on each other's toes.",
    author: "Tariq Al-Mansoor",
    role: "VP of Support",
    company: "NovaCloud Systems",
    metric: "6 Agents in 1 Inbox",
    stars: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <span>Customer Stories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Loved by Over <span className="text-gradient-emerald">2,000+ Businesses</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Discover how companies use Waleado to drive explosive customer engagement and revenue.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/80 dark:bg-card/50 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative">
            <Quote className="w-12 h-12 text-emerald-500/20 absolute top-6 right-6 pointer-events-none" />
            
            <div className="min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(testimonials[currentIndex].stars)].map((_, s) => (
                      <Star key={s} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                    {testimonials[currentIndex].metric}
                  </span>
                </div>

                <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                    {testimonials[currentIndex].author}
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 inline" />
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[currentIndex].role} — <span className="text-foreground/80 font-medium">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
                <div className="text-xs font-mono text-muted-foreground">
                  {currentIndex + 1} / {testimonials.length}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial slide"
                className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-colors cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial slide"
                className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-colors cursor-pointer"
              >
                →
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="ml-2 text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
              >
                {isPaused ? "▶ Resume" : "❚❚ Pause"}
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  role="tab"
                  aria-selected={currentIndex === idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-8 bg-emerald-500" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
