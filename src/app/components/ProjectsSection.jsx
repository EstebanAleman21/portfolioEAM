"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sorteos Tec",
    description:
      "Gamification of Sorteos Tec web-site with video game in Unity",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EstebanAleman21/SorteoTec",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Vision Doc",
    description:
      "3D model viewing and studying project for med students. Devoloped for the Apple Vision Pro",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/EstebanAleman21/VisionDoc",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Finance Tracker",
    description:
      "Personal Finance developed for the HackMty 2024 (Hackathon). Used for Capital One challenge used nessie API for data.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EstebanAleman21/404_NOTFOUND",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description:
      "Developed a personal finance tracker for personal finances. Deployed and hosted web app. Responsive for mobile and desktop.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
