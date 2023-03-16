import React from 'react';

//mui and icons
import { Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MdFacebook } from 'react-icons/md';
import {AiFillAndroid, AiFillApple, AiFillTwitterCircle,
 AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube} from 'react-icons/ai'

//style
import { FooterBox , Footer , Lists , Contact , List , ListItem } from './style';

function Index() {
  return (
    <FooterBox className='footer-container'>
        <Footer>
            <Lists>
                <List>
                    <ListItem>About Us</ListItem>
                    <ListItem>Feedback</ListItem>
                    <ListItem>Community</ListItem>
                </List>

                <List>
                    <ListItem>Trust, Safety & Security</ListItem>
                    <ListItem>Help & Support</ListItem>
                    <ListItem>Pluto Foundation</ListItem>
                </List>

                <List>
                    <ListItem>Terms of Service</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                    <ListItem>CA Notice at Collection</ListItem>
                    <ListItem>Cookie Settings</ListItem>
                </List>

                <List>
                    <ListItem>Accessibility</ListItem>
                    <ListItem>Desktop App</ListItem>
                    <ListItem>Cookie Policy</ListItem>
                    <ListItem>Enterprise Solution</ListItem>
                </List>
            </Lists>

            <Contact>
                <Box sx={{display:'flex' , flexDirection:'row' , 
                justifyContent:'center' , alignItems:'center' , gap:2}}>
                <Typography variant='body1' sx={{padding:0 , margin:0 , cursor:'pointer'}}>Follow Us</Typography>
                <List className='socailList'>
                    <ListItem className='socail'>
                        <Icon>
                            <MdFacebook/>
                        </Icon>
                    </ListItem>

                    <ListItem className='socail'>
                        <Icon>
                            <AiOutlineLinkedin/>
                        </Icon>
                    </ListItem>
                    
                    <ListItem className='socail'>
                        <Icon>
                            <AiFillTwitterCircle/>
                        </Icon>
                    </ListItem>

                    <ListItem className='socail'>
                        <Icon>
                            <AiOutlineYoutube/>
                        </Icon>
                    </ListItem>

                    <ListItem className='socail'>
                        <Icon>
                            <AiOutlineInstagram/>
                        </Icon>
                    </ListItem>
                </List>
                </Box>

                <Box sx={{display:'flex' , flexDirection:'row' , 
                justifyContent:'center' , alignItems:'center' , gap:2}}>
                <Typography variant='body1' sx={{padding:0 , margin:0 , cursor:'pointer'}}>Mobile App</Typography>
                <List className='socailList'>
                    <ListItem className='socail'>
                        <Icon>
                            <AiFillApple/>
                        </Icon>
                    </ListItem>

                    <ListItem className='socail'>
                        <Icon>
                            <AiFillAndroid/>
                        </Icon>
                    </ListItem>
                </List>
                </Box>
            </Contact>
        </Footer>
        <Typography variant='body1' className='info' sx={{marginBottom:'0.5em'}}>
            &copy;2023-Pluto&#xae; <span> Global Inc.</span>  &#9679; <span id='privacy'>Privacy Policy</span> 
        </Typography>
    </FooterBox>
  )
}

export default Index;