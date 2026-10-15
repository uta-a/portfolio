import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="supplementary-section site-container" aria-labelledby="services-title">
      <div className="services-content">
        <div className="services-heading">
          <h2 id="services-title">Services</h2>
          <p>対応できること</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
