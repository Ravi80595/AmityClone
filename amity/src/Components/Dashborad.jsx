import { Box,Flex,Image,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineBell,AiOutlineSetting,AiOutlineAlibaba,AiOutlineWifi} from 'react-icons/ai'
import {BiSolidDownArrow,BiSolidRightArrow,BiSolidLeftArrow, BiCalendar,BiSolidUser} from 'react-icons/bi'
import {IoContractSharp, IoHome} from 'react-icons/io5'
import {SlCalender} from 'react-icons/sl'
import {FaBook,FaRegComment} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import {BiTimeFive} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'
import {BsFillTagFill,BsCircleFill} from 'react-icons/bs'
import {LiaCcMastercard} from 'react-icons/lia'
import photo1 from '../Images/photo1.png'
import './Dashboard.css'
import photo2 from '../Images/photo2.png'

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
        <Flex color={'#0065bb'} pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Home</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <SlCalender/>
            </Box>
            <Text ml={2} pt={1}>My Calender</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FaBook/>
            </Box>
            <Text ml={2} pt={1}>My Courses</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FiEdit/>
            </Box>
            <Text ml={2} pt={1}>Regisgtration</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FiEdit/>
            </Box>
            <Text ml={2} pt={1}>Apply For Scholarship</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BiTimeFive/>
            </Box>
            <Text ml={2} pt={1}>Time Table</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <HiUserGroup/>
            </Box>
            <Text ml={2} pt={1}>My Faculty</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <AiOutlineAlibaba/>
            </Box>
            <Text ml={2} pt={1}>Examination</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <AiOutlineAlibaba/>
            </Box>
            <Text ml={2} pt={1}>ATPC Placement</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BsFillTagFill/>
            </Box>
            <Text ml={2} pt={1}>Student Document</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <LiaCcMastercard/>
            </Box>
            <Text ml={2} pt={1}>Fee Details</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <LiaCcMastercard/>
            </Box>
            <Text ml={2} pt={1}>IAD</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BiSolidRightArrow/>
            </Box>
            <Text ml={2} pt={1}>ID Card</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <FaRegComment/>
            </Box>
            <Text ml={2} pt={1}>Suggestion Box</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BiSolidRightArrow/>
            </Box>
            <Text ml={2} pt={1}>The Global Times</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <AiOutlineWifi/>
            </Box>
            <Text ml={2} pt={1}>Registration For Wifi</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <BsFillTagFill/>
            </Box>
            <Text ml={2} pt={1}>Research Repository</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
            <Box pt={2}>
            <IoHome/>
            </Box>
            <Text ml={2} pt={1}>Hostel</Text>
        </Flex>
        <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
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
            <Text ml={2} pt={1} color={'#0065bb'}>Home 
             </Text>
             <Text ml={2} pt={1}>Dashboard</Text>
        </Flex>


        <Flex w={'90%'} m={'auto'} mt={10} justifyContent={'space-around'}>  
        <Box h={150} w={'270px'} background={'#77dcc0'} pt={2} borderTopRightRadius={5} borderBottomLeftRadius={5}>
            <Image src={photo1}/>
        </Box>
        <Box pt={10} h={150}  w={'270px'} background={'#e6657c'} borderTopRightRadius={5} borderBottomLeftRadius={5}>
        <Text textAlign={'left'} color={'white'} pl={5} fontWeight={'600'}>No Fee Due </Text>
        </Box>
        <Box p={5} fontWeight={'600'} color={'white'} pt={3} background={'#46a6f9'} textAlign={'left'} h={150} fontSize={'14px'} w={'270px'} borderTopRightRadius={5} borderBottomLeftRadius={5}>
            <Text>Live classes</Text>
            <Text color={'#a92020'}>Download Microsoft Teams</Text>
            <Text>Email-id:</Text>
            <Text>simran53@s.amity.edu</Text>
            <Text>Password : M@EFA135@l</Text> 
            <Text color={'#a92020'} fontWeight={'400'}>Help Netiquette Guide</Text>
        </Box>
        <Box color={'white'} h={150} background={'#ffb100'} w={'270px'} borderTopRightRadius={5} borderBottomLeftRadius={5}>
        <Text pt={2}>Students' Services</Text>
        <Text textAlign={'left'} pt={5} color={'black'} pl={3}>click Here</Text>
        </Box>
    </Flex>

