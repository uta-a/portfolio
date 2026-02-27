"use client";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050816]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="flex flex-col items-center gap-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-mono text-lg font-semibold tracking-tight text-white transition-colors hover:text-accent"
          >
            uta_a
            <span className="text-accent">.</span>
          </a>

          <div className="h-px w-16 bg-white/10" />

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <p className="font-mono text-sm text-slate-300">
              &copy; {new Date().getFullYear()} uta_a
            </p>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <p className="font-mono text-xs text-slate-300">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group mt-2 flex items-center gap-2 font-mono text-xs text-slate-300 transition-colors hover:text-accent"
          >
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
