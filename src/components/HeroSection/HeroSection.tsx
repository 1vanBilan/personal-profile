import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  name: string;
  subheading: string;
  image: StaticImageData;
  buttons?: {
    text: string;
    onClick?: () => void;
  }[];
  links?: {
    component: React.ReactElement;
    link: string;
  }[];
}

export const HeroSection = ({
  name,
  subheading,
  image,
  buttons,
  links,
}: HeroSectionProps) => {
  return (
    <section>
      <div className="flex lg:items-left items-center flex-col lg:flex-row lg:justify-between">
        <div className="flex lg:items-start text-center sm:text-left items-center flex-col my-20 lg:my-32">
          <h1 className="text-[40px] sm:text-[65px]">
            Hi, I&apos;m <span className="text-accent">{name}</span>,
          </h1>
          <h2 className="text-3xl">{subheading}</h2>
        </div>
        <Image src={image} height={400} width={400} alt="heroImage" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-8 gap-4 md:gap-4">
          {buttons &&
            buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className="hover:bg-accent hover:text-black duration-300 border-accent border-2 py-1 px-8 rounded-3xl"
              >
                {button.text}
              </button>
            ))}
        </div>
        <div className="flex gap-8 mt-8 lg:mt-0 lg:mr-20">
          {links?.map((link, key) => (
            <Link key={key} href={link.link}>
              {link.component}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex lg:justify-start justify-center mt-8 lg:mt-6">
        <a
          href="/IVAN_BILAN_CV.pdf"
          download
          className="text-black duration-300 bg-accent py-3 px-8 rounded-3xl font-semibold flex gap-3"
        >
          Download my CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
          >
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
        </a>
      </div>
    </section>
  );
};
