import { randomProjects, iconLists } from "./data";
import { useEffect, useState } from "react";
import { FaArrowsRotate, FaLocationArrow } from "react-icons/fa6";
import { Button } from "./ui/MagicBorder";

const RandomProjects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    setProject(chooseProjects());
  }, []);

  const chooseProjects = () => {
    let projects = [];
    for (let i = 0; i < 6; i++) {
      let titleProject = randomProjects[Math.floor(Math.random() * 49)];

      while (projects.includes(titleProject))
        titleProject = randomProjects[Math.floor(Math.random() * 49)];

      projects.push(titleProject);
    }
    return projects;
  };
  const randomize = () => {
    setProject(chooseProjects());
  };

  return (
    <section id="random">
      <div className="py-20 w-full">
        <div className="flex justify-center lg:flex-row flex-col items-center gap-8">
          <h1 className="heading text-white">
            Some <span className="text-red">random</span> projects
          </h1>
          <button
            className="text-red heading cursor-pointer"
            onClick={randomize}
          >
            <FaArrowsRotate />
          </button>
        </div>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 text-center">
          {projects.map((project) => (
            <Button
              key={project.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-black-200 dark:border-black-300 cursor-default"
            >
              <div
                key={project.id}
                className="flex lg:flex-row flex-col justify-center lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 lg:w-full"
              >
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="lg:ms-5">
                  <h1 className="text-white text-start text-xl md:text-2xl font-bold">
                    {project.title}
                  </h1>
                  <a
                    className="text-red text-start text-white-100 mt-3 font-semibold flex gap-2 items-center"
                    href={project.link}
                  >
                    Check Live Site
                    <FaLocationArrow />
                  </a>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomProjects;
