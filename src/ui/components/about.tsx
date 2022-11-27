import React from "react";
import { x } from "@xstyled/styled-components";
import styled from "styled-components";
import { motion, useTransform } from "framer-motion";

const About = ({ scrollYProgress }: any) => {
    const scale = useTransform(scrollYProgress, [0.5, 1], [0, 1])

    return (
        <x.div id="about" as={motion.div} style={{ scale: scale }} display={"flex"} pt={24} justifyContent={"space-around"} h={"100vh"}>
            <x.div w={"50%"}>
                <x.div pl={16}>
                    <x.div position={"relative"}>
                        <OutlinedText>About</OutlinedText>
                        <x.h2 position={"absolute"} top={"3rem"} left={"6rem"} fontSize={"3.75rem"} fontWeight={"semibold"}>About</x.h2>
                    </x.div>
                </x.div>

                <x.div pl={32}>
                    <x.p fontSize={"1.5rem"} w={"50%"}>
                        Hi, Tom here. Obviously!
                        {/* Breaks for to create new lines :) */}
                        <br /> <br />

                        As a frontend web developer, I solve everyday development problems through my work.
                        I often come up with new ideas to deal with the issues that occur in my field.
                        I work out of Greece, Crete. Oh did I forgot to mention that I am only 18 years old?
                        <br /> <br />

                        For me, there is just something about the web that I absolutely love.
                        I love watching the code give life to something, it's magical.
                    </x.p>
                </x.div>
            </x.div>

            <x.div display={"flex"} flexDirection={"column"} w={"30%"} gap={24}>
                <x.div>
                    <x.h1 fontSize={"2.5rem"} fontWeight={"medium"}>Frontend Tools</x.h1>
                    <x.p fontSize={"1.5rem"} w={"60%"}>Typescript, Javascript, HTML5, React.js Next.js, Redux Toolkit, React Testing Library, Jest, Git/Github</x.p>
                </x.div>


                <x.div>
                    <x.h1 fontSize={"2.5rem"} fontWeight={"medium"}>UI Libraries</x.h1>
                    <x.p fontSize={"1.5rem"} w={"60%"}>CSS3/SCSS/SASS, Framer Motion, GSAP, Styled Components, Tailwind CSS, Material UI, Chakra UI.</x.p>
                </x.div>

                <x.div>
                    <x.h1 fontSize={"2.5rem"} fontWeight={"medium"}>Interests</x.h1>
                    <x.p fontSize={"1.5rem"} w={"60%"}>Three.js, React Three Fiber, UI/UX design, Framer Motion.</x.p>
                </x.div>
            </x.div>





        </x.div>
    )
}

const OutlinedText = styled.h1`
    text-shadow:
        -3px -3px 0 #000,
        3px -3px 0 #000,
        -3px 3px 0 #000,
        3px 3px 0 #000;
    
    color: #FFF5EC;
    font-weight: 700;
    opacity: 20%;
    font-size: 12.5rem;
`

export default About;