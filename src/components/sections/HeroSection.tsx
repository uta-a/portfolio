import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section site-container" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true">
        <Image src="/images/hero-ribbon.webp" alt="" fill priority sizes="(max-width: 600px) 100vw, 85vw" />
      </div>
      <div className="hero-copy">
        <p className="hero-eyebrow">Web developer</p>
        <h1 id="hero-title">Design<br />meets<br />Engineering.</h1>
        <p className="hero-description">見た目の美しさと、<br />確かな技術で、価値あるものをつくる。</p>
        <a className="text-link hero-link" href="#projects">View Projects <span aria-hidden="true">→</span></a>
      </div>
      <div className="hero-side-note" aria-hidden="true"><span>Design & code by uta</span><span className="vertical-line" /><span>Scroll to explore</span></div>
    </section>
  );
}
