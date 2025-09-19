import { brandData, ourProject, content } from "../data";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import WebIcon from '@mui/icons-material/Web';
import BrushIcon from '@mui/icons-material/Brush';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SettingsIcon from '@mui/icons-material/Settings';
import PrintIcon from '@mui/icons-material/Print';
import SourceIcon from '@mui/icons-material/Source';
// import {LocalBeauty} from '@mui/icons-material'
import { useRef, useState } from 'react'
import { ShoppingCart, Style, SportsSoccer, LocalShipping, Fastfood, DirectionsCar, AirplaneTicket, TrendingUp, Create, Build, Storefront } from '@mui/icons-material';
import { motion } from "framer-motion";


const digitalToolkit = [
  { icon: <MobileScreenShareIcon fontSize="large" />, name: "Social Media Marketing" },
  { icon: <WebIcon fontSize="large" />, name: "Website Development" },
  { icon: <BrushIcon fontSize="large" />, name: "Logo Designing" },
  { icon: <BrushIcon fontSize="large" />, name: "Graphic Designing" },
  { icon: <GroupIcon fontSize="large" />, name: "Digital Marketing" },
  { icon: <StarIcon fontSize="large" />, name: "Influencer Marketing" },
  { icon: <SourceIcon fontSize="large" />, name: "Content Writing" },
  { icon: <ThumbUpIcon fontSize="large" />, name: "Google/Facebook Reviews" },
  { icon: <SettingsIcon fontSize="large" />, name: "Search Engine Optimization" },
  { icon: <PrintIcon fontSize="large" />, name: "Printing" },
];

const IndustryName = [
  { industriesName: "E-commerce", icon: < ShoppingCart fontSize="large" /> },
  { industriesName: "Fashion", icon: < Style fontSize="large" /> },
  { industriesName: "Sports", icon: < SportsSoccer fontSize="large" /> },
  { industriesName: "Packaging", icon: < LocalShipping fontSize="large" /> },
  { industriesName: "Food", icon: < Fastfood fontSize="large" /> },
  { industriesName: "Automobile", icon: < DirectionsCar fontSize="large" /> },
  { industriesName: "Travel", icon: < AirplaneTicket fontSize="large" /> },
  // { industriesName: "Beauty", icon: < LocalBeauty fontSize="large" /> },
  { industriesName: "Trading", icon: < TrendingUp fontSize="large" /> },
  { industriesName: "Blogging", icon: < Create fontSize="large" /> },
  { industriesName: "SaaS", icon: < Build fontSize="large" /> },
];

export const ShowCaseCart = () => {

  return (
    <>

      <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight text-blue leading-snug mt-[5rem] m-7">
        We Are Growth Partners to <span className="text-secondary-blue"> 20+ Leading Brands</span>
      </h2>
      <p className="text-center text-2xl md:text-2xl mb-3 text-text-light">Helping clients around the world to
        launch their businesses</p>

      {/* <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mt-8 relative group w-full max-w-3xl mx-auto p-1 rounded-xl border-2 border-dark-gray bg-white shadow-lg transition-all duration-1000 hover:shadow-2xl"
      >
        <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-1000 group-hover:border-primary-blue group-hover:shadow-[0px_0px_15px_rgba(0,123,255,0.6)]"></div>

        <div className="relative z-10 text-center space-y-2 p-3">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-dark-gray"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-dark font-semibold"
          >
            <span className="text-primary-blue">Expertise You Can Count On:</span>{" "}
            With years of experience in web development and design, we understand
            how to create solutions that work for your business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-text-dark font-semibold"
          >
            <span className="text-secondary-blue">A Customer-First Approach:</span>{" "}
            We focus on your needs, ensuring that every project we deliver meets
            your unique vision and goals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-text-dark font-semibold"
          >
            <span className="text-cta-hover">Proven Results:</span> Join hundreds
            of satisfied clients who trust Micro Sonic for their digital success.
          </motion.p>
        </div>
      </motion.div> */}


      <div className="flex flex-wrap justify-center gap-12">
        {brandData.map(({ image, name }, index) => (
          <div
            key={index}
            className="group w-48 rounded-lg p-4 bg-half-white ring-1 ring-dark-gray shadow-lg transition duration-100 hover:ring-4 hover:ring-secondary-blue hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-dark-gray hover:scale-105 hover:shadow-xl transition-transform duration-300">
              <img
                src={image}
                alt={name}
                className="w-full h-20 object-contain bg-half-white"
              />
            </div>
          </div>
        ))}
      </div>




      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[4rem] mt-[4rem] mb-20">
          {ourProject.map(({ image }, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md h-[350px] w-[300px] group"
            >
              <img
                src={image}
                alt="Long Image"
                className="cursor-pointer absolute top-0 left-0 w-full transition-transform duration-500 group-hover:translate-y-[-65%]"
              />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export const IndustryPonits = () => {
  return (
    <>
      <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-white leading-snug m-20">
        <span className="text-secondary-blue text-[33px]">Industries We Worked For</span>
      </h2>

      <p className="text-center text-sm sm:text-base md:text-lg text-text-light mt-4">
        <strong className="text-[29px]">Our Commitment to You:</strong>
      </p>

      <ul className="text-center text-[25px]  text-text-light mt-2 space-y-2">
        <li>✔ 100% satisfaction guarantee: We're not happy until you are.</li>
        <li>✔ Certified and trusted: Micro Sonic adheres to industry-leading security and quality standards.</li>
        <li>✔ Proven track record: Over <strong>2 years</strong> of delivering successful web development projects.</li>
      </ul>

      <div className="cursor-pointer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center mt-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-screen-lg mx-auto">
        {IndustryName.map(({ industriesName, icon }, index) => (
          <div key={index} className="flex flex-col items-center relative group w-full sm:w-40 md:w-48 lg:w-56">
            <div className="relative w-full h-32 bg-gradient-to-r from-gray-300 to-gray-500 shadow-xl rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:translate-y-2 flex flex-col items-center justify-center">
              <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                {icon}
              </div>
              <p className="text-center text-white font-bold text-sm sm:text-lg transition-all group-hover:text-black mt-2">
                {industriesName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
//-----------------------------


export function ServiceCards() {
  return (
    <>
      <h2 className="mt-8 sm:mt-10 text-center text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
        <span className="text-secondary-blue">Our Digital Toolkit</span>
      </h2>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 px-4 m-4 pb-5">
        {digitalToolkit.map((service, index) => (
          <div key={service.name}>
            <DigitalToolkit service={service} id={`service-${index}`} />
          </div>
        ))}
      </div>
    </>
  );
  
}

function DigitalToolkit({ service, id }) {
  const handleScrollToSection = () => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="cursor-pointer animate-pulse bg-dark-gray group block w-full sm:w-40 md:w-48 lg:w-56 h-48 sm:h-52 md:h-60 mx-auto rounded-lg p-3 sm:p-4 bg-half-white ring-1 ring-secondary-blue shadow-lg transition-all duration-500"
      onClick={handleScrollToSection}
    >
      <div className="flex flex-col items-center text-white space-y-3 sm:space-y-4 transform transition-all hover:scale-105">
        <div className="bg-gradient-to-r from-secondary-blue to-primary-blue p-3 sm:p-4 rounded-full shadow-lg">
          {service.icon}
        </div>
        <p
          className="text-center text-sm sm:text-base md:text-lg font-bold text-white animate-fadeIn"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), 4px 4px 8px rgba(0, 123, 255, 0.2)",
          }}
        >
          {service.name}
        </p>
      </div>
    </div>
  );
}


