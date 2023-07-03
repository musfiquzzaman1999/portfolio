import  { useEffect, useRef } from "react";
import Container from "../Container/Container";
import { motion, useAnimation } from "framer-motion";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ x: 0, opacity: 1 });
        }
      });
    }, options);

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [controls]);
  return (
    <div className="mt-28">
      <Container>
        <div>
          <div
            className="text-gray-200 text-center"
          >
            <h2 className="text-gray-100 text-3xl md:text-5xl font-bold mb-5">
              Let's Check my Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              
I've been working on some thrilling projects recently, demonstrating my abilities as a developer. From crafting interactive web applications to designing user-friendly interfaces, my recent projects showcase my enthusiasm for creating meaningful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 mt-10 gap-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project1}
                  alt="project 1"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">ExtraLearn</h2>
                <p className="text-gray-300">
                ExtraLearn,the inclusive online learning platform,offers accessible education with a user friendly
interface,robust backend,and secure authentication for all.
                </p>
                <div className="mt-5">
                  <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-2">
                      <Link
                        to="https://github.com/musfiquzzaman1999/Summer-Camp1"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Client <FaGithub />
                      </Link>{" "}
                      <Link
                        to="https://github.com/musfiquzzaman1999/Summer-Camp-server1"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Server <FaGithub />
                      </Link>
                    </div>
                    <Link
                      to="https://summer-camp-f4931.web.app/"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      Live Demo <BsBoxArrowInUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project2}
                  alt="project 2"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">Safari Squad</h2>
                <p className="text-gray-300">
                This is a toy animals website allows users to explore,purchase, andsell toy cars.It offers a seamless browsing
experience with a wide section of products.
                </p>
                <div className="mt-5">
                  <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-2">
                      <Link
                        to="https://github.com/musfiquzzaman1999/marketplace-toy"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Client <FaGithub />
                      </Link>{" "}
                      <Link
                        to="https://github.com/musfiquzzaman1999/marketplace-toy-server"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Server <FaGithub />
                      </Link>
                    </div>
                    <Link
                      to="https://toy-market-place-26dab.web.app/"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      Live Demo <BsBoxArrowInUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#091530] p-5 rounded-xl border border-gray-700"
            >
              <div className="w-full h-[250px] mb-5">
                <img
                  className="w-full h-full object-cover rounded-xl object-top transition-all duration-1000 ease-in-out hover:object-bottom"
                  src={project3}
                  alt="project 3"
                />
              </div>
              <div className="text-gray-200">
                <h2 className="text-3xl font-bold mb-3">Plateful</h2>
                <p className="text-gray-300">
                This website is designed for food lovers who are passionate about learning cooking.Users can search for
recipes,but to access and view any recipe,they need to go through an authentication process.
                </p>
                <div className="mt-5">
                  <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-2">
                      <Link
                        to="https://github.com/musfiquzzaman1999/chef-recipe"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        Client <FaGithub />
                      </Link>{" "}
                      <Link
                        to="https://github.com/musfiquzzaman1999/chef-recipe-server"
                        className="flex items-center gap-2"
                      >
                        Server <FaGithub />
                      </Link>
                    </div>
                    <Link
                      to="https://chef-recipe-hunter-server.web.app/"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      Live Demo <BsBoxArrowInUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
