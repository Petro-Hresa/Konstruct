import React from "react";
import LogoWhite from "../../assets/images/logo-white.svg"

const HeaderLogo = ()=>{

    return(
        <div className ="header__wrap_logo">
           <img src={LogoWhite} alt="Konstruct" /> 
        </div>
        ) 

}

export default HeaderLogo;