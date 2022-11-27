import React from "react";
import { x } from "@xstyled/styled-components"
import styled from "styled-components"

import github from "@assets/images/github.svg"

const ProjectListing = ({ img, title, description, madeWith, techStack, actionText, actionUrl }: any) => {

    return (
        <x.div bg={"#282828"} h={"100vh"} pt={10} display={"flex"} justifyContent={"center"} >

            <x.div display={"flex"} flexDirection={"column"}>
                <x.div display={"flex"} gap={4}>
                    <x.h1 fontSize={"10rem"} fontWeight={"bold"} color={"white"}>Build with</x.h1>
                    <OutlinedText>{madeWith}</OutlinedText>
                </x.div>

                <x.div display={"flex"} gap={6}>
                    <x.div>
                        <img src={img} alt="" />
                    </x.div>

                    <x.div display={"flex"} flexDirection={"column"} maxWidth={"fit-content"} justifyContent={"space-between"}>
                        <x.div>
                            <x.h2 w={"fit-content"} color={"white"} fontSize={"2rem"} fontWeight={"bold"} mt={4}>{title}</x.h2>
                            <x.p w={"70%"} fontSize={"1.5rem"} color={"white"}>{description}</x.p>
                        </x.div>

                        <x.div>
                            <x.h2 fontSize={"2rem"} color={"white"} fontWeight={"bold"}>Tech Stack</x.h2>
                            <x.ul fontSize={"1.5rem"} color={"white"}>
                                {techStack.map((tech: string) => (
                                    <x.li>{tech}</x.li>
                                ))}
                            </x.ul>
                        </x.div>

                        <x.a href={actionUrl} w={"fit-content"} bg={"transparent"} display={"flex"} alignItems={"center"} gap={2}>
                            <x.h2 color={"white"} fontSize={"1.5rem"} textDecoration={"underline"} fontWeight={"semibold"}>{actionText}</x.h2>
                        </x.a>
                    </x.div>
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

export default ProjectListing;