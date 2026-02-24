import React from "react";
import ProjectCards from "./ProjectCards";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      image: "https://banji.techbitdigital.com/assets/QandAFrame-9p6cTH5o.svg",
      logo: "https://banji.techbitdigital.com/assets/qandaLogo-BsdSQ4Xd.svg",
      title: "Q & A",
      tag: "• EdTech Resources app",
      description:
        "Q and A app is a platform for distributing and sourcing educational resources in text, audio and video formats.",
      link: "View Case Study",
      progress: 100,
    },
    {
      id: 2,
      image: "https://banji.techbitdigital.com/assets/tribearc_frame-S1s0-cBc.svg",
      logo: "https://banji.techbitdigital.com/assets/tribearc_logo-BGNaCC8_.svg",
      title: "Tribearc",
      tag: "• SAAS product",
      description:
        "Tribearc is a SAAS product that helps users build landing pages, capture leads, and convert them with email automation.",
      link: "View Live Project",
    },
    {
      id: 3,
      image: "https://banji.techbitdigital.com/assets/tribearc_frame-S1s0-cBc.svg",
      logo: "https://banji.techbitdigital.com/assets/lagmall_logo-C0L5G85i.svg",
      title: "LagMall",
      tag: "• E-commerce app",
      description:
        "LagMall is an e-commerce app that delivers a user-friendly shopping experience and helps sales entrepreneurs grow.",
      link: "View Case Study",
      progress: 75,
    },
    {
      id: 4,
      image: "https://banji.techbitdigital.com/assets/amanoFrame-Bu2s9mGu.svg",
      logo: "https://banji.techbitdigital.com/assets/amano_logo-upkgjzkx.svg",
      title: "AMANO",
      tag: "• Alumni website",
      description: "The Alumni of Maritime Academy of Nigeria website.",
      link: "View Case Study",
      progress: 60,
    },
    {
      id: 5,
      image: "https://banji.techbitdigital.com/assets/learnxplore_frame-Dz7JCgE_.svg",
      logo: "https://banji.techbitdigital.com/assets/learnxplore-logo-B3EOiLEc.svg",
      title: "Learnxplore",
      tag: "• Educational ",
      description:
        "Learnxplore is an educational app for kids that promotes learning on the go and supports SDG4.",
      link: "View Case Study",
      progress: 85,
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-heading">
        <p>Now, the good stuff.</p>
        <h1>My Work</h1>
      </div>

      <div className="projects-list">
        {projects.map((card) => (
          <ProjectCards key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
