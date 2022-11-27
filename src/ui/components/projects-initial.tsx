import React from "react";

import { x } from "@xstyled/styled-components";
import styled from "styled-components";

// 40 px to rem = 2.5rem

const ProjectsInitial = () => {


    return (
        <x.div pt={32} pl={16}>
            <x.div position={"relative"}>
                <OutlinedText>PROJECTS</OutlinedText>
                <x.h2 fontSize={"4rem"} color={"white"} fontWeight={"semibold"} position={"absolute"} top={"3rem"} left={"5rem"}>Projects</x.h2>
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