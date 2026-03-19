export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Who We Are */}
        <div className="about-block">
          <h2 className="about-heading">Who We Are</h2>
          <p className="about-text">
            We are more than just a gym. We are a community that motivates,
            supports, and grows together. Whether you're a beginner or an
            athlete, we're here to guide your fitness journey.
          </p>
        </div>

        {/* Divider */}
        <div className="about-divider"></div>

        {/* Our Vision */}
        <div className="about-block">
          <h2 className="about-heading">Our Vision</h2>
          <p className="about-text">
            To inspire a community where fitness becomes a lifestyle, not a
            routine.
          </p>
        </div>

        {/* Divider */}
        <div className="about-divider"></div>

        {/* Our Mission */}
        <div className="about-block">
          <h2 className="about-heading">Our Mission</h2>
          <p className="about-text">
            To empower every member to unlock their full potential through
            training, education, and consistency.
          </p>
        </div>

      </div>
    </section>
  );
}