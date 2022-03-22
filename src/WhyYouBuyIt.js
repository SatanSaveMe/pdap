import {Flex,Text,Divider,Box,Center,Heading} from "@chakra-ui/react"
import Gif from "./Gif";

const WhyYouBuyIt = ({}) => {
        return (<Flex flexDirection="row" width="100%" className="buyItSectionParent" color="white">
            {/* <div className="buyItSectionChild"> */}
                <Box flex="2">
                    <Center>
                        <div style={{marginTop:"15px"}}>
                        <Gif/>
                        </div>
                    </Center>
                </Box>
                <Box flex="3">
                    <Center>
                        <Text padding="20px" className="buyItSectionChild" color="white">
                            <Heading as='h2' size='3xl'>Why would you want to own a Metis ApeWife?</Heading>
                            <Divider orientation='horizontal' />
                            <p>    
                            Because mDAW aspires to build an active and engaged community on Metis Network
                            </p>
                            <Divider orientation='horizontal' />
                            <p>    
                            Owning a mDAW adds value to your online identity. You have the complete ownership of a digital work of art
                            </p>
                            <Divider orientation='horizontal' />
                            <p>
                                Metis NFT ecosystem is just getting started so there's a lot of room for growth and development
                            </p>
                            <Divider orientation='horizontal' />
                            <p>
                                Hodling an NFT will be gradually more and more valuable by offering privileges and rewards to hodlers
                            </p>
                            </Text>
                    </Center>
                </Box>
            {/* </div> */}
        </Flex>);
}
export default WhyYouBuyIt;