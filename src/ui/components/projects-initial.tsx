import React from "react";
import styled from "styled-components";
import sideArrow from "@assets/images/arrow-2.svg";

import { x } from "@xstyled/styled-components";

const ProjectsInitial = () => {
    return (
        <x.div display={"flex"} flexDirection={"column"} h={"full"}>
            <x.div pt={32} pl={16} position={"relative"}>
                <OutlinedText>PROJECTS</OutlinedText>
                <x.h2 fontSize={"4rem"} color={"white"} fontWeight={"semibold"} position={"absolute"} bottom={"7rem"} left={"10rem"}>Projects</x.h2>
            </x.div>

            <x.div display={"flex"} flex={1} justifyContent={"center"} alignItems={"flex-end"} mb={16}>
                <x.div display={"flex"} flexDirection={"column"}>
                    <x.h2 color={"white"} fontSize={"1.5rem"} fontWeight={"semibold"}>Keep scrolling</x.h2>
                    <x.img src={sideArrow.src} />
                </x.div>
            </x.div>
        </x.div>
    )
}

const OutlinedText = styled.h1`
    text-shadow:
        -3px -3px 0 #fff,
        3px -3px 0 #fff,
        -3px 3px 0 #fff,
        3px 3px 0 #fff;
    
    color: #282828;
    opacity: 20%;
    font-weight: 700;
    font-size: 12.5rem;
`

export default ProjectsInitial;