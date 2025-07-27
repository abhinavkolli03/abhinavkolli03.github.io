import React, {useState} from 'react'
import Video from '../../media/video.mp4'
import { IntroContainer, IntroBg, VideoBg, IntroContent, IntroTitle,
IntroP, IntroBtnWrapper, EyeDown, EyeUp, FirstThought, SecondThought } from './IntroPartsElements'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Button } from '../ButtonElement'
import Social from '../Social'

const IntroParts = () => {
  const [hover, setHover] = useState(false)
  const [text] = useTypewriter({
    words: ['Software Engineer', 'AI/ML Enthusiast', 'Food Truck Lover', 'Kayaking Fanatic'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

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
            {text}
            <Cursor />
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