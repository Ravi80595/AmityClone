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
import photo7 from '../Images/photo7.png'
import photo12 from '../Images/photo12.png'
import photo13 from '../Images/photo13.png'
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
import { Link } from 'react-router-dom'


const Card = () => {
const [data,setData]=useState(true)

const handleClick=()=>{
    setData(!data)
}
    
    
    
return(
        <Box>
            <Box>
                <Flex h={'55px'} direction={['column','column','row','row']}>
                    <Flex background={'#ff9b10'} w={['99%','15%','15%','15%']}>
                    <div onClick={handleClick} class="hamburger">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                        <Image w={['30%','70%','70%','70%']} h={'45px'} src='https://s.amizone.net/login-files/amizone-logo.png'/>
                    </Flex>
                    <Flex w={['99%','85%','85%','85%']} direction={['column','column','row','row']} background={'#0065bb'} justifyContent={'space-between'}>
                        <Box>
                            <Text pl={10} pt={3} pb={5} fontSize={'20px'} color={'white'}>Amity University Gurugram</Text>
                        </Box>
                        <Flex direction={['column','column','row','row']}>
                            <Flex mr={5} color={'white'} w={'50%'} m={'auto'}>  
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
                            <Flex w={'45%'} m={'auto'} _hover={{background:'#484876'}} cursor={'pointer'} gap={3} p={2} justifyContent={'space-around'} color='white'> 
                            <Image borderRadius={350} w={10} src={photo7}/>
                            <Flex>
                            <Box>
                                <Text textAlign={'left'}>
                                Mr Pankaj
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
                        <Link to='/profile'>
                            <MenuItem>My Profile</MenuItem></Link>
                            <MenuItem>Change Password</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                        </Menu>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
    
    
    <Flex>
    {data && <Box position={'absolute'} w={['75%','15%','15%','15%']} border={'2px solid grey'}>
            <Flex color={'#0065bb'} pb={2} pl={2} borderBottom={'1px solid grey'} background={'white'}>
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
            <Link to='/registration'>
            <Flex className='tab' pb={2} pl={2} borderBottom={'1px solid grey'}>
                <Box pt={2}>
                <FiEdit/>
                </Box>
                <Text ml={2} pt={1}>Regisgtration</Text>
            </Flex>
            </Link>
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
        <Box w={['99%','85%','85%','85%']} mt={['177px','177px','177px','17px']}>
            <Flex pb={2} ml={2} borderBottom={'1px solid grey'}>
                <Box pt={2}>
                <IoHome/>
                </Box>
                <Text ml={2} pt={1} color={'#0065bb'}>Home 
                 </Text>
                 <Text ml={2} pt={1}>ID Card</Text>
            </Flex>
    
    
<Box w={'95%'} border={'1px solid grey'} mt={'30px'}>
    <Box background={'#0065bb'} color={'white'} textAlign={'left'} pl={'10px'}>
        <Text>ID Card View</Text>
    </Box>
    <Box w={'80%'}  background={'#ff9b10'} border={'2px solid grey'}>
        <Image src='https://cuet-2023-public.s3.ap-south-1.amazonaws.com/site-admin23/ac61e5f2feb4b0f534b1bc4794cdc772cf1679dca69cc262d5c710ef24b321a83/Amity%20University%20Gurugram1677844328_upload_logo.jpg'/>
        <Box> 
            <Flex justifyContent={'center'}>
            <Image w={'120px'} mt={'10px'} src={photo7}/>
            </Flex>
            <Text mt={'20px'}>Pankaj</Text>
            <Text>BBA</Text>
            <Text>2023-2026</Text>
        </Box>
        <Flex mt={'30px'} justifyContent={'space-around'}>
            <Box w={'40%'}>
                <Image w={'80px'} src={photo12}/>
                <Text>Issuing Authority</Text>
            </Box>
            <Box w={'40%'}>
                {/* <Text fontFamily={'cursive'}>
                    Pankaj
                </Text> */}
                <Image w={'80px'} src={photo13}/>
                <Text>Holder's Signature</Text>
            </Box>
        </Flex>
    </Box>

        <Box fontWeight={'600'} textAlign={'left'} lineHeight={'35px'} pl={'20px'} pt={'20px'}>
            <Text>Enrollment No : A5058554685</Text>
            <Text>Date Of Birth : 29.10.2003</Text>
            <Text>Blood Group : B+VE</Text> <br />
            <Text>In case of emergency,</Text>
            <Text>Please call :</Text>
            <Box ml={10}>
            <ul>
                <li>
            <Text>Family :  8287798267</Text>
                </li>
                <li>
            <Text>Institution : 25665452322</Text>
                </li>
            </ul>
            </Box>
            <br />
            <Text>Validity : 30.06.2028</Text>
            <Text>ID Card No : 256654661</Text>
            <br /><br />
            <Text>If This card is found, please report to  <br /> the office number  - 0120-4392599</Text>
        </Box>
        <Flex justifyContent={'left'}>
        {/*   */}
    <Button background={'#6eafdf'}  borderRadius={0} color={'white'}>Print</Button>
        </Flex>
            
</Box>
        </Box>
        </Flex>
        </Box>
      )
    }

export default Card