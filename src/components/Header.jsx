import React from "react";
import menu from "../assets/menu_FILL0_wght400_GRAD0_opsz48.svg"
import close from "../assets/close_FILL0_wght400_GRAD0_opsz48.svg"

function Header(){
    return(
        <div className="header" id="header">
         <nav>
            <ul class="sidebar">
            <li ><a href="#"><svg xmlns={menu} height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
            </ul>
            <ul>
            <li><a href="#">Ahmed<span>hefow</span></a></li>
            <li class="hideOnMobile"><a href="#project">Project</a></li>
            <li class="hideOnMobile"><a href="#bio">Bio</a></li>
            <li class="hideOnMobile"><a href="#skills">Skills</a></li>
            <li class="hideOnMobile"><a href="#contacts">Contact</a></li>
            <li class="menu-button" ><a href="#"><svg xmlns={close} height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
            </ul>
       </nav>  

        </div>
    )
}

export default Header