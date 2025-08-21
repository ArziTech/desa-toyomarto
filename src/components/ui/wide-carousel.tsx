"use client";
import React, {
  useEffect, useState, createContext, JSX,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {  motion } from "motion/react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export type CardProps = {
  src: string;
  title: string;
  // content: React.ReactNode; // change into destination link
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
      <CarouselContext.Provider
          value={{ onCardClose: handleCardClose, currentIndex }}
      >
        <div className="relative w-full">
          <div
              className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-5 [scrollbar-width:none] md:py-10"
              ref={carouselRef}
              onScroll={checkScrollability}
          >
            <div
                className={cn(
                    "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
                )}
            ></div>

            <div
                className={cn(
                    "flex flex-row justify-start gap-4",
                    "mx-auto ", // remove max-w-4xl if you want the carousel to span the full width of its container
                )}
            >
              {items.map((item, index) => (
                  <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.2 * index,
                          ease: "easeOut",
                          // once: true,
                        },
                      }}
                      key={"card" + index}
                      className=" last:pr-[5%] md:last:pr-[33%]"
                  >
                    {item}
                  </motion.div>
              ))}
            </div>
          </div>
          <div className="mr-10 flex justify-end gap-2">
            <button
                className="relative z-40 flex h-10 w-10 items-center justify-center bg-gray-100 disabled:opacity-50"
                onClick={scrollLeft}
                disabled={!canScrollLeft}
            >
              <ArrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
                className="relative z-40 flex h-10 w-10 items-center justify-center bg-gray-100 disabled:opacity-50"
                onClick={scrollRight}
                disabled={!canScrollRight}
            >
              <ArrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </CarouselContext.Provider>
  );
};

export const Card = ({ card }: { card: CardProps }) => {
  return (
      <>
        <div
            className="relative z-10 flex h-[20rem] w-[40rem] flex-col items-start justify-start overflow-hidden  bg-gray-100  dark:bg-neutral-900"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          <div className="relative h-full w-full flex flex-col justify-between z-40 p-8">
            <p
                className="mt-2 max-w-xs text-left font-playfair text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
            >
              {card.title}
            </p>
            <Button
                className={'z-40  w-full border border-white'}
                asChild
            >
              <Link href={'https://whatsapp.com/'}>
                Book Now
              </Link>
            </Button>
          </div>
          <Image
              src={card.src}
              alt={card.title}
              // fill
              width={368}
              height={640}
              className="absolute size-full inset-0 z-10 object-cover"
          />
        </div>
      </>
  );
};

