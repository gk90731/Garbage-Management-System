import React, { Component } from 'react';
import css from './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const Welcome = () => {
    return (
     <div>
        <div>   
        <div className="container">
        <div className={css.heading}>
                        <p ><span className={css.subHeading1}>Want your city clean ?</span> <br/><span className={css.heading_span} >Just Come Up with Smart Garbage Management System</span></p>
        </div>
            <div className="row">
                <div className="col-md-4">
                </div>
                
                <div className="col-md-4">
                    
                    <div className={css.box}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <p className={css.para_signin}><Link className={css.Link} to="/login">Sign in</Link></p>
                                    
                                </div>
                                <div className="col-md-4">
                                    <div className={css.para_box_bar}>
                                        <div className={css.box_bar}></div>
                                    </div> 
                                </div>
                                <div className="col-md-4">
                                    <p className={css.para_signup}><Link className={css.Link} to="/signup">Sign up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                </div>
            </div>
            </div>
            </div>
      </div>
    );
  };
export default Welcome;