import React, { Component } from "react";
import Header from "../header/header.js";
import Slider from "react-slick";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import WaveOne from "../Assets/Images/wave-mid.png";
import WaveTow from "../Assets/Images/wave-top.png";
import WaveThree from "../Assets/Images/wave-mid.png";
import WaveFour from "../Assets/Images/wave-top.png";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  

function SliderSection() {
  
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return( 
    <div className="bg">
                <Header />
                <div className="slider-wrap">
                <div className="container mobile-container"> 
                <div className="slider-section">
                <div className="col left-col">
                 <h2>
                   <span> Discover a</span> <br />sea full of NFT
                   <br /> collections
                 </h2>
                 <button>
                    <a href="#">Start your Search</a>
                 </button>
                </div>
                
                    <div className="col right-col slick-carousel">
                    <div className="slick-arrow">
                            <button className="slick-prev">
                                    {/* < FaArrowLeft /> */}
                
                            </button>
                            <button className="slick-next">
                            {/* < FaArrowRight /> */}
                           </button>

                    </div>
                      <Slider className="slider-container" {...settings}>
                   
                   <div className="slider-wrap "  >
                     <div className="img-section">
                        <div className="bg-img bg-1">
                        
                        </div>
                        <div className="small-img">
                            <div className="sm-img sm-img-1">
                      
                            </div>
                            <div className="sm-img sm-img-2">

                            </div>
                                <div className="sm-img sm-img-3">

                                </div>
                            
                        </div>

                       </div>
                       <div className="right-content">
                      
                            <h3>
                            The creator network
                              
                               <span className="sub-title">by Enrico Cole</span>
                               <span>4 Items</span>
                               </h3>
                               <button> <a href="#">View Collection </a></button>
                        
                       </div>
                       </div>   
                       <div className="slider-wrap "  >
                     <div className="img-section">
                        <div className="bg-img bg-2">
                        
                        </div>
                        <div className="small-img">
                            <div className="sm-img sm-img-1">
                      
                            </div>
                            <div className="sm-img sm-img-2">

                            </div>
                                <div className="sm-img sm-img-3">

                                </div>
                            
                        </div>

                       </div>
                       <div className="right-content">
                      
                       <h3>
                            Boss Mokey
                              
                               <span className="sub-title">by MON_77</span>
                               <span>2 Items</span>
                               </h3>
                               <button> <a href="#">View Collection </a></button>
                        
                       </div>
                       </div>   <div className="slider-wrap "  >
                     <div className="img-section">
                        <div className="bg-img bg-3">
                        
                        </div>
                        <div className="small-img">
                            <div className="sm-img sm-img-1">
                      
                            </div>
                            <div className="sm-img sm-img-2">

                            </div>
                                <div className="sm-img sm-img-3">

                                </div>
                            
                        </div>

                       </div>
                       <div className="right-content">
                      
                            <h3>
                            NFT Works
                              
                               <span className="sub-title">by WNFT_77</span>
                               <span>2 Items</span>
                               </h3>
                               <button> <a href="#">View Collection </a></button>
                        
                       </div>
                       </div>   <div className="slider-wrap "  >
                     <div className="img-section">
                        <div className="bg-img bg-4">
                        
                        </div>
                        <div className="small-img">
                            <div className="sm-img sm-img-1">
                      
                            </div>
                            <div className="sm-img sm-img-2">

                            </div>
                                <div className="sm-img sm-img-3">

                                </div>
                            
                        </div>

                       </div>
                       <div className="right-content">
                      
                       <h3>
                          NFT Market
                              
                               <span className="sub-title">by NFT_122</span>
                               <span>2 Items</span>
                               </h3>
                               <button> <a href="#">View Collection </a></button>
                        
                       </div>
                       </div>   <div className="slider-wrap "  >
                     <div className="img-section">
                        <div className="bg-img bg-1">
                        
                        </div>
                        <div className="small-img">
                            <div className="sm-img sm-img-1">
                      
                            </div>
                            <div className="sm-img sm-img-2">

                            </div>
                                <div className="sm-img sm-img-3">

                                </div>
                            
                        </div>

                       </div>
                       <div className="right-content">
                      
                            <h3>
                            jasmine
                              
                               <span className="sub-title">by oX3S_77</span>
                               <span>4 Items</span>
                               </h3>
                               <button> <a href="#">View Collection </a></button>
                        
                       </div>
                       </div>
                       </Slider>  
                    </div>

                </div>
                
                </div>
                <div className="wave-animation">
                   <div className="animation">
                     
                     <img src={WaveOne} className="wave wave-1" alt="waveimg" />
                     <img src={WaveTow} className="wave wave-2" alt="waveimg"  />
                     <img src={WaveThree} className="wave wave-3" alt="waveimg "/>
                 
                   </div>
                </div>
                </div>
               
     </div>
    );

}

export default SliderSection;
    