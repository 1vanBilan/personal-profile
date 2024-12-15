import React from "react";
import Image, { StaticImageData } from "next/image";
import { Dayjs } from "dayjs";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

interface EducationProps {
  heading: string;
  education: {
    title: string;
    university: string;
    from: Dayjs;
    to: Dayjs;
    image?: ImageProps;
  }[];
}

export const Education = ({ heading, education }: EducationProps) => {
  return (
    <section>
      <h3 className="text-4xl mb-10">{heading}</h3>
      <div className="flex flex-col gap-10">
        {education.map((item, index) => {
          return (
            <div className="flex items-start gap-5" key={index}>
              {item.image && (
                <div className="flex items-center">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    className="rounded-md"
                    width={item.image.width}
                    height={item.image.height}
                  />
                </div>
              )}
              <div>
                <h4 className="text-accent text-lg font-semibold">
                  {item.title}
                </h4>
                <h5>{item.university}</h5>
                <p>
                  {item.from.format("MMMM YYYY")} -{" "}
                  {item.to.format("MMMM YYYY")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
