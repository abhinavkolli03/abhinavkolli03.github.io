import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navigation from '../components/Navigation/Navigation'
import IntroParts from '../components/IntroParts/IntroParts';
import Footer from '../components/Footer'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Title = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

	return(
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navigation toggle={toggle}/>
            <IntroParts id={'title'}/>
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
};

export default Title;