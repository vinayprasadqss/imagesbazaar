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
                                     <li><a href="">Home</a></li>
                                     <li><a href="">About Us</a></li>
                                     <li><a href="">Testimonials</a></li>
                                     <li><a href="">Image Research</a></li>
                                 </ul>
                             </div>
                             <div className="col">
                                 <h3>Learn More</h3>
                                 <ul>
                                     <li><a href="">Pricing</a></li>
                                     <li><a href="">Licensing</a></li>
                                     <li><a href="">Terms of Use</a></li>
                                     <li><a href="">Privacy Policy</a></li>
                                 </ul>
                             </div>
                             <div className="col">
                                 <h3>Need Help</h3>
                                 <ul>
                                     <li><a href="">Contact Us</a></li>
                                     <li><a href="">Search Tips</a></li>
                                     <li><a href="">FAQ</a></li>
                                     <li><a href="">Technical</a></li>
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