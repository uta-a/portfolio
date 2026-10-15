import { profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section site-container">
      <p className="availability">
        {profile.available ? "お仕事のご相談を受け付けています" : "現在、新規のご相談はお休みしています"}
      </p>
      <h2>Let&apos;s make it work.</h2>
      <p className="contact-copy">
        Webサイト制作・Webアプリ開発など、つくりたいものについてご相談ください。
      </p>
      <div className="contact-links">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          GitHubで活動を見る
        </a>
        {profile.email && (
          <a href={`mailto:${profile.email}`} className="text-link">
            メールで相談する
          </a>
        )}
        {profile.twitter && (
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Xで活動を見る
          </a>
        )}
      </div>
    </section>
  );
}
