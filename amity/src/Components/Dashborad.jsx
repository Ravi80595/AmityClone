import { Box,Flex,Image,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineBell,AiOutlineSetting,AiOutlineAlibaba,AiOutlineWifi} from 'react-icons/ai'
import {BiSolidDownArrow,BiSolidRightArrow} from 'react-icons/bi'
import {IoHome} from 'react-icons/io5'
import {SlCalender} from 'react-icons/sl'
import {FaBook,FaRegComment} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import {BiTimeFive} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'
import {BsFillTagFill} from 'react-icons/bs'
import {LiaCcMastercard} from 'react-icons/lia'

const Dashborad = () => {


return (
    <Box>
        <Box>
            <Flex h={'55px'}>
                <Box background={'#ff9b10'} w={'15%'}>
                    <Image w={'70%'} m={'auto'} h={'45px'} src='https://s.amizone.net/login-files/amizone-logo.png'/>
                </Box>
                <Flex w={'85%'} background={'#0065bb'} justifyContent={'space-between'}>
                    <Box>
                        <Text pl={10} pt={3} fontSize={'20px'} color={'white'}>Amity University Gurugram</Text>
                    </Box>
                    <Flex>
                        <Flex mr={5} color={'white'}>  
                            <Flex w={'60px'} p={2}  justifyContent={'center'} fontSize={'20px'} pt={5} background={'#525252'} color={'white'}> 
                            <AiOutlineBell/>
                            <Text mt={-1} fontSize={'16px'}>10</Text>
                            </Flex>
                            <Flex w={'50px'} justifyContent={'center'} fontSize={'20px'} pt={5} background={'#a7243b'}>
                            <AiOutlineBell/>
                            </Flex>
                            <Flex w={'50px'} justifyContent={'center'} fontSize={'20px'} pt={5} background={'#1d721b'}>
                            <AiOutlineBell/>
                            </Flex>
                            <Flex w={'50px'} justifyContent={'center'} fontSize={'20px'} pt={5} background={'#c4544c'}>
                            <AiOutlineSetting/>
                            </Flex>
                        </Flex>
                        <Flex p={2} justifyContent={'space-around'}> 
                            <Image borderRadius={350} w={10} src='https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large'/>
                            <Box>
                                Ms Simran <br />
                                A5787956
                            </Box>
                            <BiSolidDownArrow mt={5}/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>


<Flex>
    <Box w={'15%'} border={'2px solid grey'}>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Home</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <SlCalender/>
            </Box>
            <Text ml={2} pt={1}>My Calender</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FaBook/>
            </Box>
            <Text ml={2} pt={1}>My Courses</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FiEdit/>
            </Box>
            <Text ml={2} pt={1}>Regisgtration</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FiEdit/>
            </Box>
            <Text ml={2} pt={1}>Apply For Scholarship</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BiTimeFive/>
            </Box>
            <Text ml={2} pt={1}>Time Table</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <HiUserGroup/>
            </Box>
            <Text ml={2} pt={1}>My Faculty</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <AiOutlineAlibaba/>
            </Box>
            <Text ml={2} pt={1}>Examination</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <AiOutlineAlibaba/>
            </Box>
            <Text ml={2} pt={1}>ATPC Placement</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BsFillTagFill/>
            </Box>
            <Text ml={2} pt={1}>Student Document</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <LiaCcMastercard/>
            </Box>
            <Text ml={2} pt={1}>Fee Details</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <LiaCcMastercard/>
            </Box>
            <Text ml={2} pt={1}>IAD</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BiSolidRightArrow/>
            </Box>
            <Text ml={2} pt={1}>ID Card</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FaRegComment/>
            </Box>
            <Text ml={2} pt={1}>Suggestion Box</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BiSolidRightArrow/>
            </Box>
            <Text ml={2} pt={1}>The Global Times</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <AiOutlineWifi/>
            </Box>
            <Text ml={2} pt={1}>Registration For Wifi</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BsFillTagFill/>
            </Box>
            <Text ml={2} pt={1}>Research Repository</Text>
        </Flex>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
    </Box>
    <Box w='85%'>
        <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Home > Dashboard</Text>
        </Flex>
    </Box>
</Flex>



    </Box>
  )
}

export default Dashborad