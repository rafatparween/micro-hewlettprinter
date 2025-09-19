import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import SecurityIcon from '@mui/icons-material/Security';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockClockIcon from '@mui/icons-material/LockClock';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
////---------------------------------------------------------////

const WobbleCard = ({
    children,
    containerClassName,
    className
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 20;
        const y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };
    return (
        (<motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
            }}
            className={cn(
                "mx-auto w-full bg-indigo-800  relative rounded-2xl overflow-hidden",
                containerClassName
            )}>
            <div
                className="relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden"
                style={{
                    boxShadow:
                        "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
                }}>
                <motion.div
                    style={{
                        transform: isHovering
                            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                        transition: "transform 0.1s ease-out",
                    }}
                    className={cn("h-full px-4 py-10 sm:px-10", className)}>
                    <Noise />
                    {children}
                </motion.div>
            </div>
        </motion.section>)
    );
};

const Noise = () => {
    return (
        (<div
            className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
            style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
            }}></div>)
    );
};



export function WobbleCardDemo() {
    return (

        <>
            <div
                className="text-3xl md:text-4xl font-extrabold text-center mt-[5rem] mb-10 text-primary-blue leading-tight tracking-tight"
                style={{
                    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.4), 0px 0px 15px rgba(86, 89, 93, 0.6)"
                }}
            >
                All-in-One Solution to Launch Your Business!
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-[96%] max-w-[1500px] mx-auto ">

                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 bg-primary-blue min-h-[500px] lg:min-h-[300px]">
                    <div className="max-w-xs">
                        <h2
                            className="text-left text-white text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]"
                            style={{
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(255, 255, 255, 0.6)"
                            }}
                        >
                            Mobile Friendly Websites
                        </h2>

                        <p className="mt-4 text-left text-base text-neutral-200">
                            At MicroSonic, we specialize in creating mobile-friendly websites. Our team ensures that every website we develop is fully responsive, optimized for mobile screens, and offers an exceptional user experience across all devices.
                        </p>
                    </div>
                    <img
                        src="https://www.enableds.com/wp-content/uploads/2018/05/tinybar_dribbble.png"
                        width={500}
                        height={500}
                        alt="Mobile Friendly Website"
                        className="absolute -right-4  grayscale filter -bottom-10 object-contain rounded-2xl" />
                </WobbleCard>



                <WobbleCard containerClassName="col-span-1 min-h-[100px] flex flex-col md:flex-row items-center">

                    <h2
                        className="text-left text-white text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]"
                        style={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(255, 255, 255, 0.6)"
                        }}
                    >
                        Exceptional Performance, Every Time.📈
                    </h2>


                    <p className="mt-4 max-w-[26rem]  text-neutral-200">
                        Our websites are engineered to deliver lightning-fast performance with minimal loading time, ensuring an optimal user experience. Whether on desktop or mobile, your site will run seamlessly, even with heavy traffic.
                    </p>
                </WobbleCard>



                <WobbleCard containerClassName="col-span-1 flex flex-col">

                    <h2
                        className="text-left text-white text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]"
                        style={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(255, 255, 255, 0.6)"
                        }}
                    >
                        Uncompromised Security.
                    </h2>


                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 leading-relaxed">
                        Your data is protected with cutting-edge encryption, robust authentication methods, and advanced firewalls, ensuring your digital assets are always secure.
                    </p>
                    <div className="mt-6 flex justify-around items-center space-x-6">
                        {/* Icon Section */}
                        <div className="flex flex-col items-center text-white space-y-2 transform transition-all hover:scale-105">
                            <div className="bg-gradient-to-r from-secondary-blue to-primary-blue p-4 rounded-full shadow-lg">
                                <EnhancedEncryptionIcon fontSize="large" />
                            </div>
                            <p className="text-sm font-medium">Encryption</p>
                        </div>
                        <div className="flex flex-col items-center text-white space-y-2 transform transition-all hover:scale-105">
                            <div className="bg-gradient-to-r from-secondary-blue to-primary-blue p-4 rounded-full shadow-lg">
                                <VerifiedUserIcon fontSize="large" />
                            </div>
                            <p className="text-sm font-medium">Authentication</p>
                        </div>
                        <div className="flex flex-col items-center text-white space-y-2 transform transition-all hover:scale-105">
                            <div className="bg-gradient-to-r from-secondary-blue to-primary-blue p-4 rounded-full shadow-lg">
                                <LockClockIcon fontSize="large" />
                            </div>
                            <p className="text-sm font-medium">Firewalls</p>
                        </div>
                    </div>
                </WobbleCard>



                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 bg-primary-blue min-h-[500px] lg:min-h-[300px]">
                    <div className="max-w-xs">

                        <h2
                            className="text-left text-white text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]"
                            style={{
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(255, 255, 255, 0.6)"
                            }}
                        >
                            Efficient Code for Seamless Performance
                        </h2>
                        <p className="mt-4 text-left text-base text-neutral-200">
                            At MicroSonic, we take pride in writing clean, efficient, and maintainable code. Our streamlined development practices ensure faster load times, improved scalability, and ease of future upgrades, empowering your digital presence with unparalleled performance.
                            <IntegrationInstructionsIcon />
                        </p>

                    </div>
                    <img
                        src="https://java-performance.info/wp-content/uploads/2023/09/pasted-image-0-40.png"
                        width={500}
                        height={500}
                        alt="Mobile Friendly Website"
                        className="absolute -right-2  grayscale filter -bottom-2 object-contain rounded-2xl" />
                </WobbleCard>

            </div>

        </>)
}
