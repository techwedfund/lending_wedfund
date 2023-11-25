import React from 'react';
import './style/Footer.css'
function Footer(){
    return(
        <>
            <section className='footerSect'>
                <div className='container'>
                    <h1 className='h1Footer'>WedFund</h1>
                    <h5 className='quick'>Quick Links</h5>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <ul className='quickLinks'>
                                <li className='nav-item'>
                                    <a href="/" className='footer-item'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="/#aboutUs" onClick={() => window.scrollTo(0,0)} className='footer-item'>About us</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="/#howSection" onClick={() => window.scrollTo(0,0)} className='footer-item'>How it works</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="https://wed.fund" className='footer-item'>Business Loan</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="https://wedfundb2c.netlify.app/" className='footer-item'>Personal Loan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer