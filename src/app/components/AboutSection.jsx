"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const splitListIntoColumns = (list, columns) => {
  const perColumn = Math.ceil(list.length / columns);
  return Array.from({ length: columns }, (_, i) =>
    list.slice(i * perColumn, i * perColumn + perColumn)
  );
};

const skillsList = [
  "Node.js",
  "Express",
  "NextJS",
  "Python",
  "JavaScript",
  "ReactJs",
  "SQL / noSQL",
  "HTML",
  "CSS",
  "Git",
  "Oracle server",
  "MongoDB",
  "C++ OOP",
  "Data Structures & Algorithms",
];

const skillsColumns = splitListIntoColumns(skillsList, 3);

const SkillsContent = () => (
  <div className="flex">
    {skillsColumns.map((column, index) => (
      <ul key={index} className="list-disc pl-2 flex-1">
        {column.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    ))}
  </div>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>NextJS</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>SQL / noSQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Tecnologico de Monterrey (ITESM)</li>
        <ul className="list-disc pl-4">
          <li>B.S. Computer Science and Technology</li>
          <li>GPA: 3.75</li>
          <li>Graduation Date: Dec 2025</li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Certifications / courses",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Frontend Developer</li>
        <li>Meta Backend Developer</li>
        <li>Python - University of Michigan</li>
        <li>C++ - University of California</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Software Engineer with a passion for building efficient and scalable
            solutions, eager to tackle complex challenges and apply innovative
            thinking to full stack development. I have demonstrated expertise in
            various programming languages, problem-solving, and effective
            collaboration across teams to deliver impactful results.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications / Courses{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).id === "skills" ? (
              <SkillsContent />
            ) : (
              TAB_DATA.find((t) => t.id === tab).content
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
