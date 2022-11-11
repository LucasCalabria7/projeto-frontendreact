import React from 'react'

import {HeaderContainer, HeaderLogo, ToolBar, Li, ToolBarItems, A, InputHeader} from './headerstyles'

import nasalogo from '../../assets/NASA-logo.png'


function Header () {
    return (
        <HeaderContainer>
            <HeaderLogo className="logo-header">
            <img src={nasalogo} alt="logo-header" />
            </HeaderLogo>

            <ToolBar>
            <ToolBarItems>
                <Li><A href="">Home</A></Li>
                <Li><A href="https://www.nasa.gov/" target="_blank">News</A></Li>
                <Li><A href="https://www.nasa.gov/missions" target="_blank" >Missions</A></Li>
                <Li><A href="https://www.nasa.gov/about/index.html" target="_blank" >About Us</A></Li>
                <Li><InputHeader type="search" placeholder="Search" /></Li>
            </ToolBarItems>
            </ToolBar>
        </HeaderContainer>
    )
}

export default Header
