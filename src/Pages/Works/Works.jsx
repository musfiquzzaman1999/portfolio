import React from "react";
import Container from "../../components/Container/Container";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const  Works = () => {
  return (
    <div className="py-20 h-auto text-gray-200">
      <div className="text-center bg-[#091530] py-10">
        <h2 className="text-5xl font-bold mb-3">Recent Works</h2>
        <p className="max-w-xl mx-auto">
          There is my recent work. This projects is build my confident and This
          projects when i create it gain my experience
        </p>
      </div>
      <Container>
        <div className="mt-20 flex flex-col gap-10">
          <div className="grid md:grid-cols-2 items-center gap-10 border p-5 rounded-xl border-gray-700">
            <div className="w-full h-[500px]">
              <img
                src={project1}
                alt="project1"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">ExtraLearn</h2>
              <p>
                {" "}
                ExtraLearn,the inclusive online learning platform,offers accessible education with a user friendly
interface,robust backend,and secure authentication for all.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Router
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Firebase
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  MongoDB
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  JWT
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Query
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Axios
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  TailwindCSS
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
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


          <div className="grid md:grid-cols-2 items-center gap-10 border p-5 rounded-xl border-gray-700">
            <div className="w-full h-[500px]">
              <img
                src={project2}
                alt="project2"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">Safari Squad</h2>
              <p>
                {" "}
                This is a toy animals website allows users to explore,purchase, andsell toy cars.It offers a seamless browsing
experience with a wide section of products.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Router
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Firebase
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  MongoDB
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  TailwindCSS
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
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


          <div className="grid md:grid-cols-2 items-center gap-10 border p-5 rounded-xl border-gray-700">
            <div className="w-full h-[500px]">
              <img
                src={project3}
                alt="project3"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5">Plateful</h2>
              <p>
                {" "}
                This website is designed for food lovers who are passionate about learning cooking.Users can search for
recipes,but to access and view any recipe,they need to go through an authentication process.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Router
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Firebase
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  MongoDB
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  JWT
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  React Query
                </span>
                <span className="bg-[#16203B] rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                  Axios
                </span>
              </div>

              <div className="mt-5 flex gap-20 items-center text-xl ">
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
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Server <FaGithub />
                  </Link>
                </div>
                <Link
                  to="https://github.com/musfiquzzaman1999/chef-recipe-server"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Live Demo <BsBoxArrowInUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Link to="https://github.com/musfiquzzaman1999?tab=repositories" target="_blank" className="flex items-center justify-center mt-10">
        <motion.div whileHover={{scale: 1.1}}>
          <button className="bg-[#16203B] py-4 px-10 rounded-lg hover:bg-[#1b2647]">
            Show more
          </button>
        </motion.div>
      </Link>
    </div>
  );
};

export default Works;
