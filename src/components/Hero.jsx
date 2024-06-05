import Button from "./Button";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Hero = () => {
  return (
    <section id="hero">
      <div className="pb-20 pt-36">
        {/* GRID BACKGROUND */}
        <div
          className="h-[70vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex relative justify-center my-20 z-10">
          <div className="max-w-[80vw] flex flex-col items-center justify-center">
            <h3 className="uppercase tracking-widest text-gray-200">
              Hi! I&apos;m Mateo.
            </h3>

            <TextGenerateEffect
              words="I Create Seamless User Experiences with Modern Web Technologies."
              className="text-white tracking-wider font-bold sm:text-[40px] text-3xl text-center py-3"
            />
            <h2 className="text-white text-center tracking-wide mb-3">
              Front-End Developper based in France.
            </h2>
            <a href="#projects">
              <Button
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
