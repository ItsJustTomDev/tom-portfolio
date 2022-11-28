import React from "react";
import arrowOne from "@assets/images/arrow-1.svg";

import { x } from "@xstyled/styled-components";
import { useTransform, motion } from "framer-motion";


const Hero = ({ scrollYProgress, onClick }: any) => {
    const removeColumnTwo = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"])
    const removeColumnTwoText = useTransform(scrollYProgress, [0, 0.5], ["2.75rem", "0rem"])

    const changeWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])
    const changeHeight = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"])

    const changePaddingTopToCenter = useTransform(scrollYProgress, [0, 1], ["0%", "6rem"])
    const removePaddingTop = useTransform(scrollYProgress, [0, 0.5], ["8rem", "0rem"]);
    const changePaddingLeft = useTransform(scrollYProgress, [0.2, 0.5], ["4rem", "0rem"])

    const heroNameTextLarge = useTransform(scrollYProgress, [0, 0.5], ["2.75rem", "5rem"])
    const heroHeadlineTextLarge = useTransform(scrollYProgress, [0, 0.5], ["6.25rem", "10rem"])
    const heroDetailTextLarge = useTransform(scrollYProgress, [0, 0.5], ["1.5rem", "3rem"])

    const hideHeroSection = useTransform(scrollYProgress, [0.5, 0.9], [1, 0])

    return (
        <x.div display={"flex"} h={"full"} flexDirection={"column"} overflow={"hidden"}>

            <x.div as={motion.div} style={{ paddingTop: removePaddingTop }} display={"flex"} justifyContent={"space-between"} w={"full"}>
                <x.div as={motion.div} style={{ paddingLeft: changePaddingLeft, overflow: "hidden" }} w={"full"}>
                    <x.div as={motion.div} style={{ width: changeWidth, paddingTop: changePaddingTopToCenter, scale: hideHeroSection }} minWidth={"fit-content"} display={"flex"} justifyContent={"center"}>
                        <x.div display={"flex"} flexDirection={"column"} gap={3}>
                            <x.div as={motion.div} display={"flex"} flexDirection={"column"}>
                                <x.h2
                                    as={motion.h2}
                                    style={{ width: changeWidth, fontSize: heroNameTextLarge }}
                                    minWidth={"fit-content"}
                                    fontSize={"2.75rem"}
                                    fontWeight={"semibold"}
                                    textAlign={"center"}
                                    color={"#CE0000"}
                                >TOM WUIJSTER</x.h2>

                                <x.h1
                                    as={motion.h2}
                                    style={{ width: changeWidth, fontSize: heroHeadlineTextLarge }}
                                    minWidth={"fit-content"}
                                    fontSize={"6.25rem"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    color={"black"}
                                >Frontend Web</x.h1>

                                <x.h1 as={motion.h2}
                                    style={{ width: changeWidth, fontSize: heroHeadlineTextLarge }}
                                    minWidth={"fit-content"}
                                    fontSize={"6.25rem"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    color={"black"}
                                >Developer</x.h1>

                            </x.div>
                            <x.div display={"flex"} flexDirection={"column"} gap={3}>
                                <x.p
                                    as={motion.p}
                                    style={{ width: changeWidth, fontSize: heroDetailTextLarge }}
                                    minWidth={"fit-content"}
                                    textAlign={"center"}
                                    fontSize={"1.5rem"}
                                >If you didn’t notice yet, I love the web & everything about it!</x.p>

                                <x.p
                                    as={motion.p}
                                    style={{ width: changeWidth, fontSize: heroDetailTextLarge }}
                                    minWidth={"fit-content"}
                                    textAlign={"center"}
                                    fontSize={"1.5rem"}
                                >You might be interested to see some of my <x.span>work</x.span></x.p>

                                <x.div
                                    as={motion.div}
                                    style={{ width: changeWidth }}
                                    minWidth={"fit-content"}
                                    textAlign={"center"}
                                >
                                    <x.button onClick={() => onClick()} as={motion.button} style={{ fontSize: heroDetailTextLarge }} border={3} borderRadius={"full"} bg={"transparent"} px={4} py={1} fontSize={"1.5rem"}>Scroll to learn more</x.button>
                                </x.div>
                            </x.div>
                        </x.div>
                    </x.div>
                </x.div>

                <x.div as={motion.div} style={{ width: removeColumnTwo, height: changeHeight }} display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                    <x.div bg={"#ECE3FF"} h={"60%"} w={"90%"}>
                        <x.h1 as={motion.div} style={{ fontSize: removeColumnTwoText }} fontWeight={"semibold"} color={"#002FA8"} fontSize={"2.75rem"} p={2}>BASED IN GREECE, CRETE</x.h1>
                    </x.div>
                    <x.div bg={"#FFE6CE"} h={"60%"} w={"70%"} display={"flex"} justifyContent={"center"} alignItems={"center"}> </x.div>
                </x.div>
            </x.div>

            <x.div flex={1} display={"flex"} justifyContent={"center"} alignItems={"flex-end"}>

                <x.div display={"flex"} flexDirection={"column"} alignItems={"center"} mb={36}>
                    <x.h2 fontSize={"1.5rem"} fontWeight={"semibold"}>Keep scrolling</x.h2>
                    <x.img w={8} src={arrowOne.src} />
                </x.div>

            </x.div>


        </x.div>
    )
}

export default Hero;