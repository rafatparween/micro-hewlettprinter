import React, { useState } from "react";
import { cn } from "../lib/utils";
import { cards } from "../data";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-half-white overflow-hidden h-64 md:h-80 lg:h-96 w-full transition-all duration-300 ease-out cursor-pointer shadow-lg hover:shadow-2xl",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <p
      className={cn(
        "absolute inset-0 m-6 text-sm md:text-base transition-all duration-300 transform",
        hovered === index
          ? "font-bold text-white" // full white with drop shadow
          : "font-medium text-blue opacity-80"
      )}
    >
      {card.text}
    </p>

    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-center justify-center px-4 py-8 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
    </div>
  </div>
));

Card.displayName = "Card";



export function FocusCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <u>
        <h2
          className="text-center text-primary-blue text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] m-12"
          style={{
            textShadow:
              "2px 2px 4px rgba(95, 73, 73, 0.7), 0px 0px 10px rgba(255, 255, 255, 0.6)",
          }}
        >
          We have worked with hundreds of amazing people
        </h2>
      </u>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[90rem] px-4 md:px-8 mx-auto  mt-10"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            keys={card.title}
            card={{ ...card, minHeight: "h-[100px]" }}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>

    </>
  );
}