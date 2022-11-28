import React from "react";
import styled from "styled-components";
import arrowThree from "@assets/images/arrow-3.svg";

import { x } from "@xstyled/styled-components"

const ProjectsEnd = () => {
    return (
        <x.div h={"100vh"} bg={"#282828"} pt={"24"} display={"flex"} flexDirection={"column"}>
            <x.div display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} w={"full"}>
                <x.div textAlign={"center"}>
                    <x.h1 fontSize={"10rem"} fontWeight={"bold"} color={"white"}>Hope you enjoyed my</x.h1>
                    <OutlinedText>PROJECTS</OutlinedText>
                </x.div>

                <x.div display={"flex"} flexDirection={"column"} alignItems="center" textAlign={"center"} gap={4}>
                    <x.p w={"38%"} color={"white"} fontSize={"2rem"}>I know this isn’t a whole library of projects, but I hope that I have given you  a rough idea of my work and code. If you’d like to see some more projects of mine (some that are not completed / WIP) Do not hesitate to contact me!</x.p>
                    <x.a href={"mailto: tomwuijsterdev@gmail.com"}>
                        <x.button
                            bg={"transparent"}
                            color={"white"}
                            border={"2px solid white"}
                            borderRadius={"full"}
                            fontSize={"2rem"}
                            py={"0.3rem"}
                            px={"1rem"}
                        >Contact me</x.button>
                    </x.a>
                </x.div>
            </x.div>

            <x.div flex={1} display={"flex"} justifyContent={"center"} alignItems={"flex-end"}>
                <x.div display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3} mb={36}>
                    <x.h2 color={"white"} fontSize={"1.5rem"} fontWeight={"semibold"}>Keep scrolling</x.h2>
                    <x.img w={8} src={arrowThree.src} />
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
    font-weight: 700;
    font-size: 10rem;
`

export default ProjectsEnd;