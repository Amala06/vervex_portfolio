// import React, { useState, useEffect } from "react";

// const StickyDivWithScroll = () => {
//   const [childWidth, setChildWidth] = useState(0);
//   const [isSticky, setIsSticky] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPercentage =
//         (window.scrollY /
//           (document.documentElement.scrollHeight - window.innerHeight)) *
//         100;
//       setChildWidth(scrollPercentage);

//       if (scrollPercentage >= 100) {
//         setIsSticky(false);
//       } else {
//         setIsSticky(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const mainDivStyles = {
//     position: isSticky ? "sticky" : "static",
//     top: 0,
//     background: "#f2f2f2",
//     padding: "10px",
//     // zIndex: "-6",
//     // width:"200vw",
//     // overflow:"hidden"
//   };

//   const childDivStyles = {
//     position: isSticky ? "sticky" : "static",
// zIndex:"16",
//     width: `${childWidth}%`,
//     height: "100px",
//     background: "#ddd",
//     transition: "width 4s ease",
//   };

//   return (
//     <div>
//       <div style={mainDivStyles}>{/* Main div content */}</div>
//       <div style={childDivStyles}>
//         {/* Child div content */}
//         {/* <div style={{ width: "0%", background: "red" ,zIndex:"-6"}}> */}
//         <div
//           style={{
//             border: "2px solid red",
//             // background: "black",
//             zIndex: 20,
//             width: "10rem",
//             height: "12rem",
//           }}
//         >
//           <div
//             style={{
//               border: "2px solid red",
//               background: "transparent",
//               zIndex: 20,
//               width: "2rem",
//               height: "2rem",
//             }}
//           ></div>
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default StickyDivWithScroll;
import React, { useState, useEffect } from "react";

const Test = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const percentage = (currentScroll / totalScrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const snakeStyles = {
    backgroundColor: `hsl(${scrollPercentage}, 100%, 50%)`,
    height: "100vh",
    transition: "background-color 0.3s ease",
  };

  return (
    <div className="snake" style={snakeStyles}>
      {/* Content of the snake */}
    </div>
  );
};

export default Test;
