import  { useEffect, useRef } from "react";
import Container from "../../../components/Container/Container";
import { SiReactivex } from "react-icons/si";
import { AiFillDashboard, AiOutlineMobile } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";

const Services = () => {
  const cardRef = useRef(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="mt-20" id="services">
      <Container>
        <div
          className="grid md:grid-cols-5 gap-5 items-center"
        >
          <h2 className="text-gray-100 text-3xl md:text-5xl col-span-2 font-bold">
          Discover my expert services! Let's explore them together
          </h2>

          <p className="text-gray-200 col-span-3 text-lg">
            
My services are designed for businesses in need of full-stack solutions using React, Python, and Django to build outstanding user experiences, responsive websites, beautiful interfaces, and scalable applications. I provide expert development, consulting, and support throughout the entire development process, making it effortless for you to achieve your goals.

          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-16 gap-10">
          <div
          >
            <Tilt className="bg-[#091530] cursor-pointer rounded-md  p-10">
              <div className="bg-[#dbed1a1f] inline-block p-5 rounded-full mb-5">
                <SiReactivex className="text-5xl text-[#DAED1A]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-200">
                Custom Full-Stack Development Solutions
              </h2>
              <p className="text-gray-200 my-5">
                Crafting tailored web applications using React, Python, and Django that meet your business needs with precision, scalability, and modern design.

              </p>
              
            </Tilt>
          </div>

          <div
          >
            <Tilt className="bg-[#091530] cursor-pointer rounded-md  p-10">
              <div className="bg-[#dbed1a1f] inline-block p-5 rounded-full mb-5">
                <AiOutlineMobile className="text-5xl text-[#DAED1A]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-200">
                Responsive Full-Stack Web Development
              </h2>
              <p className="text-gray-200 my-5">
                Building responsive and mobile-friendly web applications using React, Python, and Django to ensure optimal performance across all devices.
              </p>
              
            </Tilt>
          </div>

          <div
          >
            <Tilt className="bg-[#091530] cursor-pointer rounded-md  p-10">
              <div className="bg-[#dbed1a1f] inline-block p-5 rounded-full mb-5">
                <AiFillDashboard className="text-5xl text-[#DAED1A]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-200">
                Full-Stack Performance Optimization
              </h2>
              <p className="text-gray-200 my-5">
               Optimizing applications built with React, Python, and Django to ensure faster load times, smooth user interactions, and overall high performance and scalability.

              </p>
              
            </Tilt>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
