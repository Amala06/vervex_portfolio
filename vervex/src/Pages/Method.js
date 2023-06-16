// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import yourSvgFile from "../Images/line.svg"; // Import your SVG file

// const Method = () => {
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const pathElement = pathRef.current;

//     // Initialize the animation timeline
//     const tl = gsap.timeline();

//     // Draw the SVG path initially
//     tl.set(pathElement, {
//       strokeDasharray: pathElement.getTotalLength(),
//       strokeDashoffset: pathElement.getTotalLength(),
//     });

//     // Animate the path drawing as the user scrolls
//     window.addEventListener("scroll", () => {
//       const scrollProgress =
//         window.scrollY /
//         (document.documentElement.scrollHeight - window.innerHeight);
//       const pathLength = pathElement.getTotalLength();
//       const drawLength = scrollProgress * pathLength;
//       gsap.to(pathElement, {
//         strokeDashoffset: pathLength - drawLength,
//         duration: 0.5,
//       });
//     });

//     return () => {
//       window.removeEventListener("scroll", () => {});
//     };
//   }, []);

//   return (
//     <svg viewBox="0 0 500 500" style={{ width: "100%", height: "100%" }}>
//       <image href={yourSvgFile} width="500" height="500" />
//       <motion.path
//         ref={pathRef}
//         d="M100,100 C200,200 300,0 400,100"
//         fill="none"
//         stroke="white"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// };

// export default Method;
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import yourSvgFile from "../Images/line.svg"; // Import your SVG file

const Method = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const pathElement = pathRef.current;

    // Initialize the animation timeline
    const tl = gsap.timeline();

    // Draw the SVG path initially
    tl.set(pathElement, {
      strokeDasharray: pathElement.getTotalLength(),
      strokeDashoffset: pathElement.getTotalLength(),
    });

    // Animate the path drawing as the user scrolls
    window.addEventListener("scroll", () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const pathLength = pathElement.getTotalLength();
      const drawLength = scrollProgress * pathLength;
      gsap.to(pathElement, {
        strokeDashoffset: pathLength - drawLength,
        duration: 1,
      });
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <svg viewBox="0 0 500 500" style={{ width: "100%", height: "200%" }}>
      {/* <image href={yourSvgFile} width="500" height="500" /> */}
      <motion.path
        ref={pathRef}
        d="M100,250 L200,250 L200,200 L300,200 L300,300 L400,300 M200,200 L200,150 M300,200 L300,150 M300,300 L300,350 M400,300 L400,350"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      {/* Numbers */}
      <text x="60" y="80" fontSize="20" fontWeight="bold">
        1
      </text>
      <text x="60" y="180" fontSize="20" fontWeight="bold">
        3
      </text>
      <text x="60" y="280" fontSize="20" fontWeight="bold">
        5
      </text>
      <text x="60" y="380" fontSize="20" fontWeight="bold">
        7
      </text>
      <text x="160" y="380" fontSize="20" fontWeight="bold">
        9
      </text>
      <text x="260" y="380" fontSize="20" fontWeight="bold">
        11
      </text>
      <text x="360" y="380" fontSize="20" fontWeight="bold">
        13
      </text>
      <text x="460" y="380" fontSize="20" fontWeight="bold">
        15
      </text>
      <text x="160" y="280" fontSize="20" fontWeight="bold">
        2
      </text>
      <text x="260" y="280" fontSize="20" fontWeight="bold">
        4
      </text>
      <text x="360" y="280" fontSize="20" fontWeight="bold">
        6
      </text>
      <text x="460" y="280" fontSize="20" fontWeight="bold">
        8
      </text>
      <text x="260" y="180" fontSize="20" fontWeight="bold">
        10
      </text>
      <text x="360" y="180" fontSize="20" fontWeight="bold">
        12
      </text>
      <text x="360" y="80" fontSize="20" fontWeight="bold">
        14
      </text>
      {/* fill="none" stroke="white" strokeWidth="2" /> */}
    </svg>
  );
};

export default Method;
