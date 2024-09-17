import React from "react";
import Navbar from "../components/Navbar";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { Button, Card, Image, CardFooter } from "@nextui-org/react";

function LandingPage() {
  return (
    <>
      <div className="w-[50%] h-screen rounded-full bg-colorFour absolute left-[-20%] z-0 scroll-smooth"></div>

      <div
        id="home"
        className="flex w-full h-screen justify-center items-center md:py-12 py-4 overflow-hidden md:px-0 px-2 relative"
      >
        <div className="bg-bgColor w-full md:w-[80%] md:h-[85vh] h-auto  shadow-2xl flex flex-col justify-center md:pt-12 pt-6 overflow-hidden">
          <div className="flex justify-center md:h-[10%] pb-8 md:pb-0">
            <Navbar />
          </div>

          {/* Landing Page starts from here */}

          <div className="hidden w-full h-[90%] md:flex flex-col md:flex-row items-center">
            <div className="h-full md:w-[50%] p-8 pl-14 font-myFont text-white overflow-hidden">
              <div className="pl-8">
                <p className="font-myFont text-colorThree text-2xl font-bold pb-2">
                  Hi there
                </p>
                <h1 className="text-4xl md:text-7xl pt-2">
                  I'm <span className="text-colorFour">Anil Pan</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-myFont pt-3 font-bold">
                  Fullstack Developer
                </h2>
                <p className="text-2xl md:text-4xl font-myFont pt-6 font-bold">
                  Expertise in &nbsp;
                  <ReactTyped
                    className=""
                    strings={["MongoDB", "Express", "React", "Node"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    cursorChar="."
                  />
                </p>

                <p className="absolute pt-4 text-lg font-light ">
                  Crafting seamless digital experiences, I'm Anil, a full stack
                  MERN developer and coder extraordinaire. <br /> With a passion
                  for innovation and a knack for turning ideas into reality, I
                  bring creativity and <br /> functionality together in perfect
                  harmony. Let's build the future, one line of code at a time.
                </p>
                <div className=" pt-32 flex justify-end text-black">
                  <a href="#projects">
                    <Button
                      color="primary"
                      variant="ghost"
                      className="bg-colorThree rounded-md px-8 mr-4 border-2"
                    >
                      Explore projects
                    </Button>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/19fFXs0AMD9qYCPGgrxjmffuNRyWl7Wx9/view?  usp=sharing"
                    target="_blank"
                  >
                    <Button
                      color="primary"
                      variant="ghost"
                      className="bg-colorThree rounded-md px-8 border-2"
                    >
                      View Resume
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-full md:w-[45%] flex justify-center items-center pr-8 ">
              <div>
                <img
                  src="/myPhoto.png"
                  alt="Anil Pan"
                  className=" md:h-[30rem] md:w-[24rem]"
                />
              </div>
            </div>
            <div className="max-w-[5%] h-full flex py-12">
              <ul className="flex flex-col justify-around items-center text-colorFour cursor-pointer">
                <li className="hover:text-colorThree">
                  <a
                    href="https://www.linkedin.com/in/anil-pan-112926220/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={25} className="" />
                  </a>
                </li>
                <li className="hover:text-colorThree">
                  <a
                    href="https://github.com/anilpan111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={25} />
                  </a>
                </li>
                <li className="hover:text-colorThree">
                  <SiGmail size={25} />
                </li>
                <li className="hover:text-colorThree">
                  <a
                    href="https://www.instagram.com/anill.fr?igsh=MXU5MWF6bjF4aTN2eA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={25} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Landing page  for mobile view  */}

          <div className="md:hidden w-full h-auto bg-custom-image bg-no-repeat bg-top bg-contain ">
            <div className="h-full    font-myFont text-white overflow-hidden ">
              <div className="mt-64 bg-black bg-opacity-50 shadow-xl  px-6 py-2">
                <p className="font-myFont text-colorThree text-xl font-bold ">
                  Hi there
                </p>
                <h1 className=" md:text-7xl text-4xl ">
                  I'm <span className="text-colorFour text-5xl">Anil Pan</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-myFont pt-4 font-bold">
                  Fullstack Developer
                </h2>
                <p className="text-2xl md:text-4xl font-myFont pt-4 font-bold">
                  Expertise in &nbsp;
                  <ReactTyped
                    className=""
                    strings={["MongoDB", "Express", "React", "Node"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    cursorChar="."
                  />
                </p>
                <p className="absolute pt-4 text-sm font-light text-colorFour">
                  Crafting seamless digital experiences, I'm Anil, a full stack
                  MERN developer and coder extraordinaire. <br /> With a passion
                  for innovation and a knack for turning ideas into reality, I
                  bring creativity and <br /> functionality together in perfect
                  harmony. Let's build the future, one line of code at a time.
                </p>
                <div className=" pt-44 flex justify-end text-black ">
                  <a href="#projects">
                    <Button
                      color="primary"
                      variant="ghost"
                      className="bg-colorThree rounded-md px-8 ml-2"
                    >
                      Explore projects
                    </Button>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/19fFXs0AMD9qYCPGgrxjmffuNRyWl7Wx9/view?  usp=sharing"
                    target="_blank"
                  >
                    <Button
                      color="primary"
                      variant="ghost"
                      className="bg-colorThree rounded-md px-8 ml-2"
                    >
                      View Resume
                    </Button>
                  </a>
                </div>
                <div className="w-full h-12 ">
                  <ul className="flex justify-around items-center mt-4 mb-2 text-colorFour cursor-pointer">
                    <li className="hover:text-colorThree">
                      <a
                        href="https://www.linkedin.com/in/anil-pan-112926220/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={25} className="" />
                      </a>
                    </li>
                    <li className="hover:text-colorThree">
                      <a
                        href="https://github.com/anilpan111"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={25} />
                      </a>
                    </li>
                    <li className="hover:text-colorThree">
                      <SiGmail size={25} />
                    </li>
                    <li className="hover:text-colorThree">
                      <a
                        href="https://www.instagram.com/anill.fr?igsh=MXU5MWF6bjF4aTN2eA=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={25} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction page  */}

      <div
        id="about"
        className="h-auto w-full bg-colorFive md:flex md:p-8 pt-8 px-4"
      >
        <div className="md:w-[30%]  h-full">
          <div className="w-full justify-center flex md:mt-16">
            <img
              src="/pic2.jpeg"
              alt="profile"
              className="w-64 h-64 object-cover rounded-full cursor-pointer hover:w-80 hover:h-80 ease-in-out duration-500 border-1 hover:border-8 border-black "
            />
          </div>
          <div className="text-center font-myFont mt-4 text-colorEight">
            <h1 className="text-5xl mb-3">Anil Pan</h1>
            <h2 className="text-2xl mb-2">Software Developer</h2>
            <p className="text-lg font-bold">
              "Code is like humor. When you have to explain it, it’s bad." –
              Cory House
            </p>
          </div>
        </div>
        <div className="md:w-[70%] h-auto  text-colorEight grid md:grid-cols-3 grid-cols-1">
          <div className=" mx-8 mt-16 md:mb-24 rounded-sm bg-black/50 backdrop-blur-xl text-center py-12 px-2 shadow-2xl hover:mx-4 ease-in-out duration-500 ">
            <span className="text-2xl font-bold">Hii, i'm Anil </span> and i
            am from a very beautiful and culturaly rich state Jharkhand.
            Recently i have completed my masters degree from SOA, ITER
            Bhubaneswar in Computer Application. I have done my BCA degree from
            Trident Academy of technology Bhubaneswar. I am very good at
            programming and problem solving and my goal is to become an
            established engineer in the field of computer science. Thats all
            about myself.
          </div>
          <div className="bg-black/50 backdrop-blur-xl  mx-8 md:mt-32 mt-14 md:mb-12 text-center py-12 px-2 hover:mx-4 ease-in-out duration-500">
            I’m a passionate full-stack developer with expertise in the MERN
            stack. I specialize in building dynamic, responsive web applications
            using React, Node.js, Express, and MongoDB. With a strong focus on
            clean, efficient code and scalable solutions, I create seamless user
            experiences while constantly learning and evolving as a developer.My
            passion lies in solving complex problems and continuously improving
            my development skills.
          </div>
          <div className="bg-black/50 backdrop-blur-xl mx-8 mt-16 mb-24 text-center py-12 px-2 hover:mx-4 ease-in-out duration-500">
            <span className="text-2xl font-bold">Skills & Technologies</span>
            <p className="mt-4">
              Here are some of the tools and technologies I specialize in:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              <li>💻 React</li>
              <li>🌐 Node.js</li>
              <li>📊 MongoDB</li>
              <li>⚙️ Express</li>
              <li>🎨 Tailwind CSS</li>
              <li>🚀 Git & GitHub</li>
              <li>☁️ Cloudinary</li>
              <li>🔐 JWT Authentication</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects page  */}

      <div id="projects" className="h-auto w-full bg-colorNine">
        <h1 className="font-myFont text-5xl text-center h-[10%] w-full pt-4 border-b-2 items-center text-colorEight">
          My Top Projects
        </h1>
        <div className="max-h-[90%] w-full md:px-12 py-2">
          <ul className="grid md:grid-cols-3 grid-cols-1">
            <li className=" w-full ">
              <div className="bg-colorTen m-8 rounded-xl">
                <div className="flex justify-center w-full pt-2">
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none  h-96 w-72"
                  >
                    <Image
                      alt="Woman listing to music"
                      className="object-fill h-96 w-72 rounded-lg"
                      // height={200}
                      src="https://images.pexels.com/photos/3612707/pexels-photo-3612707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      // width={200}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">TrailTube</p>
                      <a
                        href="https://trailtubeapp.netlify.app/"
                        target="blank"
                      >
                        <Button
                          className="text-tiny text-white bg-black/20 rounded-lg"
                          variant="flat"
                          color="default"
                          radius="lg"
                          size="lg"
                        >
                          View
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </div>
                <p className="text-sm text-center mt-4 px-4 pb-2 bg-black opacity-50 text-white">
                  <span className="font-bold text-xl">TrailTube</span> is an
                  innovative video streaming platform . TrailTube supports video
                  uploads, allows users to like and interact with videos, and
                  provides a responsive interface designed with ReactJS and
                  Tailwind CSS. With a robust backend powered by Express and
                  MongoDB, TrailTube ensures smooth and efficient video
                  streaming for all users.
                </p>
              </div>
            </li>
            <li className=" w-full ">
              <div className="bg-colorTen m-8 rounded-xl">
                <div className="flex justify-center w-full pt-2">
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none  h-96 w-72"
                  >
                    <Image
                      alt="Woman listing to music"
                      className="object-fill h-96 w-72 rounded-lg"
                      // height={200}
                      src="https://images.pexels.com/photos/7703268/pexels-photo-7703268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      // width={200}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">Time Tracer</p>
                      <Button
                        className="text-tiny text-white bg-black/20 rounded-lg"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="lg"
                      >
                        View
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <p className="text-sm text-center mt-4 px-4 pb-2 bg-black opacity-50 text-white">
                  <span className="font-bold text-xl">Time Tracer</span> is a
                  feature-rich web application built using the MERN stack,
                  designed to help users monitor and manage their daily routines
                  and activities effectively. It tracks time spent on various
                  tasks and generates detailed summaries, offering valuable
                  insights into productivity patterns and time management.
                </p>
              </div>
            </li>
            <li className=" w-full ">
              <div className="bg-colorTen m-8 rounded-xl">
                <div className="flex justify-center w-full pt-2">
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none  h-96 w-72"
                  >
                    <Image
                      alt="Woman listing to music"
                      className="object-fill h-96 w-72 rounded-lg"
                      // height={200}
                      src="https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      // width={200}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">Bookish Haven</p>
                      <Button
                        className="text-tiny text-white bg-black/20 rounded-lg"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="lg"
                      >
                        View
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <p className="text-sm text-center mt-4 px-4 pb-2 bg-black opacity-50 text-white">
                  <span className="font-bold text-xl">Bookish Haven</span> is an
                  online bookstore built with the MERN stack, offering a
                  seamless experience for book lovers. With a responsive React
                  frontend, Node.js and Express backend, and MongoDB for data
                  management, users can explore, purchase, and manage books
                  effortlessly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact page  */}

      <div id="contact" className="h-screen w-full bg-green-50">
        <div className="relative flex items-top justify-center min-h-[700px] bg-[#283346] sm:items-center sm:pt-0 overflow-hidden">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                  <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                    Get in touch:
                  </h1>
                  <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div className="flex items-center mt-8 text-gray-600">
                    <FaLocationDot size={30} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      Bhubaneswar,Odisha
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-600">
                    <IoCall size={30} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +91 7363347054
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-600">
                    <SiGmail size={30} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      anilpan336@gmail.com
                    </div>
                  </div>
                </div>

                <form className="p-6 flex flex-col justify-center">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="md:w-32 bg-[#00df9a] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#49aa8b] transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
