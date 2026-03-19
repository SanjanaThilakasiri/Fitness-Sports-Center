export default function Packages() {

  {/* Package details */}
  const packages = [
    {
      icon: "🏋️‍♂️",
      name: "Basic Package",
      price: "Rs. 500",
      duration: "1 Day",
      features: ["Limited equipment gym"],
    },
    {
      icon: "⚡",
      name: "Pro Package",
      price: "Rs. 10,000",
      duration: "1 Month",
      features: ["Fully equipped gym"],
    },
    {
      icon: "🎯",
      name: "Elite Package",
      price: "Rs. 25,000",
      duration: "3 Months",
      features: ["Fully equipped gym", "Diet plan", "Workout program"],
    },
    {
      icon: "🥈",
      name: "Silver Membership",
      price: "Rs. 45,000",
      duration: "6 Months",
      features: [
        "Fully equipped gym",
        "Individual guiding",
        "Diet plan",
        "Workout program",
        "Progress tracking",
      ],
    },
    {
      icon: "🥇",
      name: "Gold Membership",
      price: "Rs. 80,000",
      duration: "12 Months",
      features: [
        "Fully equipped gym",
        "Individual guiding",
        "Diet plan",
        "Workout program",
        "Progress tracking",
        "Body assessment",
      ],
    },
    {
      icon: "🔥",
      name: "VIP Pass",
      price: "Rs. 30,000",
      duration: "1 Month",
      features: [
        "Fully equipped gym",
        "Full time personal trainer",
        "Diet plan",
        "Workout program",
        "Progress tracking",
        "Body assessment",
        "Steam room",
      ],
    },
  ];

  return (
    <section className="packages" id="packages">
      <div className="packages-container">

        <h2 className="packages-heading">Packages</h2>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div className="package-card" key={pkg.name}>

              {/* Icon  */}
              <div className="package-icon">{pkg.icon}</div>

              {/* Name */}
              <h3 className="package-name">{pkg.name}</h3>

              {/* Duration */}
              {pkg.duration && (
                <p className="package-duration">{pkg.duration}</p>
              )}

              {/* Price */}
              <p className="package-price">{pkg.price}</p>

              {/* Divider line */}
              <div className="package-divider"></div>

              {/* Features */}
              <ul className="package-features">
                {pkg.features.map((feature) => (
                  <li key={feature} className="package-feature">
                    ✓ {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}