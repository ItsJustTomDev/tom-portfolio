import React, { useEffect, useState } from 'react';

import { x } from "@xstyled/styled-components";
import TomDevLogo from "@assets/images/tomdev.jpeg";

import { useTransform, motion } from "framer-motion"

const Header = ({ scrollYProgress }: any) => {
    const pushHeaderUp = useTransform(scrollYProgress, [0, 1], ["0rem", "-5rem"])
    const height = useTransform(scrollYProgress, [0, 1], ["5rem", "0rem"])

    return (
        <motion.div style={{ y: pushHeaderUp, height: height }}>
            <x.div display={"flex"} alignItems={"center"} justifyContent={"space-between"} py={3} px={16}>
                <x.div>
                    <x.img w={"16"} borderRadius={"full"} src={TomDevLogo.src} />
                </x.div>

                {/* <x.ul display={"flex"} gap={6} fontSize={"1.5rem"}>
                    <x.li>
                        <x.a color={"black"} fontWeight={"semibold"} href="#">Home</x.a>
                    </x.li>
                    <x.li>
                        <x.a color={"black"} href="#">About</x.a>
                    </x.li>
                    <x.li>
                        <x.a color={"black"} href="#">Work</x.a>
                    </x.li>
                    <x.li>
                        <x.a color={"black"} href="#">Contact</x.a>
                    </x.li>
                </x.ul> */}
            </x.div>
        </motion.div >
    )
}

export default Header;