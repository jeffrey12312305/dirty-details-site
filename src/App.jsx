import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { navLinks, packages, services, site, testimonials } from './data';

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Dirty Details home">
        <span className="brand-mark">DD</span>
        <span>{site.name}</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} end={link.path === '/'}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <a className="call-link" href={`tel:${site.phone.replace(/[^0-9]/g, '')}`}>Call</a>
    </header>
  );
}

function SocialLinks({ className = '' }) {
  const links = [
    ['TikTok', site.socials.tiktok],
    ['Facebook', site.socials.facebook],
    ['Instagram', site.socials.instagram],
    ['YouTube', site.socials.youtube]
  ];

  return (
    <div className={`social-row ${className}`}>
      {links.map(([label, url]) => (
        <a key={label} href={url} target="_blank" rel="noreferrer">
          {label}
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>{site.name}</h3>
          <p>{site.tagline}</p>
          <SocialLinks />
        </div>
        <div>
          <h4>Address</h4>
          <p>{site.address}</p>
          <p>{site.city}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </div>
        <div>
          <h4>Pages</h4>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright">© 2026 {site.name}</div>
    </footer>
  );
}

function PageShell({ eyebrow, title, children }) {
  return (
    <main>
      <section className="page-hero small-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </section>
      {children}
    </main>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Arrive dirty. Leave detailed.</p>
          <h1>{site.name}</h1>
          <p className="hero-quote">“{site.tagline}”</p>
          <p>{site.subline}</p>
          <div className="button-row">
            <Link className="primary-btn" to="/contact">Contact Us For A Free Assessment</Link>
            <Link className="ghost-btn" to="/packages">View Packages</Link>
          </div>
        </div>
      </section>

      <section className="section centered">
        <p className="eyebrow">Built for busy people</p>
        <h2>Clean. Protect. Maintain.</h2>
        <p className="wide-text">Dirty Details helps keep your vehicle clean without turning your schedule upside down. Choose a practical detail, a deeper reset, or a protection package built around your vehicle.</p>
      </section>



      <FollowBlock />
    </main>
  );
}

function About() {
  return (
    <PageShell eyebrow="Learn more about what we do" title="Our mission">
      <section className="section centered">
        <h2>Correct + protect + maintain the appearance of your vehicle.</h2>
        <p className="wide-text">We focus on clean work, clear expectations, and services matched to your vehicle’s condition. No confusing upsell. No rushed walkthrough. You get a clear plan before the work starts.</p>
      </section>

      <section className="section card-grid three">
        <article className="info-card"><h3>Clear service menu</h3><p>Packages explain what is included before you book.</p></article>
        <article className="info-card"><h3>Mobile convenience</h3><p>Service is designed around homes, apartments, and family schedules.</p></article>
        <article className="info-card"><h3>Protection mindset</h3><p>The goal is more than clean paint. It is easier future maintenance.</p></article>
      </section>

      <section className="section gallery-section">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2>Latest work</h2>
          <p>Replace these blocks with real photos from your details.</p>
        </div>
        <div className="gallery-grid">
          <div className="photo-card">Before</div>
          <div className="photo-card">After</div>
          <div className="photo-card">Interior</div>
          <div className="photo-card">Exterior</div>
        </div>
      </section>
      <FollowBlock />
    </PageShell>
  );
}

function Services() {
  return (
    <PageShell eyebrow="Find the Detail Your Vehicle Needs" title="Services">
      <section className="section card-grid two">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function CeramicCoating() {
  return (
    <PageShell eyebrow="Paint protection" title="Ceramic Coating">
      <section className="section centered">
        <p className="eyebrow">Professional coatings</p>
        <h2>Gloss, slickness, and easier maintenance.</h2>
        <p className="wide-text">Ceramic coatings add a durable protection layer after proper wash, decontamination, correction, and panel prep. The right coating depends on paint condition, vehicle use, storage, and budget.</p>
      </section>

      <section className="section card-grid three">
        {coatingOptions.map((option) => (
          <article className="info-card" key={option.name}>
            <h2>{option.name}</h2>
            <p className="price-line">{option.durability}</p>
            <p>{option.text}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function Packages() {
  return (
    <PageShell
  eyebrow="Packages We Offer"
  title={
    <span className="packages-title">
      <span>All</span>
      <span>Packages</span>
      <span>Are</span>
      <span>Customizable</span>
    </span>
  }
>
      <section className="section centered package-intro">
        <p className="eyebrow">Our signature packages</p>
        <h2>Pick the service level your vehicle needs.</h2>
      </section>
      <section className="section package-stack">
        {packages.map((item) => (
          <article className="package-card" key={item.name}>
            <div className="package-head">
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <p className="package-price">{item.price}</p>
            </div>
            <div className="package-columns">
              <div>
                <h3>Exterior</h3>
                <ul>{item.exterior.map((line) => <li key={line}>{line}</li>)}</ul>
              </div>
              <div>
                <h3>Interior</h3>
                <ul>{item.interior.map((line) => <li key={line}>{line}</li>)}</ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function Contact() {
  return (
    <PageShell eyebrow="Get In Touch" title="Contact me">
      <section className="section contact-grid">
        <form
  className="contact-form"
  action="https://formspree.io/f/mrewwaby"
  method="POST"
  encType="multipart/form-data"
>
          <label>First name<input name="firstName" type="text" required /></label>
          <label>Last name<input name="lastName" type="text" /></label>
          <label>Your email<input name="email" type="email" required /></label>
          <label>
  Vehicle type
  <select name="vehicleType" required defaultValue="">
    <option value="" disabled>Select vehicle type</option>
    <option value="Sedan">Sedan</option>
    <option value="SUV">SUV</option>
    <option value="Large SUV">Large SUV</option>
    <option value="Truck">Truck</option>
  </select>
</label>


          <label>Your message (Include Specific Concerns)<textarea name="message" rows="6" required /></label>
          <label>
  Vehicle photos
  <input
    name="photos"
    type="file"
    accept="image/png, image/jpeg, image/webp"
    multiple
  />
</label>
          <button className="primary-btn" type="submit">Send Message</button>
        </form>

        <aside className="contact-panel">
          <h2>Business Hours</h2>
          <p>Monday - Sunday</p>
          <p>8:30am - 4:30pm</p>
          <p>{site.hours}</p>
          <h2>Contact</h2>
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <p>{site.address}</p>
        </aside>
      </section>

      <section className="section testimonials">
        <p className="eyebrow">Testimonials</p>
        <h2>Customer feedback</h2>
        <div className="card-grid two">
          {testimonials.map((item) => (
            <article className="quote-card" key={item.name + item.title}>
              <p>“{item.quote}”</p>
              <h3>{item.name}</h3>
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Blog() {
  return (
    <PageShell eyebrow="Blog" title="Detailing information">
      <section className="section card-grid three">
        {blogPosts.map((post) => (
          <article className="info-card" key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a className="text-link" href="#top">Read soon</a>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function Store() {
  return (
    <PageShell eyebrow="Store" title="Store coming soon">
      <section className="section centered">
        <h2>Products, gift cards, and maintenance kits.</h2>
        <p className="wide-text">Use this page later for gift cards, branded merch, maintenance towels, interior care kits, or booking deposits.</p>
        <Link className="primary-btn" to="/contact">Ask about booking</Link>
      </section>
    </PageShell>
  );
}

function FollowBlock() {
  return (
    <section className="section follow-block centered">
      <p className="eyebrow">Follow Us</p>
      <h2>See recent work and updates.</h2>
      <SocialLinks className="centered-row" />
    </section>
  );
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div id="top" className="app-shell">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
