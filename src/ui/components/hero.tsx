import React, { useRef } from "react";
import { x } from "@xstyled/styled-components"

import { useTransform, motion } from "framer-motion"

const Hero = ({ scrollYProgress }: any) => {
    const removeColumnTwo = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"])
    const hideText = useTransform(scrollYProgress, [0, 0.5], ["2.75rem", "0rem"])

    const changeWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])
    const changeHeight = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"])

    const changePaddingTopForCenter = useTransform(scrollYProgress, [0, 1], ["0%", "6rem"])
    const changePadding = useTransform(scrollYProgress, [0.2, 0.5], ["4rem", "0rem"])
    const changePaddingTop = useTransform(scrollYProgress, [0, 0.5], ["8rem", "0rem"]);

    const makeTextBigger = useTransform(scrollYProgress, [0, 0.5], ["2.75rem", "5rem"])
    const makeTextBigger2 = useTransform(scrollYProgress, [0, 0.5], ["6.25rem", "10rem"])
    const makeTextBigger3 = useTransform(scrollYProgress, [0, 0.5], ["1.5rem", "3rem"])

    const hideOtherThing = useTransform(scrollYProgress, [0.5, 1], [1, 0])

    return (
        <x.div display={"flex"}>
            <x.div as={motion.div} style={{ paddingTop: changePaddingTop }} display={"flex"} justifyContent={"space-between"} w={"full"}>

                <x.div as={motion.div} style={{ paddingLeft: changePadding, overflow: "hidden" }} w={"full"}>
                    <x.div as={motion.div} style={{ width: changeWidth, paddingTop: changePaddingTopForCenter, scale: hideOtherThing }} minWidth={"fit-content"} display={"flex"} justifyContent={"center"}>
                        <x.div display={"flex"} flexDirection={"column"} gap={3}>
                            <x.div as={motion.div} display={"flex"} flexDirection={"column"}>
                                <x.h2
                                    as={motion.h2}
                                    style={{ width: changeWidth, fontSize: makeTextBigger }}
                                    minWidth={"fit-content"}
                                    fontSize={"2.75rem"}
                                    fontWeight={"semibold"}
                                    textAlign={"center"}
                                    color={"#CE0000"}
                                >TOM WUIJSTER</x.h2>

                                <x.h1
                                    as={motion.h2}
                                    style={{ width: changeWidth, fontSize: makeTextBigger2 }}
                                    minWidth={"fit-content"}
                                    fontSize={"6.25rem"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    color={"black"}
                                >Frontend web</x.h1>

                                <x.h1 as={motion.h2}
                                    style={{ width: changeWidth, fontSize: makeTextBigger2 }}
                                    minWidth={"fit-content"}
                                    fontSize={"6.25rem"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    color={"black"}
                                >developer</x.h1>

                            </x.div>
                            <x.div display={"flex"} flexDirection={"column"} gap={3}>
                                <x.p
                                    as={motion.p}
                                    style={{ width: changeWidth, fontSize: makeTextBigger3 }}
                                    minWidth={"fit-content"}
                                    textAlign={"center"}
                                    fontSize={"1.5rem"}
                                >If you didn’t notice yet, I love the web & everything about it!</x.p>

                                <x.p
                                    as={motion.p}
                                    style={{ width: changeWidth, fontSize: makeTextBigger3 }}
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
                                    <x.button as={motion.button} style={{ fontSize: makeTextBigger3 }} border={3} borderRadius={"full"} bg={"transparent"} px={4} py={1} fontSize={"1.5rem"}>Scroll to learn more</x.button>
                                </x.div>
                            </x.div>
                        </x.div>
                    </x.div>
                </x.div>

                <x.div as={motion.div} style={{ width: removeColumnTwo, height: changeHeight }} display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                    <x.div bg={"#ECE3FF"} h={"full"} w={"90%"}>
                        <x.h1 as={motion.div} style={{ fontSize: hideText }} fontWeight={"semibold"} color={"#002FA8"} fontSize={"2.75rem"} p={2}>BASED IN GREECE, CRETE</x.h1>
                    </x.div>
                    <x.div bg={"#FFE6CE"} h={"full"} w={"70%"} display={"flex"} justifyContent={"center"} alignItems={"center"}> </x.div>
                </x.div>
            </x.div>

        </x.div>
    )
}

export default Hero;