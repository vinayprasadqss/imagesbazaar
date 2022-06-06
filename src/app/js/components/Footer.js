import React from 'react';
import footerImg from './../../static/images/btn-Help.png';

const Footer =()=>{
    const [showTopBtn, setShowTopBtn] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return(
        <section className={`footer ${showTopBtn ? 'footerVisible':''}`}>
            <h1>World's largest collection of Creative Indian images & videos</h1>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-md-7 col-12">
                         <h2>All India Toll Free: 1800-11-6869</h2>
                         <img src={footerImg} alt="footer image"/>
                         <p>© ImagesBazaar.com. A division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</p>
                     </div>
                     <div className="col-md-5 col-12">
                         <div className="row">
                             <div className="col">
                                 <h3>Company Info</h3>
                                 <ul>
                                     <li><a>Home</a></li>
                                     <li><a>About Us</a></li>
                                     <li><a>Testimonials</a></li>
                                     <li><a>Image Research</a></li>
                                 </ul>
                             </div>
                             <div className="col">
                                 <h3>Learn More</h3>
                                 <ul>
                                     <li><a>Pricing</a></li>
                                     <li><a>Licensing</a></li>
                                     <li><a>Terms of Use</a></li>
                                     <li><a>Privacy Policy</a></li>
                                 </ul>
                             </div>
                             <div className="col">
                                 <h3>Need Help</h3>
                                 <ul>
                                     <li><a>Contact Us</a></li>
                                     <li><a >Search Tips</a></li>
                                     <li><a>FAQ</a></li>
                                     <li><a>Technical</a></li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
                 {showTopBtn &&<button className={"scrollBtn"} onClick={goToTop}>Scroll</button>}
             </div>
        </section>
    )
}

export default Footer;