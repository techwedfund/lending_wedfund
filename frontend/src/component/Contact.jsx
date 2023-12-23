import React, {useState} from 'react';
import contact from './assets/img/img/Group 163.png';
import './style/Contact.css';
import Alert from '../Alert';
import axios from "axios";

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
    })

    const [showAlert, setShowAlert] = useState(false)
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }
 
    const validationForm = () => {
        const newError = {};
    
        if (!formData.name || !formData.name.trim()) {
            newError.name = "Name is Required";
        } 
        // else if (formData.name.length < 5) {
        //     newError.name = 'At least 5 characters';
        // }
    
        if (!formData.email || !formData.email.trim() || !formData.email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
            newError.email = "Enter a valid Email";
        }
    
        if (!formData.number || !formData.number.trim() || !formData.number.match(/^[6-9]{1}[0-9]{9}$/)) {
            newError.number = "Provide a correct Number";
        }
    
        if (Object.keys(newError).length > 0) {
            setError(newError);
            return false;
        } else {
            setError({});
            return true;
        }
    };
    
    
    const formSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = {
            name: formData.name,
            email: formData.email,
            number: formData.number,
        };
    
        if(validationForm()){
        try {
            await axios.post('/sendmail', formDataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            // alert('Form Submitted Successfully');
            setShowAlert(true);
    
            setFormData({
                name: '',
                email: '',
                number: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Resubmit Your Form, Please');
        }
    }
    };
    
    

  return (
    <div>
        <section className='contactSect'>
            <div className='container'>
                <h1 className='contactH1 text-center'>Contact <span style={{color:"#6c0505"}}>us</span></h1>
                <div className='row mt-5'>
                    <div className='col-md-8'>
                        <form onSubmit={formSubmit} className='contactForm'>
                        <div className={`mb-3 contactIput ${error.name ? 'has-error' : ''}`}>
                            <input type="text" className="form-control" id="name" name='name' placeholder='Name' onChange={handleChange} value={formData.name} aria-describedby="emailHelp" />
                            {error.name && <div className="error-message">{error.name}</div>}
                        </div>
                        <div className={`mb-3 contactIput ${error.email ? 'has-error' : ''}`}>
                            <input type="email" className="form-control" id="exampleInputEmail1" name='email' placeholder='E-mail ID' onChange={handleChange} value={formData.email} aria-describedby="emailHelp" />
                            {error.email && <div className="error-message">{error.email}</div>}
                        </div>
                        <div className={`mb-3 contactIput ${error.number ? 'has-error' : ''}`}>
                            <input type="number" className="form-control" name='number' placeholder='Mobile Number' onChange={handleChange} value={formData.number} id="exampleInputPassword1" />
                            {error.number && <div className="error-message">{error.number}</div>}
                        </div>
                        <div className='text-center contactIput mt-3'>
                            <button type="submit" className="btn contactBtn">Submit</button>
                        </div>
                        {showAlert ? <Alert type='success' alert='Thank You, ' message='we will reach you soon.' />: null}
                        </form>
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