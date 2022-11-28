import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Header from "@ui/components/header";
import Hero from "@ui/components/hero";
import About from "@ui/components/about";
import Projects from "@ui/components/projects-section";
import Footer from "@ui/components/footer";

import { x } from "@xstyled/styled-components"
import { useScroll } from "framer-motion";
import { animateScroll } from "react-scroll"

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress, scrollY } = useScroll({
        target: ref
    })

    const onClick = () => {
        const screenheight = ref.current?.offsetHeight! / 1.5
        animateScroll.scrollTo(screenheight);
    }

    useEffect(() => {
        setIsMobile(window.innerWidth < 1400)
    }, [])

    return (
        <AppContainer>
            {!isMobile ? (
                <>
                    <x.div ref={ref} h={"300vh"}>
                        <x.div position={"sticky"} top={0} h={"100vh"}>
                            <Header scrollYProgress={scrollYProgress} />
                            <Hero onClick={() => onClick()} scrollYProgress={scrollYProgress} />
                        </x.div>

                        <x.div position={"sticky"} top={0}>
                            <About scrollYProgress={scrollYProgress} />
                        </x.div>
                    </x.div>

                    <Projects />
                    <Footer /></>
            ) : (
                <x.div h={"100vh"} display={"flex"} justifyContent={"center"}>
                    <x.h1 pt={"7rem"} w={"80%"} textAlign={"center"} fontWeight={"bold"} fontSize={"2rem"}>Hi, please visit my portfolio on a computer!</x.h1>
                </x.div>
            )}
        </AppContainer>
    )
}

const AppContainer = styled.div`
    font-family: "Clash Display Variable";
    src: "url(@assets/fonts/clashy-font.ttf)";
    font-weight: 400;

    background-image: url(/images/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;
`