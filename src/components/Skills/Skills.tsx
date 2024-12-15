import React from "react";

interface ExperienceProps {
  heading: string;
  skills: string[];
}

export const Skills = ({ heading, skills }: ExperienceProps) => {
  return (
    <section>
      <h3 className="text-4xl mb-10">{heading}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            className="bg-accent text-black font-semibold px-5 py-2 rounded-sm"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
