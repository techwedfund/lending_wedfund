import React from 'react';
import '../style/Home.css'
import hero from '../assets/img/img/Group 155.png'
import hero2 from '../assets/img/img/Group 158.png'
import icon from '../assets/img/img/icon/78yu 1.png'
import icon2 from '../assets/img/img/icon/bjnm, 1.png'
import icon3 from '../assets/img/img/icon/hjk 1.png'
import icon4 from '../assets/img/img/icon/iug 1.png'
import about from '../assets/img/img/Group 159.png'
import business from '../assets/img/img/Group 161.png'
import personal from '../assets/img/img/Group 162.png'
import vector from '../assets/img/img/image 52.png'
import vector1 from '../assets/img/img/image 53.png'
import howIcon from '../assets/img/img/Group 168.png'
import Contact from '../Contact';

function Home() {
    return(
        <>
        {/* Hero Section */}
            <section className='homeSec'>
                <div className='container'>
                    <h1 className='text-center h1Home'>Financial Emergency?</h1>
                    <h1 className='text-center h1Home' style={{color: "#6c0505"}}>We Understand</h1>
                    <div className='d-flex flex-row align-center justify-content-center btnHomeCeter'>
                        <a href="https://wed.fund" footer-item className='btn btnHome px-4 mx-4'>Business Loan</a>
                        <a href="https://wedfundb2c.netlify.app/" footer-item className='btn btnHome px-4 mx-4'>Personal Loan</a>
                    </div>
                    <div className="row">
                        <div className="col-md-6" id='heroImg1'>
                            <img src={hero} className='img-fluid img mt-3 rounded mx-auto d-block' alt="heroPng" />
                        </div>
                        <div className="col-md-6" id='heroImg2'>
                            <img src={hero2} alt="heroPng" className='img-fluid img mt-3 rounded mx-auto d-block' />
                        </div>
                    </div>
                </div>
            </section>
        {/* Hero section End */}

        {/* Advantages Section Start */}
        <section className='advSection'>
            <div className='container'>
                <h1 className='text-center h1Adv'>Our <span style={{color: "#6c0505"}}>Advantages</span></h1>
                <div className='row mx-auto mt-5'>
                    <div className='col-xl-3 col-md-6 d-flex align-items-center justify-content-center'>
                    <div className='advCont'>
                        <img src={icon} alt="icon" id='icon1' className='img-fluid img advImg'/>
                        <p className='pAdv'>Easy</p>
                    </div>
                    </div>
                    <div className='col-xl-3 col-md-6 d-flex align-items-center justify-content-center'>
                    <div className='advCont'>
                        <img src={icon4} alt="icon" id='icon2' className='img-fluid img advImg'/>
                        <p className='pAdv'>Reliable</p>
                    </div>
                    </div>
                    <div className='col-xl-3 col-md-6 d-flex align-items-center justify-content-center'>
                    <div className='advCont'>
                        <img src={icon2} alt="icon" id='icon3' className='img-fluid img advImg'/>
                        <p className='pAdv'>Fast</p>
                    </div>
                    </div>
                    <div className='col-xl-3 col-md-6 d-flex align-items-center justify-content-center'>
                    <div className='advCont'>
                        <img src={icon3} alt="icon" id='icon4' className='img-fluid img advImg'/>
                        <p className='pAdv'>Instant</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Advantages Section end */}

        {/* How it works section start */}

        <section className='howSection' id="howSection">
            <div className='container'>
                <h1 className='h1How'>How it <span style={{color: "#6c0505"}}>works</span></h1>
                {/* <div className='d-flex align-items-center justify-content-between'>
                    
                    <div className='howContent'>
                        <p className='paraHow'>Provide your basic information <br /> and KYC documents</p>
                        <div className='howBrder'>
                            <img src={howIcon} alt="iconImg" className='img img-fluid howImg' />
                            <div className='alignBorderHow'>
                                <div className='brderHow'></div>
                            </div>
                        </div>
                    </div>
                    <div className='howContent'>
                        <p className='paraHow'>Submit income documents and <br /> Bank Account statment</p>
                        <div className='howBrder'>
                            <img src={howIcon1} alt="iconImg" className='img img-fluid howImg' />
                            <div className='alignBorderHow'>
                                <div className='brderHow'></div>
                            </div>
                        </div>
                    </div>
                    <div className='howContent'>
                        <p className='paraHow'>Accept loan terms</p>
                        <div className='howBrder' id='howIcon3'>
                            <img src={howIcon2} alt="iconImg" className='img img-fluid howImg' />
                        </div>
                    </div>
                </div> */}
                {/* <div className='row'>
                    <span className='col-sm-4 text-center textHow'>Provide your basic information <br/> and KYC documents</span>
                    <span className='col-sm-4 text-center textHow'>Submit income documents and <br/> Bank Account statment</span>
                    <span className='col-sm-4 text-center textHow'>Accept loan terms</span>
                </div> */}
                <div className='col-sm-12 mt-5 text-center'>
                    <img src={howIcon} alt="workImg" className='img-fluid img mt-5 mb-5' img />
                </div>
                {/* <div className='row'>
                    <span className='col-sm-4 text-center textHow'>Pay EMIs through auto <br/>debit</span>
                    <span className='col-sm-4 text-center textHow'>Disbursement into your <br/>bank account</span>
                    <span className='col-sm-4 text-center textHow'>Execution of loan <br/>Agreement</span>
                </div> */}
            </div>
        </section>

        {/* How it works section end */}

        {/* About Us Section Start */}

        <section className='aboutSect' id='aboutUs'>
            <div className='container'>
                <h1 className='h1About mb-5'>About <span style={{color:"#6c0505"}}>us</span></h1>
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <img src={about} alt="aboutPng" className='img-fluid img aboutImg' />
                    </div>
                    <div className='col-md-8'>
                        <p className='paraAbout'>
                            At <span style={{color: "#6c0505"}}>WedFund</span>, we understand that life's most important moments often require financial
                            support. We are a dedicated lending company specializing in both personal and business
                            loans, aimed at helping individuals and entrepreneurs achieve their dreams.
                        </p>
                        <p className='paraAbout'>
                            Whether it's funding your dream wedding or kickstarting your business venture, we offer flexible and tailored financial solutions to suit your specific needs.
                        </p>
                        <p className='paraAbout'>
                            Our commitment lies in providing accessible, transparent, and reliable loan services, ensuring a smooth and supportive experience for every client.
                        </p>
                        <p className='paraAbout'>
                            With a focus on customer satisfaction and financial empowerment, we're here to turn aspirations into realities. Trust WedFund to be your partner in achieving your milestones."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* About Us Section end */}

        {/* Business Section Start */}

        <section className='businessSect'>
            <div className='container'>
                <h1 className="businessH1">Business <span style={{color:"#6c0505"}}>loan</span></h1>
                <div className="row" id='businessLoan'>
                    <div className='col-md-8 businessMrgn'>
                        <p className='paraBusiness'>
                            At <span style={{color:"#6c0505"}}>WedFund</span>, we understand the unique challenges and opportunities that Indian Micro,
                            Small, and Medium Enterprises (MSMEs) encounter in their journey towards growth and success. Our mission is to be a catalyst for these enterprises  providing accessible and tailored financial solutions to fuel their ambitions.
                        </p>
                        <p className='paraBusiness'>
                            Our application process is designed to be simple, efficient  and convenient for busy entrepreneurs.
                        </p>
                        <div className='text-center mt-5'>
                            <a href="https://wed.fund" footer-item className='btn businessBtn'>Apply Now</a>
                        </div>
                    </div>
                    <div className='col-md-4 businessImg text-center text-center'>
                        <img src={business} className="img img-fluid" alt="businessPng" />
                    </div>
                </div>
            </div>
        </section>

        {/* Business Section end */}

        {/* Personal Section Start */}

        <section className='personalSect'>
            <div className='container'>
                <h1 className="personalH1">Personal <span style={{color:"#6c0505"}}>loan</span></h1>
                <div className="row">
                <div className='col-md-4 personalImg text-center'>
                        <img src={personal} className="img img-fluid" alt="businessPng" />
                    </div>
                    <div className='col-md-8 personalMrgn'>
                        <p className='paraPersonal'>
                            At <span style={{color:"#6c0505"}}>WedFund</span>, we recognize that life's most cherished moments often come with financial needs. Our suite of personalized loans is designed to support individuals during significant life events, particularly weddings and the celebrations that follow.
                        </p>
                        <p className='paraPersonal'>
                            Whether it's funding the venue, catering, decor, or other wedding essentials, our loans ensure your special day is everything you've envisioned.
                        </p>
                        <p className='paraPersonal'>
                            WedFund is here to be your financial ally, supporting you as you embrace life's joyous moments.
                        </p>
                        <div className='text-center mt-5'>
                            <a href="https://wedfundb2c.netlify.app/" footer-item className='btn personalBtn'>Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Business Section end */}

        {/* Lending Parteners section start */}

        <section className='lendingSect'>
            <div className='container'>
                <h1 className="lendingh1 text-center">Our <span style={{color:"#6c0505"}}>Lending Partners</span></h1>
                <div className='row mt-5 mb-5'>
                    <a href="https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE" footer-item className='col-md-6 text-center' id='lendingImg1'>
                        <img src={vector1} alt="ledingImg1" className='img img-fluid' />
                    </a>
                    <a href='https://portal.fibe.in/co-branded?utm_source=Wedfund' footer-item className='col-md-6 text-center' id='lendingImg2'>
                        <img src={vector} alt="ledingImg1" className='img img-fluid' />
                    </a>
                </div>
            </div>
        </section>

        {/* Lending Parteners section end */}

        <Contact />
        </>
    )
}

export default Home