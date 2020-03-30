import React, { Component } from 'react';
import css from './style.css';
import {FaEnvelope, FaKey, FaUser, FaLock } from 'react-icons/fa';
import RedButton from '../../components/red_button';
import InputBox from '../../components/input_box';
class SignUp extends Component {
     
  render() {

    return (
        <div style={{backgroundImage: `url(${"static/assets/Waste.jpg"})`,height:"800px",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                  </div>
                  <div className="col-md-6">
                    <div className={css.SignUp_box}>
                        <p className={css.SignUp_title}>Sign up</p>

                        <div className={css.SignUp_username}>
                            <FaUser className={css.SignUp_box_UserIcon}/>
                            <div className={css.SignUp_InputBox}><InputBox type="text" placeholder="User Name" /></div>
                        </div>

                        <div className={css.SignUp_email}>
                            <FaEnvelope className={css.SignUp_box_UserIcon} />
                            <div className={css.SignUp_InputBox}><InputBox type="text" placeholder="youremail@genpact.com" /></div>
                        </div>

                        <div className={css.SignUp_pass}>
                            <FaKey className={css.SignUp_box_KeyIcon}/>
                            <div className={css.SignUp_InputBox}><InputBox type="password" placeholder="password"/></div>
                        </div>

                        <div className={css.SignUp_confirmpass}>
                            <FaLock className={css.SignUp_box_LockIcon}/>
                            <div className={css.SignUp_InputBox}><InputBox type="password" placeholder="Confirm password" /></div>
                        </div>

                        <div className={css.SignUp_button}>
                            <RedButton  type="submit" label="Sign - up"/>
                        </div>

                        <p className={css.Already_account}>Already have an account, <span className={css.Already_accountSpan}>Log-in</span></p>
                        <p className={css.terms_conditions}>
                            By signing up I accept the <span className={css.terms_conditionsSpan1}>Terms & Conditions</span> and <span className={css.terms_conditionsSpan2}>Privacy Policy</span>
                        </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                  </div>
              </div>
          </div>
        </div>
    );
  }
}
export default SignUp;