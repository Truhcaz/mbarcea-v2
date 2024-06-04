import { projects } from "./data/index";
import { FaLocationArrow } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "./ui/3DCard";
const Projects = () => {
  return (
    <section id="projects">
      <div className="py-20 relative">
        <h1 className="heading text-white">
          A selection of <span className="text-red">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-0">
          {/* projets  */}
          {projects.map((item) => (
            <CardContainer
              className="min-h-[32.5rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-red/[0.1] bg-black-100 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[30vh]">
                  <CardItem
                    translateZ="50"
                    className="mt-4 w-full h-full lg:rounded-3xl"
                  >
                    <img
                      src={item.img}
                      alt="cover"
                      width={400}
                      height={200}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                </div>
                <CardItem
                  as="h1"
                  translateZ="60"
                  className="font-bold lg:text-2xl md:text-xl text-base text-white line-clamp-1"
                >
                  {item.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="50"
                  className="lg:text-xl lg:font-normal font-light text-l line-clamp-2 min-h-[3rem]"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </CardItem>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <CardItem translateZ={30} className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    className="flex justify-center items-center"
                  >
                    <a
                      className="flex lg:text-xl md:text-xs text-sm text-red"
                      href={item.link}
                      target="_blank"
                    >
                      Check Live Site
                    </a>
                    <FaLocationArrow className="ms-3" color="#ec684a" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
