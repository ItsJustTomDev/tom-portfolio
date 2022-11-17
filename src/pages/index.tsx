import {Box, FlexBox} from "@ui/components/boxes";
import {Heading, Text} from "@ui/components/text";
import styled from "styled-components";

export default function Home() {
    return (
        <FlexBox width={"100%"} height={"100%"} backgroundColor={"blue.500"} justifyContent={"center"} alignItems={"center"}>
            <FlexBox width={["20rem", "30rem", "40rem", "50rem"]} height={["10rem", "20rem", "30rem", "40rem"]} backgroundColor={"white"} borderRadius={"2rem"} p={5}>

                <Text>x</Text>

                <Heading m={0} as={"h3"}>Hoi</Heading>

                <CustomComponent>
                    Hoi
                </CustomComponent>

            </FlexBox>
        </FlexBox>
    )
}

const CustomComponent = styled(Box)`
    padding: 5rem;
    background-color: red;
`