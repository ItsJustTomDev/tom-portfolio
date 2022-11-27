import React, { useRef } from "react";
import Header from "@ui/components/header";
import styled from "styled-components";
import Hero from "@ui/components/hero";
import About from "@ui/components/about";

import { x } from "@xstyled/styled-components"
import { motion, useScroll } from "framer-motion";
import Projects from "@ui/components/projects-section";
import ProjectListing from "@ui/components/project-listing";
import ProjectsEnd from "@ui/components/projects-end";
import Footer from "@ui/components/footer";

export default function Home() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    return (
        <AppContainer>
            <x.div ref={ref} h={"300vh"}>
                <x.div position={"sticky"} top={0}>
                    <Header scrollYProgress={scrollYProgress} />
                    <Hero scrollYProgress={scrollYProgress} />
                </x.div>

                <x.div position={"sticky"} top={0}>
                    <About scrollYProgress={scrollYProgress} />
                </x.div>
            </x.div>

            <Projects />
            <Footer />
        </AppContainer>
    )
}

const AppContainer = styled.div`
    font-family: "Clash Display Variable";
    src: "url(@assets/fonts/clashy-font.ttf)";
    font-weight: 400;

    /* background-color: #FFF5EC; */
    background-image: url(/images/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    /* height: 100%; */

    display: flex;
    flex-direction: column;
`