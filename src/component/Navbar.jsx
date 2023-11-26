import React from "react";
import logo from './assets/img/logo.png'
import './style/Navbar.css'

function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-white">
                <div className="container-fluid">
                    <a href="/"><img src={logo} alt="logoPng" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className="nav-link px-5" rel="noopener noreferrer">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#aboutUs" onClick={() => window.scrollTo(0,0)} className="nav-link px-5" rel="noopener noreferrer">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#howSection" onClick={() => window.scrollTo(0,0)} className="nav-link px-5" rel="noopener noreferrer">How it works</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://wedfund-business.el.r.appspot.com" footer-item className="nav-link px-5" rel="noopener noreferrer">Business Loan</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://wedfund-personal.el.r.appspot.com" className="nav-link px-5" rel="noopener noreferrer">Personal Loan</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar