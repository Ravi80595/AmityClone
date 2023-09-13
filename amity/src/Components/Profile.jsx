import { Box,Flex,Image,Text} from '@chakra-ui/react'
import React, { useState } from 'react'
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
import photo3 from '../Images/photo3.png'
import photo4 from '../Images/photo4.png'
import photo5 from '../Images/photo5.png'   
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'

const Profile = () => {
    const [data,setData]=useState(true)



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





                    <Menu>
                    <MenuButton>
                    <Flex _hover={{background:'#484876'}} cursor={'pointer'} gap={3} p={2} justifyContent={'space-around'} color='white'> 
                        <Image borderRadius={350} w={10} src='https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large'/>
                        <Flex>
                        <Box>
                            <Text textAlign={'left'}>
                            Mr Ravi 
                            </Text>
                            <Text fontSize={'10px'}>
                            A578795655
                            </Text>
                        </Box>
                        <Box mt={11}>
                        <BiSolidDownArrow/>
                        </Box>
                        </Flex>
                    </Flex>
</MenuButton>
<MenuList>
<MenuItem>My Profile</MenuItem>
<MenuItem>Change Password</MenuItem>
<MenuItem>Logout</MenuItem>
</MenuList>
</Menu>
                </Flex>
            </Flex>
        </Flex>
    </Box>


<Flex>
{data && <Box position={'absolute'} zIndex={99999} w={'65%'} border={'2px solid grey'}>
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
</Box> }
<Box w='85%'>
    <Flex pb={2} pl={2} borderBottom={'1px solid grey'}>
        <Box pt={2}>
        <IoHome/>
        </Box>
        <Text ml={2} pt={1} color={'#0065bb'}>Home 
         </Text>
         <Text ml={2} pt={1}>My Profile</Text>
</Flex>


<Box borderRadius={10} border={'1px solid blue'} w={'90%'} m={'auto'} mt={10} >
    <Flex borderTopRadius={10} justifyContent={'space-between'} p={3} background={'#4693e0'} color={'white'} fontWeight={'600'}>
        <Flex>
            <Box mt={1}>
            <BiSolidUser/>
            </Box>
            <Text>My Profile</Text>
        </Flex>
        <Flex w={'60%'} justifyContent={'space-around'}>
            <Text>Personal</Text>
            <Text>Educational</Text>
            <Text>Medical</Text>
            <Text>Family Details</Text>
            <Text>Local Guardian</Text>
            <Text>Bank Details</Text>
        </Flex>
    </Flex>

    <Box>

    </Box>


</Box>









</Box>
</Flex>



</Box>

  )
}

export default Profile