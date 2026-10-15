const links = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-inner">
          <a className="wordmark" href="#hero">
            uta
          </a>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} uta
          </p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
