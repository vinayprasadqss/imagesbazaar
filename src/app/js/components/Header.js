import React from 'react';
import logo from './../../static/images/logo.svg';

const Header =()=>{
    React.useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.mainSearch');
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return(
        <header className="mainHeader">
            <section className="menu1 menu horizontal-menu" >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md col-1" >
                                <nav className="navbar navbar-dropdown navbar-expand-lg leftMenuBarWrap">
                                    <div className="leftMenuBar">
                                        <span className="leftMenuIcon">☰</span>
                                        <b className="d-none d-md-inline"> BROWSE CATEGORIES</b>
                                    </div>
                                </nav>
                            </div>
                            <div className=" col-sm col-6">
                                <div className="logoWrap">
                                        <a href="">
                                            <img src={logo} layout="responsive" width="100%" alt="image" className="placeholder-loader"/>
                                        </a>

                                </div>
                            </div>

                            <div className="col-sm col-5" style={{paddingLeft:"0"}}>
                                <div className="topnav">
                                    <a href="">Pricing</a>
                                    <a href="" style ={{cursor:"pointer", border:"1px solid #fff"}}>
                                        <span className="ng-binding">Sign in</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </header>
    )
}

export default Header;
