import React, {useState} from 'react'
import Video from '../../media/video.mp4'
import { IntroContainer, IntroBg, VideoBg, IntroContent, IntroTitle,
IntroP, IntroBtnWrapper, EyeDown, EyeUp, FirstThought, SecondThought } from './IntroPartsElements'
import { Typewriter } from 'react-simple-typewriter'
import { Button } from '../ButtonElement'
import Social from '../Social'

const IntroParts = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <IntroContainer>
        <IntroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </IntroBg>
        <IntroContent>
          <IntroTitle>Hey, I'm Abhinav!</IntroTitle>
          <IntroP>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: ['Software Engineer', 'Data Analyst', 'Food Truck Lover', 'Cyclist', 'PM & Design Enthusiast'],
              }}
            />
          </IntroP>
          <IntroBtnWrapper>
            <Button to='projects' 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              smooth='true'
              primary='true'
              dark='true'>
              <b>See Portfolio </b>{hover ?<EyeDown /> : <EyeUp />}
            </Button>
            <Button to='contact' 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              smooth='true'
              primary='true'
              dark='true'>
              <b>Contact Me </b>{hover ?<SecondThought /> : <FirstThought />}
            </Button>
          </IntroBtnWrapper>
          <Social />
        </IntroContent>
    </IntroContainer>
  )
}

export default IntroParts;