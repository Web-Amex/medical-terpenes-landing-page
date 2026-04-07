"use client";
import { useEffect, useRef, useState } from "react";

const LANE_INDICES = [0, 1, 2, 3, 4, 5, 6, 7] as const;
type LaneIndex = (typeof LANE_INDICES)[number];

const BASE_WIDTHS: Record<LaneIndex, number> = {
    0: 6.94,
    1: 23.61,
    2: 44.44,
    3: 61.81,
    4: 79.16,
    5: 93.05,
    6: 97.05,
    7: 100,
};

const GRADIENT_STOPS: Record<LaneIndex, readonly string[]> = {
    0: ["21.53%", "44.13%", "74.27%", "107.64%"],
    1: ["25.53%", "47.13%", "77.27%", "107.64%"],
    2: ["30.53%", "52.13%", "82.27%", "107.64%"],
    3: ["35.53%", "57.13%", "87.27%", "107.64%"],
    4: ["40.53%", "62.13%", "92.27%", "107.64%"],
    5: ["45.53%", "67.13%", "97.27%", "107.64%"],
    6: ["50.53%", "74.13%", "107.27%", "107.64%"],
    7: ["57.53%", "107.64%"],
};

const GRADIENT_COLORS = ["#101820", "#0077C8", "#C0AEE7", "#DDDAE8"] as const;

export type TransitionAnimationProps = {
    containerClassName?: string;
    rowClassName?: string;
    disableScrollProgress?: boolean;
};

export default function TransitionAnimation({
    containerClassName = "h-[200px] lg:h-[800px]",
    rowClassName = "h-[25px] lg:h-[100px]",
    disableScrollProgress = false,
}: TransitionAnimationProps) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (disableScrollProgress) {
            setScrollProgress(1);
            return;
        }

        // Only run on client side
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on how much of the component is visible
            const progress = Math.max(
                0,
                Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)),
            );

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, [disableScrollProgress]);

    // Calculate width for each div based on scroll progress
    const getDivWidth = (index: LaneIndex): number => {
        const baseWidth = BASE_WIDTHS[index];

        // Start with 0% width for all divs except the 8th (index 7)
        const initialWidth = index === 7 ? 10 : 0;

        // Calculate the target width based on scroll progress
        const targetWidth = baseWidth;

        // Make all divs animate 1 time faster
        const adjustedProgress = disableScrollProgress
            ? 1
            : Math.min(1, scrollProgress * 2);

        // Smooth transition from initial to target width
        const currentWidth =
            initialWidth + (targetWidth - initialWidth) * adjustedProgress;

        return Math.max(0, Math.min(100, currentWidth));
    };

    // Get gradient colors (always at 100% - no transition)
    const getGradientColors = (index: LaneIndex, isLeft = true): string => {
        const direction = isLeft ? "90deg" : "270deg";
        const stops = GRADIENT_STOPS[index];

        if (index === 7) {
            // Last div has only 2 colors
            return `linear-gradient(${direction}, ${GRADIENT_COLORS[0]} ${stops[0]}, ${GRADIENT_COLORS[1]} ${stops[1]})`;
        } else {
            // Other divs have 4 colors
            return `linear-gradient(${direction}, ${GRADIENT_COLORS[0]} ${stops[0]}, ${GRADIENT_COLORS[1]} ${stops[1]}, ${GRADIENT_COLORS[2]} ${stops[2]}, ${GRADIENT_COLORS[3]} ${stops[3]})`;
        }
    };

    return (
        <div
            ref={containerRef}
            className={`flex w-full items-center justify-center overflow-hidden ${containerClassName}`}
        >
            <div className="flex h-full w-full">
                {/* Left Column */}
                <div className="flex h-full w-1/2 flex-col items-start justify-start">
                    {LANE_INDICES.map((index) => (
                        <div
                            key={`left-${index}`}
                            className={`${rowClassName} transition-all duration-500 ease-out`}
                            style={{
                                width: `${getDivWidth(index)}%`,
                                background: getGradientColors(index, true),
                            }}
                        />
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex h-full w-1/2 flex-col items-end justify-start">
                    {LANE_INDICES.map((index) => (
                        <div
                            key={`right-${index}`}
                            className={`${rowClassName} transition-all duration-500 ease-out`}
                            style={{
                                width: `${getDivWidth(index)}%`,
                                background: getGradientColors(index, false),
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// 'use client';
// const TransitionAnimation = () => {
//   return (
//     <div className="flex h-screen w-full items-center justify-center overflow-hidden">
//       <div className="flex h-screen w-full">
//         {/* Left Column */}
//         <div className="flex h-full w-1/2 flex-col items-start justify-start">
//           <div className="h-1/7 w-[6.94%] bg-[linear-gradient(90deg,_#101820_21.53%,_#0077C8_44.13%,_#C0AEE7_74.27%,_#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[23.61%] bg-[linear-gradient(90deg,_#101820_25.53%,_#0077C8_47.13%,_#C0AEE7_77.27%,_#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[44.44%] bg-[linear-gradient(90deg,_#101820_30.53%,_#0077C8_52.13%,_#C0AEE7_82.27%,_#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[61.81%] bg-[linear-gradient(90deg,_#101820_35.53%,_#0077C8_57.13%,_#C0AEE7_87.27%,_#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[79.16%] bg-[linear-gradient(90deg,_#101820_40.53%,_#0077C8_62.13%,_#C0AEE7_92.27%,_#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[93.05%] bg-[linear-gradient(90deg,_#101820_45.53%,_#0077C8_67.13%,_#C0AEE7_97.27%,_#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[100%] bg-[linear-gradient(90deg,_#101820_50.53%,_#0077C8_74.13%,_#C0AEE7_107.27%,_#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[100%] bg-[linear-gradient(90deg,_#101820_57.53%,_#0077C8_107.64%)]"></div>
//         </div>

//         {/* Right Column */}
//         <div className="flex h-full w-1/2 flex-col items-end justify-start">
//           <div className="h-1/7 w-[6.94%] bg-[linear-gradient(270deg,#101820_21.53%,#0077C8_44.13%,#C0AEE7_74.27%,#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[23.61%] bg-[linear-gradient(270deg,#101820_25.53%,#0077C8_47.13%,#C0AEE7_77.27%,#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[44.44%] bg-[linear-gradient(270deg,#101820_30.53%,#0077C8_52.13%,#C0AEE7_82.27%,#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[61.81%] bg-[linear-gradient(270deg,#101820_35.53%,#0077C8_57.13%,#C0AEE7_87.27%,#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[79.16%] bg-[linear-gradient(270deg,#101820_40.53%,#0077C8_62.13%,#C0AEE7_92.27%,#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[93.05%] bg-[linear-gradient(270deg,#101820_45.53%,#0077C8_67.13%,#C0AEE7_97.27%,#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[100%] bg-[linear-gradient(270deg,#101820_50.53%,#0077C8_74.13%,#C0AEE7_107.27%,#DDDAE8_107.64%)]"></div>
//           <div className="h-1/7 w-[100%] bg-[linear-gradient(270deg,#101820_57.53%,#0077C8_107.64%)]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransitionAnimation;
