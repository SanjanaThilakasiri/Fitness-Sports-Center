import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Image */}
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Built in the Dark. <br />
          Proven in the
        </h1>
        <h1 className="hero-title">
         <span className="hero-gold">Light.</span>
        </h1>
        <p className="hero-subtitle">
          Elite training programs designed to push your limits
          and reveal your true strength.
        </p>
        <a href="#packages" className="hero-btn">Join Now</a>
      </div>

    </section>
  );
}