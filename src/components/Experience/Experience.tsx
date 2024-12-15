import React from "react";
import Image, { StaticImageData } from "next/image";
import dayjs, { Dayjs } from "dayjs";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

interface ExperienceProps {
  heading: string;
  positions: {
    title: string;
    company: string;
    from: Dayjs;
    to: Dayjs;
    description: string;
    image?: ImageProps;
  }[];
}

const calculateFriendlyDuration = (from: Dayjs, to: Dayjs) => {
  const duration = to.diff(from, "month");
  const years = Math.floor(duration / 12);
  const months = duration % 12;
  const isMonthPlural = months > 1;
  const isYearPlural = years > 1;

  if (years === 0) {
    return `${months} month${isMonthPlural ? "s" : ""}`;
  }

  return `${years} year${isYearPlural ? "s" : ""} ${months} month${
    isMonthPlural ? "s" : ""
  }`;
};

export const Experience = ({ heading, positions }: ExperienceProps) => {
  return (
    <section>
      <h3 className="text-4xl mb-10">{heading}</h3>
      <div className="flex flex-col gap-10">
        {positions.map((position, index) => {
          const isCurrent = position.to.isSame(dayjs(), "date");

          return (
            <div
              className="flex xs:flex-row flex-col xs:items-center gap-5"
              key={index}
            >
              {position.image && (
                <Image
                  src={position.image.src}
                  alt={position.image.alt}
                  className="rounded-md"
                  style={{
                    width: position.image.width,
                    height: position.image.height,
                  }}
                />
              )}
              <div>
                <h4 className="text-accent text-lg font-semibold">
                  {position.title}
                </h4>
                <h5 className="xs:my-0 my-2">{position.company}</h5>
                <p className="xs:my-0 my-2">
                  {position.from.format("MMMM YYYY")} -{" "}
                  {isCurrent ? "Present" : position.to.format("MMMM YYYY")} (
                  {calculateFriendlyDuration(position.from, position.to)})
                </p>
                <p>{position.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
