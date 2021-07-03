import React from "react";
import HeaderBg from '../assets/images/header-bg.jpg';
import HeaderLogo from '../components/header-components/_logo';

const Header = () => {

return(

    <header className="header" style={{backgroundImage:`url(${HeaderBg})`}}>
        <HeaderLogo/>
        
    </header>
)

}

export default Header;