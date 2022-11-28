import React, { useRef } from "react";
import styled from "styled-components";

import ProjectsInitial from "./projects-initial";
import ProjectListing from "./project-listing";
import ProjectsEnd from "./projects-end";

import { x } from "@xstyled/styled-components"
import { motion, useScroll, useTransform } from "framer-motion";

import projectOne from "@assets/images/project-1.svg";
import projectTwo from "@assets/images/project-2.svg";
import projectThree from "@assets/images/project-3.svg";

const Projects = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const fullScreenPoint = 0.15;
    const yValue = useTransform(scrollYProgress, [0, fullScreenPoint], ["0rem", "-28rem"]);
    const padding = useTransform(scrollYProgress, [0, fullScreenPoint], ["5rem,", "0rem"]);
    const height = useTransform(scrollYProgress, [0, fullScreenPoint], ["60vh", "100vh"]);

    const components = [
        <ProjectsInitial key={1} />,
        <ProjectListing key={2} img={projectOne.src}
            title={"Project - Personal blog"}
            madeWith={"Nextjs"}
            description={`
            This project is a personal blog I have made for fun and learning new things. 
            In this project I have used all best-practices. 
            The framework I have chosen for this project is Nextjs.
            `}

            techStack={["React", "Nextjs", "Typescript", "MySql", "MUI", "Tailwind"]}
            actionText={"View the source"}
            actionUrl={"https://github.com/ItsJustTomDev/tomdev-blog"}
        />,

        <ProjectListing key={3} img={projectTwo.src}
            title={"Project - Therapy Website"}
            madeWith={"Nextjs"}
            description={`
            This is a project that I made for my first official client!
            The job was to create a landing page for the clients new startup.
            This project included designing the UI & UX aswell as programming it into reality,
            and that is something I truly love about web development!`}

            techStack={["React", "Nextjs", "Typescript", "Nextjs backend (API)", "SMTP", "Tailwind"]}
            actionText={"View the website"}
            actionUrl={"https://irmatherapia.dyslexia-correction.gr/"}
        />,

        <ProjectListing key={4} img={projectThree.src}
            title={"Project - ShoppyList"}
            madeWith={"ReactNative"}
            description={`
            This project is my own mobile app made using React Native.
            The goal of this app was to make it easier to share shopping lists with friends and family.
            As user are you able to create a list and within that list you can create multiple so called "stores",
            these stores are seperate shopping lists in the same global list!
            `}

            techStack={["React Native", "Typescript", "Google cloud platform", "Firebase", "Firestore", "Firebase authentication", "Expo"]}
            actionText={"View the case study"}
            actionUrl={"https://www.figma.com/file/cxGVvOsu8A0BIVYmVSa89K/ShoppyList-CaseStudy?node-id=0%3A1&t=9iIRu22tllGy0KfU-1"}
        />,


        <ProjectsEnd key={5} />

    ]

    const xRange = ["0vw", `-${(components.length - 1) * 100}vw`];
    const xValue = useTransform(scrollYProgress, [0.28, 0.98], xRange);

    return (
        <x.div ref={ref} h={"500vh"} w={"full"} bg={"#FDFAF5"} >

            <x.div as={motion.div} pb={5} style={{ padding: padding }} pt={"0 !important"} position={"sticky"} top={0} h={"100vh"} overflow={"hidden"} >

                <x.div bg={"#FDFAF5"} display={"flex"} flexDirection={"column"} alignItems={"center"} h={{ _: "28rem" }}>
                    <x.div display={"flex"} flexDirection={"column"} w={"fit-content"} alignItems={"flex-end"}>

                        <x.div display={"flex"}>
                            <x.h1 fontSize={"12.5rem"} fontWeight={"bold"}>MY</x.h1>
                            <OutlinedText>FEATURED</OutlinedText>
                        </x.div>

                        <x.div>
                            <x.h1 fontSize={"12.5rem"} fontWeight={"bold"}>WORK</x.h1>
                        </x.div>
                    </x.div>
                </x.div>

                <x.div>
                    <x.div
                        as={motion.div}
                        bg={"#282828"}
                        display={"flex"}
                        w={"full"}
                        style={{ y: yValue, height: height }}
                    >
                        <x.div
                            as={motion.div}
                            w={"full"}
                            h={"full"}
                            display={"flex"}
                            style={{ x: xValue }}
                        >
                            {components.map((Component, index) => (
                                <x.div as={motion.div} key={index} minWidth={"100vw"}>
                                    {Component}
                                </x.div>
                            ))}
                        </x.div>
                    </x.div>
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
    font-size: 12.5rem;
`

export default Projects;