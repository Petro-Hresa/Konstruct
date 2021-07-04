import React from "react";
import HeaderBg from '../../assets/images/header-bg.jpg';

import HeaderLogo from './logo/_logo';
import HeaderContant from './content/_content';
import HeaderGuide from './guide/_guide';
const Header = () => {

return(

    <header className="header" style={{backgroundImage:`url(${HeaderBg})`}}>
        <HeaderLogo/>
        <HeaderContant/>
        <HeaderGuide/>
    </header>
)

}

export default Header;