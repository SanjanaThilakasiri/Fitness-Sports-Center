export default function Services() {
  const services = [
    {
      icon: "🏋️",
      title: "Personal Training",
      description:
        "Get personalized workout plans and expert guidance tailored to your fitness goals, ensuring faster and more effective results.",
    },
    {
      icon: "📊",
      title: "Fitness Checkups",
      description:
        "Regular fitness assessments to track your progress, analyze performance, and adjust your training plan for better results.",
    },
    {
      icon: "🥗",
      title: "Nutrition Coaching ",
      description:
        "Personalized nutrition coaching with tailored meal plans designed to support your fitness goals and lifestyle.",
    },
    {
      icon: "💪",
      title: "Body Conditioning",
      description:
        "Improve strength, endurance, and overall fitness with structured body conditioning workouts.",
    },
    {
      icon: "🦵",
      title: "Muscle Rehabilitation",
      description:
        "Recover safely with guided rehabilitation programs designed to restore strength, mobility, and muscle function.",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Group Fitness Classes",
      description:
        "Engaging group workouts led by expert trainers to keep you motivated while improving strength, endurance, and overall fitness.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <h2 className="services-heading">Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}