// *
// *
// * myUsername    =  to handle onChange for username
// * myPassword    =  to handle onChange for password
// * handleSubmit  =  to handle onClick of Login button
// * onChangeValue =  used as props for chlid component to handle change in input boxes
// * onSubmit      =  used as props for chlid component to handle click of login button
// *
// *

import React, {Component} from 'react';
import css from './style.css';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import RedButton from '../../components/red_button';
import InputBox from '../../components/input_box';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login} from '../../core/actions/actions'
class Login extends Component {  
    state = {
          username:"",
          password:""
        }
    

    componentDidMount(){
        if (localStorage.getItem("userToken")!=undefined){
            this.props.history.push("/");
        } 
    }
    componentWillReceiveProps(props){
        console.log(props.loginStatus[1] === 200)
        if (props.loginStatus[1] === 200){
            localStorage.setItem('userToken', props.loginStatus[0]) ;
                this.props.history.push("/home");
        }
    }

    myUsername = e => this.setState({username: e.target.value});
    myPassword = e => this.setState({password: e.target.value});
    
    render() {
        console.log(this.state)
        console.log(this.props.loginStatus)
        return (
        <div style={{backgroundImage: `url(${"static/assets/Waste.jpg"})`,height:"800px",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                  <div className={css.loginbox}>
                      <p>Sign in</p>
                      <div className={css.loginemail}>
                          <FaEnvelope className={css.loginBox_EnvelopeIcon}/>
                          <div className={css.loginemail_input}><InputBox type="text" placeholder="Username" onChangeValue={this.myUsername}/></div>
                      </div>
                      <div className={css.loginpass}>
                          <FaKey className={css.loginBox_KeyIcon}/>
                          <div className={css.loginemail_input}><InputBox type="password" placeholder="Password" onChangeValue={this.myPassword}/></div>
                      </div>
                      <div className={css.forgotpass}>
                          <p>Forgot Password?</p>
                      </div>
                      <div className={css.loginbutton}>
                        <RedButton type="submit" label="Login" onSubmit={() => this.props.login(this.state.username,
                                                                                                this.state.password)}/>
                      </div>
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
// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        loginStatus: state.loginStatus
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({login: login}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Login);