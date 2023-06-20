import React from "react";
import "../Styles/ExtendedService.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import img from "../Images/seo2.png";
import img4 from '../Images/seo (1).png'
import img2 from '../Images/seo (2).png'
import img3 from '../Images/seo (3).png'
import {
  Fa500Px,
  FaAssistiveListeningSystems,
  FaBuffer,
  FaBuilding,
  FaChromecast,
  FaClone,
  FaDeezer,
  FaIntercom,
  FaSchlix,
  FaTrello,
  FaUsb,
  FaUserInjured,
  FaYelp,
} from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import img1 from "../Images/ex-services.png";
// ..
AOS.init();
const SEO = () => {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={0}>
          <div className="mainExtended">
            {/* <Parallax speed={0}> */}
            <div className="extended_header">
              <div className="extended_main_header">
                <div className="hero_circle"></div>
                <span className="extended_HeadText">SEO OPTIMIZATION</span>
                <div className="extended_text">
                  Our SEO optimization services focus on improving your
                  website's search engine visibility and driving targeted
                  organic traffic. From comprehensive keyword research to
                  on-page optimization and authoritative link building, we help
                  you achieve higher rankings and sustainable online growth.
                </div>
              </div>
              <div className="extended_img">
                <img src={img} alt="" />
              </div>
              {/* <div className="hero_c"></div> */}
            </div>
            {/* </Parallax> */}
            <div className="extended_cards_main">
              <div data-aos="zoom-in" className="extended_cards">
              <div className="extended_icon">
                  <img className="extended_icon_image" src={img4} alt="" />
                </div>
                <div className="extended_icon_header"> KEYWORD RESEARCH</div>
                <div className="extended_icon_text">
                  Spend time researching and identifying relevant keywords and
                  search phrases that align with your target audience and
                  business goals.Analyze your competitors' websites to gather
                  insights and identify potential keyword opportunities.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
              <div className="extended_icon">
                  <img className="extended_icon_image" src={img2} alt="" />
                </div>
                <div className="extended_icon_header">ON-PAGE OPTIMIZATION</div>
                <div className="extended_icon_text">
                  Optimize webpage elements (meta tags, headings, content, URLs)
                  for improved search visibility. Conduct a technical audit to
                  address issues like page speed, mobile-friendliness, and
                  crawlability.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
              <div className="extended_icon">
                  <img className="extended_icon_image" src={img3} alt="" />
                </div>
                <div className="extended_icon_header">
                  {" "}
                  CONTENT ENHANCEMENT & LINK BUILDING
                </div>
                <div className="extended_icon_text">
                  Review and optimize existing content for SEO, ensuring it's
                  valuable and engaging. Develop a link building strategy to
                  acquire quality backlinks through outreach, guest posting, and
                  content promotion.
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default SEO;
