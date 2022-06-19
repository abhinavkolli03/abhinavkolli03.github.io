import React, {useState} from 'react';
import '../styles/Contact.css'
import { SimpleButton2 } from '../components/ButtonElement';
import { IoPaperPlane } from 'react-icons/io5'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import firebaseDB from '../components/ContactFirebase';

const Contact = () => {
    const [hover, setHover] = useState(false)
    const [data, setData] = useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const {first, last, email, phone, subject, message} = data;

    const onHover = () => {
      setHover(!hover)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let activate = true;
        if(!message) {
            toast.error("Please provide a message")
            activate = false
        } 
        if(!subject) {
            toast.error("Please provide a subject")
            activate = false
        }
        if(!email) {
            toast.error("Please provide an email")
            activate = false
        }
        if(!(email.includes('@'))) {
            toast.error("Please enter a valid email")
            activate = false
        }
        if(!first) {
            toast.error("Please enter your first name")
            activate = false
        }
        if(!last) {
            toast.error("Please enter your last name")
            activate = false
        }
        if(activate) {
            firebaseDB.child("contacts").push(data);
            setData({first: "", last: "", email: "", phone: "", subject: "", message: ""});
            toast.success("Message Sent Successfully");
        }
    };

    const handleChanges = (e) => {
        let {name, value} = e.target;
        setData({...data, [name]: value});
    };

	return(
        <section style={{background: 'linear-gradient(#bb5c06, orange)'}} id="contact">
            <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" style={{color: '#fff'}}>Let's Get In Touch!</h1>
            <h5 className="h5_subtitle" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" style={{marginBottom: '-60px'}}>Whether you're interested in recruiting me, proposing a project idea, or even getting to know me, <b>hit me up!</b></h5>
            <ToastContainer position="top-center"></ToastContainer>
            <div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200"
            className="container contact__container" style={{color: 'white'}}>
                <form id="contactForm"
                    onSubmit={handleSubmit}>
                    <p>
                        <label>First Name</label>
                        <input type="text" name="first" onChange={handleChanges} value={first}></input>
                    </p>
                    <p>
                        <label>Last Name</label>
                        <input type="text" name="last" onChange={handleChanges} value={last}></input>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" onChange={handleChanges} value={email}></input>
                    </p>
                    <p>
                        <label>Phone Number (Optional)</label>
                        <input type="text" name="phone" onChange={handleChanges} value={phone}></input>
                    </p>
                    <p className="full">
                        <label>Subject</label>
                        <input type="text" name="subject" onChange={handleChanges} value={subject}></input>
                    </p>
                    <p className="full">
                        <label>Message</label>
                        <textarea type="text" name="message" rows="5" onChange={handleChanges} value={message}></textarea>
                    </p>
                    <SimpleButton2
                    className="full"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    color='white'>
                        <b>Send Message <IoPaperPlane style={{fontSize: 20, marginLeft: 8}}/></b>
                    </SimpleButton2>
                </form>
            </div>
        </section>
    )
};

export default Contact;