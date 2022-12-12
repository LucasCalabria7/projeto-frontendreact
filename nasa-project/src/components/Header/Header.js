import React from 'react'
import {HeaderContainer, HeaderLogo, ToolBar, Li, ToolBarItems, A, ButtonHeader} from './headerstyles'
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage } from "../../routes/coordinator"
import nasalogo from '../../assets/NASA-logo.png'


function Header () {

    let navigate = useNavigate()

    return (
        <HeaderContainer>
            <HeaderLogo className="logo-header">
            <img src={nasalogo} alt="logo-header" />
            </HeaderLogo>

            <ToolBar>
            <ToolBarItems>
                <Li><A onClick={()=> goToHomePage(navigate)}>Home</A></Li>
                <Li><A href="https://www.nasa.gov/" target="_blank">News</A></Li>
                <Li><A href="https://www.nasa.gov/missions" target="_blank" >Missions</A></Li>
                <Li><A href="https://www.nasa.gov/about/index.html" target="_blank" >About Us</A></Li>
                <Li><ButtonHeader onClick={()=> goToLoginPage(navigate)} >create account!</ButtonHeader></Li>
            </ToolBarItems>
            </ToolBar>
        </HeaderContainer> 
    )
}

export default Header
