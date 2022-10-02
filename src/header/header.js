import React, { Component } from "react";
import { useState } from "react"

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <header>  
            <div  className="header">
            <div className="logo">
                  Moon<span>Sea</span>
            </div>
         <div className="header-menu">
         <button className="toggle" type="button"  onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
</button>
         <ul 
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
                    <li><a href = "#Collection">Collection</a></li>
                    <li><a href = "#Status" class = "active">Status</a></li>
                    <li><a href = "#howWork">How its Works</a></li>
                    <li><a href = "#Upload">Upload</a></li>

                    <button  className="close" onClick={() => {
            setIsNavExpanded(!isNavExpanded)} }>&times;
                     </button>
       
        </ul>
     
      </div>

      </div>
    
         </header>
    );


}

export default Header;