"use client";
import type { FC } from "react";
import Link from "next/link";

interface HeroProps {
  title?: string;
  highlightedText?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

const Hero: FC<HeroProps> = ({
  title = "PHYSICS MADE",
  highlightedText = "SIMPLE",
  description = "Welcome to a space where physics becomes simple, fun, and easy to grasp.",
  primaryButtonText = "ENROLL NOW",
  secondaryButtonText = "LEARN MORE",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
}) => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 py-20 md:py-32">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span className="text-white">{title} </span>
        <span className="text-yellow-400 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
          {highlightedText}
        </span>
      </h1>

      <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={primaryButtonLink}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/30 text-lg"
        >
          {primaryButtonText}
        </Link>

        <Link
          href={secondaryButtonLink}
          className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg"
        >
          {secondaryButtonText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
