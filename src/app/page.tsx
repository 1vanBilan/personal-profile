"use client";
import React, { useRef } from "react";
import dayjs from "dayjs";
import {
  HeroSection,
  About,
  Experience,
  Skills,
  Education,
} from "@/components";
import heroImage from "../../public/hero-image.png";
import clearabee from "../../public/clearabee.jpg";
import selfEmployed from "../../public/self-employed.jpg";
import nau from "../../public/nau.png";

export default function Home() {
  const aboutRef: React.Ref<HTMLDivElement> = useRef(null);
  const experienceRef: React.Ref<HTMLDivElement> = useRef(null);
  const skillsRef: React.Ref<HTMLDivElement> = useRef(null);
  const educationRef: React.Ref<HTMLDivElement> = useRef(null);

  return (
    <>
      <div className="container px-5 flex flex-col mx-auto gap-24 mb-20">
        <div className="lg:mb-20">
          <HeroSection
            name="Ivan Bilan"
            subheading="and I'm a Software Developer."
            image={heroImage}
            buttons={[
              {
                text: "About me",
                onClick: () => {
                  if (aboutRef.current) {
                    aboutRef.current.scrollIntoView({ behavior: "smooth" });
                    aboutRef.current.focus();
                  }
                },
              },
              {
                text: "Experience",
                onClick: () => {
                  if (experienceRef.current) {
                    experienceRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                },
              },
              {
                text: "Skills",
                onClick: () => {
                  if (skillsRef.current) {
                    skillsRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                },
              },
              {
                text: "Education",
                onClick: () => {
                  if (educationRef.current) {
                    educationRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                },
              },
            ]}
            links={[
              {
                component: (
                  <div className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#98e8cd"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                    <p className="underline">LinkedIn</p>
                  </div>
                ),
                link: "https://www.linkedin.com/in/ivan-bilan-4aa118241",
              },
              {
                component: (
                  <div className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#98e8cd"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                    <p className="underline">GitHub</p>
                  </div>
                ),
                link: "https://github.com/1vanBilan",
              },
            ]}
          />
        </div>

        <div ref={aboutRef}>
          <About
            heading="About Ivan Bilan"
            content="I have over 3 years of experience building web and mobile applications. I am passionate about delivering high-quality solutions for complex tasks, and constantly improving my skills. I'm always exploring and learning new, trending technologies to ensure my work remains cutting-edge and impactful."
          />
        </div>

        <div ref={experienceRef}>
          <Experience
            heading="Experience"
            positions={[
              {
                company: "Clearabee",
                title: "Software Developer",
                from: dayjs("2023-01-23"),
                to: dayjs(),
                description:
                  "Created and maintained multiple web and mobile applications. Deployed, and debugged project infrastructure using AWS services like Lambda, S3, CloudWatch, SNS, SQS. Ensured scalability and performance optimization for the projects.",
                image: {
                  width: 150,
                  height: 150,
                  src: clearabee,
                  alt: "Clearabee",
                },
              },
              {
                company: "Self-employed",
                title: "Front End Developer",
                from: dayjs("2022-02-01"),
                to: dayjs("2022-11-30"),
                description:
                  "Communicated effectively with clients to gather requirements, provide updates, and ensure satisfaction with the final deliverables. Managed version control using Git.",
                image: {
                  width: 150,
                  height: 150,
                  src: selfEmployed,
                  alt: "Self-employed",
                },
              },
            ]}
          />
        </div>

        <div ref={skillsRef}>
          <Skills
            heading="Skills"
            skills={[
              "React",
              "TypeScript",
              "JavaScript",
              "AWS",
              "Next.JS",
              "React Native",
              "HTML",
              "CSS",
              "TailWind CSS",
              "Node.js",
              "Git",
              "WordPress",
              "SQL",
              "RESTful APIs",
              "Agile",
            ]}
          />
        </div>

        <div ref={educationRef}>
          <Education
            heading="Education"
            education={[
              {
                title: "Bachelor of Science in Cybersecurity",
                university: "National Aviation University",
                from: dayjs("2021-09-01"),
                to: dayjs("2025-04-01"),
                image: {
                  width: 100,
                  height: 100,
                  src: nau,
                  alt: "National Aviation University",
                },
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
