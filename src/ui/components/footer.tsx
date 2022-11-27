import React, { useState } from "react";
import styled from "styled-components"

import { x } from "@xstyled/styled-components"


const Footer = () => {

    const [contact, setContact] = useState([
        {
            name: "Email",
            height: 24,
            action: "mailto: tomwuijsterdev@gmail.com"
        },
        {
            name: "Github",
            height: 44,
            action: "https://github.com/ItsJustTomDev"
        },
        {
            name: "LinkedIn",
            height: 64,
            action: "https://www.linkedin.com/in/tom-wuijster-3b2645248/"
        }
    ])


    return (
        <x.div h={"35vh"} bg={"#FDFAF5"} px={16} display={"flex"}>
            <x.div display={"flex"} pb={6} flexDirection={"column"} justifyContent={"space-between"} h={"full"}>

                <x.div position={"relative"} w={"fit-content"} pt={6}>
                    <OutlinedText>CONTACT</OutlinedText>
                    <x.h2 fontSize={"7rem"} fontWeight={"bold"} position={"absolute"} bottom={-45} left={"20%"}>Let's Talk</x.h2>
                </x.div>


                <x.div display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <x.div>
                        <x.h2 fontSize={"2rem"} fontWeight={"semibold"}>Made with ❤️ by TomDev</x.h2>
                    </x.div>
                </x.div>
            </x.div>

            <x.div h={"full"} w={"full"}>
                <x.div display={"flex"} w={"100%"} justifyContent={"center"} gap={"10%"} mr={32}>

                    {contact.map((element, index) => (
                        <x.div key={index} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                            <x.span w={"0.2rem"} h={element.height} bg={"#232323"}></x.span>
                            <x.div bg={"#232323"} w={16} h={16} borderRadius={"full"}>
                                <x.a href={element.action}>
                                    <x.button w={52} h={16} borderRadius={"full"} bg={"transparent"} border={"2px solid #232323"} pl={12}>
                                        <x.h2 fontSize={"1.5rem"} fontWeight={"semibold"}>{element.name}</x.h2>
                                    </x.button>
                                </x.a>
                            </x.div>
                        </x.div>
                    ))}
                </x.div>
            </x.div>
        </x.div >
    )
}


const OutlinedText = styled.h1`
    text-shadow:
        -3px -3px 0 #000,
        3px -3px 0 #000,
        -3px 3px 0 #000,
        3px 3px 0 #000;
    
    color: #FDFAF5;
    font-weight: 700;
    opacity: 30%;
    font-size: 10rem;
`

export default Footer;