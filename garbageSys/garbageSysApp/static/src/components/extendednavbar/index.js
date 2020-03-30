import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaHeart, FaUser, FaUserCircle,FaAngleDown } from 'react-icons/fa';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
class ExtendedNavBar extends Component {
  handleLogout = () => {
    var csrftokencookie = Cookies.get('csrftoken');
    this.props.logout(csrftokencookie);   
  }
  componentDidMount(){
    
    
    
  }
  componentWillReceiveProps(props){
    
  }
  render() 
  {
    
      
    return (
        <div>
          <div className={css.myExtendedNavBar}>
              
            <ul className={css.ul2}>
                {/* since ul1 className is applied once */}
                <li><img src={"static/assets/logo.png"} alt=""/></li>
                <li><div className={css.new_verticalbar}></div></li>
                <li className={css.new_house_price}>Garbage Management System</li>
            </ul>
            <ul className={css.ul3}>
                <li className={css.ul3_bell}><FaBell className={css.ul3_bellIcon} /><span className={css.badge}><p>5</p></span></li>
                {/* <li className={css.ul3_heart}><a className={css.Link} href="#/wishlist"><FaHeart className={css.ul3_heartIcon} /></a></li> */}
                {/* <li className={css.ul3_User}><FaUserCircle className={css.ul3_UserCircleIcon} /></li> */}
                <li className={css.ul3_User}><FaUserCircle id="UncontrolledPopover" className={css.ul3_UserCircleIcon} /></li>
                <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
                  <PopoverHeader>LogOut</PopoverHeader>
                  {/* <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody> */}
                </UncontrolledPopover>
            </ul>
          </div>
          
        </div>
    );
  }
}
export default ExtendedNavBar;

