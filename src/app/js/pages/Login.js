import React from 'react';
import {Link, useNavigate} from "react-router-dom";

import logo from './../../static/images/Images_Bazaar_Logo.png';
import bg from './../../static/images/content-bg1.jpg';
import loading from './../../static/images/loading.gif';

const Login =()=>{
    let navigate = useNavigate();
    const onLoginClick=()=>{
        let showDialog = document.getElementById("loading");
        document.body.classList.add("show");
        showDialog.classList.add('Show');
        setTimeout(()=>{
            let path = `/dashboard`;
            navigate(path);
        },2000)
    }
    return(
        <>
        <section className="vh-100 loginWrapper" style={{backgroundColor:"#000"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{borderRadius:"1rem"}}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={bg} alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}}/>
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body text-black" style={{padding:"1.5rem 1.5rem .5rem 1.5rem"}}>
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <div className="logoWhite">
                                                    <Link to="/">
                                                        <img src={logo} layout="responsive" width="100%" alt="image" className="placeholder-loader"/>
                                                    </Link>
                                                </div>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder={"Email address"}/>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder={"Password"}/>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" onClick={onLoginClick} type="button">
                                                    <img src={loading} alt="loading" className={"loading"} id={"loading"} style={{width:"28px", marginRight:"5px"}}/>
                                                    Login
                                                </button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="pb-lg-1" style={{color:"#393f81"}}>Don't have an account? <a href="#!"style={{color:"#393f81"}}>Register here</a></p>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </>
    )
}

export default Login;