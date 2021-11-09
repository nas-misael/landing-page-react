import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SideBarElements"

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarMenu>
                <SidebarLink  href="#pizzas" >Pizzas</SidebarLink>
                <SidebarLink href="#form">Pedir Pizza</SidebarLink>
                <SidebarLink href="#squad">Contato</SidebarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SidebarRoute href="#form">Pedir Agora!</SidebarRoute>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default SideBar