<Flex w={'95%'} justifyContent={'space-between'} m={'auto'} mt={10}>
    <Box w={'49%'} border={'1px solid #0065bb'} borderRadius={5}>
        <Box background={'#ececec'} p={4} fontSize={'21px'} fontWeight={'600'} pt={2} borderBottom={'1px solid grey'}>
        <Text textAlign={'left'}>My Classes</Text>
        </Box>
        <Flex mt={1} p={5} pt={2}>
            <Box background={'#ececec'} _hover={{background:'white',color:'#ffb100'}} cursor={'pointer'} color={'#0065bb'} border={'1px solid grey'} p={2}>
                <BiSolidLeftArrow/>
            </Box>
            <Box background={'#ececec'} _hover={{background:'white',color:'#ffb100'}} cursor={'pointer'} color={'#0065bb'} border={'1px solid grey'} p={2}>
                <BiSolidRightArrow/>
            </Box>
            <Box background={'#ececec'} _hover={{background:'white',color:'#ffb100'}} cursor={'pointer'} color={'#0065bb'} border={'1px solid grey'} p={2} ml={3}>
                <BiCalendar/>
            </Box>
            <Box>
                <Text ml={'175px'} fontSize={'18px'} fontWeight={'600'}>
                    September 13, 2023
                </Text>
            </Box>
        </Flex>
        <Box border={'1px solid grey'} m={5} mt={1}>
            <Box borderBottom={'1px solid grey'}>
            <Text m={3} fontWeight={'600'} fontSize={'18px'} textAlign={'left'}>Wednesday</Text>
            </Box>
            <Flex p={3} _hover={{background:'#ececec'}} cursor={'pointer'}>
                <Text marginRight={'20px'} color={'#0065bb'}>10:26 - 11:20</Text>
                <Box paddingTop={'7px'}>
                <BsCircleFill fontSize={'15px'}/>
                </Box>
                <Box marginLeft={'10px'} color={'#c74c78'}>
                    <Flex gap={'5px'}>
                    <FaBook/>
                    <Text fontSize={'12px'}> LAW2108 BUSINESS ORGANIZATION & MANAGEMENT</Text>
                    </Flex>
                    <Flex gap={'5px'} color={'#0065bb'}>
                    <BiSolidUser/>
                    <Text fontSize={'12px'}>Dr Minakshi Soni [25245] (B-215)</Text>
                    </Flex>
                </Box>
                <Box>
                </Box>
            </Flex>
            <Flex p={3} _hover={{background:'#ececec'}} cursor={'pointer'}>
                <Text marginRight={'20px'} color={'#0065bb'}>10:26 - 11:20</Text>
                <Box paddingTop={'7px'}>
                <BsCircleFill fontSize={'15px'}/>
                </Box>
                <Box marginLeft={'10px'} color={'#c74c78'}>
                    <Flex gap={'5px'}>
                    <FaBook/>
                    <Text fontSize={'12px'}> LAW2108 BUSINESS ORGANIZATION & MANAGEMENT</Text>
                    </Flex>
                    <Flex gap={'5px'} color={'#0065bb'}>
                    <BiSolidUser/>
                    <Text fontSize={'12px'}>Dr Minakshi Soni [25245] (B-215)</Text>
                    </Flex>
                </Box>
                <Box>
                </Box>
            </Flex>
            <Flex p={3} _hover={{background:'#ececec'}} cursor={'pointer'}>
                <Text marginRight={'20px'} color={'#0065bb'}>10:26 - 11:20</Text>
                <Box paddingTop={'7px'}>
                <BsCircleFill fontSize={'15px'}/>
                </Box>
                <Box marginLeft={'10px'} color={'#c74c78'}>
                    <Flex gap={'5px'}>
                    <FaBook/>
                    <Text fontSize={'12px'}> LAW2108 BUSINESS ORGANIZATION & MANAGEMENT</Text>
                    </Flex>
                    <Flex gap={'5px'} color={'#0065bb'}>
                    <BiSolidUser/>
                    <Text fontSize={'12px'}>Dr Minakshi Soni [25245] (B-215)</Text>
                    </Flex>
                </Box>
                <Box>
                </Box>
            </Flex>
            <Flex p={3} _hover={{background:'#ececec'}} cursor={'pointer'}>
                <Text marginRight={'20px'} color={'#0065bb'}>10:26 - 11:20</Text>
                <Box paddingTop={'7px'}>
                <BsCircleFill fontSize={'15px'}/>
                </Box>
                <Box marginLeft={'10px'} color={'#c74c78'}>
                    <Flex gap={'5px'}>
                    <FaBook/>
                    <Text fontSize={'12px'}> LAW2108 BUSINESS ORGANIZATION & MANAGEMENT</Text>
                    </Flex>
                    <Flex gap={'5px'} color={'#0065bb'}>
                    <BiSolidUser/>
                    <Text fontSize={'12px'}>Dr Minakshi Soni [25245] (B-215)</Text>
                    </Flex>
                </Box>
                <Box>
                </Box>
            </Flex>
            <Flex p={3} _hover={{background:'#ececec'}} cursor={'pointer'}>
                <Text marginRight={'20px'} color={'#0065bb'}>10:26 - 11:20</Text>
                <Box paddingTop={'7px'}>
                <BsCircleFill fontSize={'15px'}/>
                </Box>
                <Box marginLeft={'10px'} color={'#c74c78'}>
                    <Flex gap={'5px'}>
                    <FaBook/>
                    <Text fontSize={'12px'}> LAW2108 BUSINESS ORGANIZATION & MANAGEMENT</Text>
                    </Flex>
                    <Flex gap={'5px'} color={'#0065bb'}>
                    <BiSolidUser/>
                    <Text fontSize={'12px'}>Dr Minakshi Soni [25245] (B-215)</Text>
                    </Flex>
                </Box>
                <Box>
                </Box>
            </Flex>
        </Box>
    </Box>
    <Box w={'49%'} border={'1px solid #0065bb'}>
    <Box background={'#ececec'} p={4} fontSize={'21px'} fontWeight={'600'} pt={2} borderBottom={'1px solid grey'}>
        <Text textAlign={'left'}>My Attendance
</Text>
        </Box>
        <Box>
            <Box>
            <Image borderBottom={'1px solid grey'} src={photo2}/>
            </Box>
            <Box>
            <Image src={photo2}/>
            </Box>
            <Image src={photo2}/>
            <Image src={photo2}/>
            <Image src={photo2}/>

        </Box>
    </Box>  
</Flex>

    </Box>
</Flex>
 


    </Box>
  )
}

export default Dashborad