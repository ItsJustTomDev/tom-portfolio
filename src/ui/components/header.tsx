import React from "react";
import TomDevLogo from "@assets/images/tomdev.jpeg";

import { x } from "@xstyled/styled-components";
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

                <x.ul display={"flex"} gap={6}>
                    <x.li>
                        <x.a href={"mailto: tomwuijsterdev@gmail.com"} color={"black"} fontSize={"1.5rem"} fontWeight={"semibold"} textDecoration={"underline"}>
                            Email
                        </x.a>
                    </x.li>
                    <x.li>
                        <x.a href={"https://github.com/ItsJustTomDev"} color={"black"} fontSize={"1.5rem"} fontWeight={"semibold"} textDecoration={"underline"}>
                            Github
                        </x.a>
                    </x.li>
                    <x.li>
                        <x.a href={"https://www.linkedin.com/in/tom-wuijster-3b2645248"} color={"black"} fontSize={"1.5rem"} fontWeight={"semibold"} textDecoration={"underline"}>
                            LinkedIn
                        </x.a>
                    </x.li>
                </x.ul>
            </x.div>
        </motion.div >
    )
}

export default Header;