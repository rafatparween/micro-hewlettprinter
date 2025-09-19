import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { Link } from "react-router-dom"

const BackgroundBeamsWithCollision = ({
    children,
    className
}) => {
    const containerRef = useRef(null);
    const parentRef = useRef(null);

    const beams = [
        {
            initialX: 10,
            translateX: 10,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4,
        },
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 7,
            className: "h-6",
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4,
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            className: "h-20",
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            className: "h-12",
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            className: "h-6",
        },
    ];

    return (
        (<div
            ref={parentRef}
            className={cn(
                "h-96 md:h-[40rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden",
                // h-screen if you want bigger
                className
            )}>
            {beams.map((beam) => (
                <CollisionMechanism
                    key={beam.initialX + "beam-idx"}
                    beamOptions={beam}
                    containerRef={containerRef}
                    parentRef={parentRef} />
            ))}
            {children}
            <div
                ref={containerRef}
                className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
                style={{
                    boxShadow:
                        "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
                }}></div>
        </div>)
    );
};

const CollisionMechanism = React.forwardRef(({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
        detected: false,
        coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
        const checkCollision = () => {
            if (
                beamRef.current &&
                containerRef.current &&
                parentRef.current &&
                !cycleCollisionDetected
            ) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();

                if (beamRect.bottom >= containerRect.top) {
                    const relativeX =
                        beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;

                    setCollision({
                        detected: true,
                        coordinates: {
                            x: relativeX,
                            y: relativeY,
                        },
                    });
                    setCycleCollisionDetected(true);
                }
            }
        };

        const animationInterval = setInterval(checkCollision, 50);

        return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef]);

    useEffect(() => {
        if (collision.detected && collision.coordinates) {
            setTimeout(() => {
                setCollision({ detected: false, coordinates: null });
                setCycleCollisionDetected(false);
            }, 2000);

            setTimeout(() => {
                setBeamKey((prevKey) => prevKey + 1);
            }, 2000);
        }
    }, [collision]);

    return (<>
        <motion.div
            key={beamKey}
            ref={beamRef}
            animate="animate"
            initial={{
                translateY: beamOptions.initialY || "-200px",
                translateX: beamOptions.initialX || "0px",
                rotate: beamOptions.rotate || 0,
            }}
            variants={{
                animate: {
                    translateY: beamOptions.translateY || "1800px",
                    translateX: beamOptions.translateX || "0px",
                    rotate: beamOptions.rotate || 0,
                },
            }}
            transition={{
                duration: beamOptions.duration || 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: beamOptions.delay || 0,
                repeatDelay: beamOptions.repeatDelay || 0,
            }}
            className={cn(
                "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
                beamOptions.className
            )} />
        <AnimatePresence>
            {collision.detected && collision.coordinates && (
                <Explosion
                    key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                    className=""
                    style={{
                        left: `${collision.coordinates.x}px`,
                        top: `${collision.coordinates.y}px`,
                        transform: "translate(-50%, -50%)",
                    }} />
            )}
        </AnimatePresence>
    </>);
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({
    ...props
}) => {
    const spans = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        initialX: 0,
        initialY: 0,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
    }));

    return (
        (<div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"></motion.div>
            {spans.map((span) => (
                <motion.span
                    key={span.id}
                    initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
                    animate={{
                        x: span.directionX,
                        y: span.directionY,
                        opacity: 0,
                    }}
                    transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
                    className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
            ))}
        </div>)
    );
};


export function BackgroundBeamsWithCollisionDemo() {
    return (
        <BackgroundBeamsWithCollision className="relative mt-5">
            <div className="flex flex-col gap-3 min-h-screen">
                {/* Main Content */}
                <div className="flex-1 flex justify-center items-center p-6">
                    <Link
                        to="/query"
                        className="cursor-pointer relative text-center bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-3"
                    >
                        <span className="text-3xl md:text-5xl font-bold leading-tight transition-transform transform scale-110 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-purple-500">
                            Book a Free Appointment
                        </span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    </Link>
                </div>

                <footer className="bg-black p-6 absolute bottom-0 left-0 right-0 w-full">
                    <div className="container mx-auto text-center space-y-6">
                        <div className="flex justify-center space-x-6">
                            {/* Social Media Links */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-500 transition duration-300"
                            >
                                <Facebook fontSize="large" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                <Twitter fontSize="large" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-700 transition duration-300"
                            >
                                <LinkedIn fontSize="large" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-pink-500 transition duration-300"
                            >
                                <Instagram fontSize="large" />
                            </a>
                        </div>

                        {/* Disclaimer, Privacy Policy, and Terms Links */}
                        <div className="border-t border-gray-700 pt-4">
                            <div className="flex justify-center space-x-4">
                                <Link to="/disclaimer" className="text-gray-400 hover:text-white transition duration-300">
                                    Disclaimer
                                </Link>
                                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                                    About
                                </Link>

                                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">
                                    Privacy Policy
                                </Link>
                                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition duration-300">
                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </BackgroundBeamsWithCollision>



    );
}
