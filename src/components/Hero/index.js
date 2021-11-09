import React, {useState} from "react";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        A Melhor Pizzaria da Cidade!
                    </HeroH1>
                    <HeroP>
                        Venha conhecer nossos sabores.
                    </HeroP>
                    <HeroBtn href="#form">
                        Peça já!
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero