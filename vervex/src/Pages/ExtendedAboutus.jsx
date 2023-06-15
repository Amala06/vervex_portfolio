import React from "react";
import "../Styles/ExtendedAboutUs.css";
import img1 from "../Images/AU (1).png";
import img2 from "../Images/AU (2).png";
import img7 from "../Images/AU (3).png";
import img3 from "../Images/snap (1).png";
import img4 from "../Images/snap (2).png";
import img5 from "../Images/AUicon (1).png";
import img6 from "../Images/AUicon (2).png";

const ExtendedAboutus = () => {
  return (
    <>
      <div className="EAU_mainContaier">
        <div className="EAU_gridContainer1">
          <div className="EAU_grid1_sub1">
            <img src={img2} alt="" className="EAU_grid1_image1" />
          </div>
          <div className="EAU_grid1_sub2">
            <div className="EAU_grid1_headText">WHO WE ARE ?</div>
            <div className="EAU_grid1_subText">
              Vervex: Empowering Your Digital Presence
            </div>
          </div>
          <div className="EAU_grid1_sub3">
            <img src={img1} alt="" className="EAU_grid1_image2" />
          </div>
        </div>
        <div className="EAU_gridContainer1_2">
        <div className="EAU_grid1_2_sub1">
            <img src={img7} alt="" className="EAU_grid1_2_image1" />
          </div>
        <div className="EAU_grid1_sub2">
            <div className="EAU_grid1_headText">WHO WE ARE ?</div>
            <div className="EAU_grid1_subText">
              Vervex: Empowering Your Digital Presence
            </div>
          </div>
        </div>
        <div className="EAU_gridContainer2">
          <div className="EAU_grid2_sub1">
            <div className="EAU_grid2_headText">THE VERVEX</div>
          </div>
          <div className="EAU_grid2_sub2">
            <div className="EAU_grid2_subText">
              Vervex, a leading web development company dedicated to creating
              exceptional online experiences for businesses worldwide. With a
              team of highly skilled professionals, we specialize in crafting
              tailor-made websites that not only captivate users but also drive
              tangible results for our clients. Our passion for technology,
              creativity, and innovation fuels our commitment to delivering
              exceptional digital solutions that empower your brand's online
              presence.
            </div>
          </div>
        </div>
        <div className="EAU_gridContainer3">
          <div className="EAU_grid3_sub1">
            <div className="EAU_grid3_subText">
              At Vervex, we understand that the digital landscape is constantly
              evolving, and staying ahead of the curve is crucial for success.
              That's why we strive to blend cutting-edge technologies with
              artistic design to deliver websites that not only meet your
              specific needs but also set you apart from the competition.
              Whether you're a startup, a small business, or a global
              enterprise, we have the expertise to transform your vision into a
              captivating online reality.
            </div>
          </div>
          <div className="EAU_grid3_sub2">
            <div className="EAU_grid3_headText">WHY VERVEX ?</div>
          </div>
        </div>
        <div className="EAU_hashContainer">
          <div className="EAU_hash_sub1">
            <div className="EAU_hash_headText">
              #WebSolutions
              <span className="EAU_hash_specialText">Revolution.</span>
            </div>
            <div className="EAU_hash_subText">
              Unleashing digital solutions for diverse business needs with a
              quality-driven approach.
            </div>
          </div>
          <div className="EAU_hash_sub2">
            <div className="EAU_hashButton">CHECKOUT OUR WORK</div>
          </div>
        </div>
        <div className="EAU_grid4_mainContainer">
        <div className="EAU_grid1_headText">THE TEAM</div>
          <div className="EAU_gridContainer4">

            <div className="EAU_grid4_sub1">
              <img src={img3} alt="" className="EAU_grid4image" />
              <div className="EAU_grid4_name">Shubham Jain</div>
              <div className="EAU_grid4_iconContainer">
                <img src={img5} alt="" className="EAU_grid4_icon1" />
                <img src={img6} alt="" className="EAU_grid4_icon2" />
              </div>
            </div>
            <div className="EAU_grid4_sub2">
              <img src={img4} alt="" className="EAU_grid4image2" />
              <div className="EAU_grid4_name">Amala Sebestian</div>
              <div className="EAU_grid4_iconContainer">
                <img src={img5} alt="" className="EAU_grid4_icon1" />
                <img src={img6} alt="" className="EAU_grid4_icon2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtendedAboutus;
