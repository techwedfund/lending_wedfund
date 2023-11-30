import React, {useRef, useState} from 'react';
import contact from './assets/img/img/Group 163.png';
import './style/Contact.css';
import Emailjs from '@emailjs/browser'
import Alert from '../Alert';

function Contact() {

    const formData = useRef()
    const [error, setError] = useState({})
    const [showAlert, setShowAlert] = useState(false)

    const validation = () => {
        const errors = {};

        if(!formData.current.name.value.trim()){
            errors.name = 'Name field is required'
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!formData.current.email.value.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.current.email.value)) {
            errors.email = 'Invalid email format';
        }

        if(!formData.current.number.value.trim()){
            errors.number = 'please enter number'
        }
        setError(errors);
        return Object.keys(errors).length === 0;
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if(validation()){
            Emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICEID,
            process.env.REACT_APP_EMAILJS_TEMPLATEID,
            formData.current,
            process.env.REACT_APP_EMAILJS_PUBLICKEY,
            // console.log(process.env.REACT_APP_EMAILJS_PUBLICKEY)
        )
        .then((res) => {
            setShowAlert(true)
            formData.current.name.value = '';
            formData.current.email.value = '';
            formData.current.number.value = '';
            console.log(res.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
        }
    }

  return (
    <div>
        <section className='contactSect'>
            <div className='container'>
                <h1 className='contactH1 text-center'>Contact <span style={{color:"#6c0505"}}>us</span></h1>
                <div className='row mt-5'>
                    <div className='col-md-8'>
                        <form action="" ref={formData} onSubmit={formSubmit} className='contactForm'>
                        <div className={`mb-3 contactIput ${error.name ? 'has-error' : ''}`}>
                            <input type="text" className="form-control" id="name" name='name' placeholder='Name' aria-describedby="emailHelp" />
                            {error.name && <div className="error-message">{error.name}</div>}
                        </div>
                        <div className={`mb-3 contactIput ${error.email ? 'has-error' : ''}`}>
                            <input type="email" className="form-control" id="exampleInputEmail1" name='email' placeholder='E-mail ID' aria-describedby="emailHelp" />
                            {error.email && <div className="error-message">{error.email}</div>}
                        </div>
                        <div className={`mb-3 contactIput ${error.number ? 'has-error' : ''}`}>
                            <input type="number" className="form-control" name='number' placeholder='Mobile Number' id="exampleInputPassword1" />
                            {error.number && <div className="error-message">{error.number}</div>}
                        </div>
                        <div className='text-center contactIput mt-3'>
                            <button type="submit" className="btn contactBtn">Submit</button>
                        </div>
                        </form>
                        {showAlert ? <Alert type='success' alert={`Thank You, ${formData.current.name.value}`} message='we will reach you soon.' />: null}
                    </div>
                    <div className='col-md-4 text-center contactImg'>
                        <img src={contact} className='img img-fluid' alt="contactPng" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact