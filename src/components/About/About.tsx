import React from "react";
import Image from "next/image";
import avatar from "../../../public/ivan-bilan.jpg";

interface AboutProps {
  heading: string;
  content: string;
}

export const About = ({ heading, content }: AboutProps) => {
  return (
    <section>
      <h3 className="text-accent text-3xl mb-10 lg:mb-0">{heading}</h3>
      <div className="flex flex-col-reverse sm:flex-row gap-14 lg:gap-28 items-center">
        <p className="text-xl">{content}</p>
        <Image
          src={avatar}
          alt="avatar"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
    </section>
  );
};
