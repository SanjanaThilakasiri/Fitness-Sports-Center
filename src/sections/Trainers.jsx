import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import trainer4 from "../assets/trainer4.jpg";

const trainers = [
  {
    name: "Kasun",
    role: "Strength Coach",
    image: trainer1,
  },
  {
    name: "Saduni",
    role: "Personal Trainer",
    image: trainer2,
  },
  {
    name: "Ruwan",
    role: "Fitness Instructor",
    image: trainer3,
  },
  {
    name: "Amali",
    role: "Yoga Instructor",
    image: trainer4,
  },
];

export default function Trainers() {
  return (
    <section className="trainers" id="trainers">
      <div className="trainers-container">

        <h2 className="trainers-heading">Meet Our Trainers</h2>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div className="trainer-card" key={trainer.name}>

              {/* Photo */}
              <div className="trainer-img-wrapper">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer-img"
                />
              </div>

              {/* Info */}
              <div className="trainer-info">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}