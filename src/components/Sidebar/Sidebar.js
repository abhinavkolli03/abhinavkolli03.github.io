import React, {useState} from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap  } from './SidebarElements'
import { SimpleButton2 } from '../ButtonElement'
import pdf from '../../media/final_resume.pdf'
const Sidebar = ({ isOpen, toggle }) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="education" onClick={toggle}>Education</SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>Contact Me</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap style={{marginTop: '10px'}}>
                <SimpleButton2
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    color='white'>
                    <a href={pdf} style={{color: 'black'}} target="_blank" rel="noreferrer">
                        <p style={{fontSize: "20px", display: 'inline-block', color: 'white'}}>Download CV</p>
                    </a>
                </SimpleButton2>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;

