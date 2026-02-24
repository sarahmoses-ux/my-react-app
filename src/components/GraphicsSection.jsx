import React from "react";

export default function GraphicsSection() {
  const graphicsProjects = [
    {
      id: 1,
      image: "https://banji.techbitdigital.com/assets/adorn-couture-logo-DcWMgnuO.svg",
      title: "Brand Identity Design",
      description: "A repository of brand logo design",
      cta: "To Brand Design",
    },
    {
      id: 2,
      image: "https://banji.techbitdigital.com/assets/boot-BC0H6lJq.svg",
      title: "Social Media Flyer Design",
      description: "A repository of social media flier design",
      cta: "To Social Media Design",
    },
  ];

  return (
    <section className="graphics-section">
      <h2 className="graphics-heading">I do graphics design too.</h2>

      <div className="graphics-grid">
        {graphicsProjects.map((item) => (
          <article className="graphics-card" key={item.id}>
            <div className="graphics-image-wrap">
              <img src={item.image} alt={item.title} className="graphics-image" />
            </div>

            <div className="graphics-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#home" className="graphics-link">
                {item.cta}
                <span>{">"}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
