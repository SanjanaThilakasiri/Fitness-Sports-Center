import { useState } from "react";

const reviews = [
  {
    name: "Sanjana Thilakasiri",
    review:
      "Best place to go if you consider your fitness. Very friendly support instructors. They will guide you and show you how to do technically correct work outs.",
  },
  {
    name: "Thilina",
    review:
      "Amazing gym with top notch equipment and very professional trainers. The environment is very motivating and the staff is always helpful. Highly recommend this place to anyone serious about fitness.",
  },
  {
    name: "Nethmi",
    review:
      "Amazing environment and friendly trainers. I have seen real results in just a few weeks. Highly recommend this gym to anyone looking to get fit and healthy.",
  },
   {
    name: "Harsha",
    review:
      "Best gym I’ve ever joined. Clean space, great equipment, and super motivating staff. I’ve seen amazing results in just a few months. Highly recommend to anyone looking to get fit!",
  },
   {
    name: "Hiruni",
    review:
      "The personal training here is top-notch. Highly recommend for anyone serious about fitness. The trainers are knowledgeable and supportive, and the facilities are excellent. I’ve seen great results since joining.",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">

        <h2 className="reviews-heading">Client Reviews</h2>

        <div className="reviews-slider">

          {/* Left Arrow */}
          <button className="reviews-arrow" onClick={prev}>&#8592;</button>

          {/* Card */}
          <div className="review-card">
            {/* Stars */}
            
            {/* Avatar */}
            <div className="review-avatar">
              {reviews[current].name.charAt(0)}
            </div>

            {/* Name */}
            <h3 className="review-name">{reviews[current].name}</h3>

            {/* Review Text */}
            <p className="review-text">{reviews[current].review}</p>
          </div>

          {/* Right Arrow */}
          <button className="reviews-arrow" onClick={next}>&#8594;</button>

        </div>

        {/* Slider Dots */}
        <div className="reviews-dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`reviews-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}