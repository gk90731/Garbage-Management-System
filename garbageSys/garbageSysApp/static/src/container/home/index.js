import React, { Component } from 'react';
import css from './style.css';
import HomeNavBar from '../../components/home_navbar/index';
import Filter from '../../components/filter/index';
import Cards from '../../components/cards/index';
import {FaCircleNotch, FaBlackTie } from 'react-icons/fa';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import {bindActionCreators} from 'redux';
import {getGP_List} from '../../core/actions/actions'
var csrftokencookie = Cookies.get('csrftoken');
class Home extends Component {
  state ={
    
  }

  componentDidMount(){
    this.props.getGP_List();
  }
  
  componentWillReceiveProps(nextProps){
    
  }
  
  render() {
    // console.log(this.props)
    return (
        <>
        <HomeNavBar/>
        <Filter/>
        <div className={css.CardsContainers}>
        {this.props.GP_List["GETGP"]!=undefined?
        <Cards GP_List = {this.props.GP_List["GETGP"]}/>
        :null}
        </div>
        </>
    );    
  }
}

function mapStateToProps(state) {
  return {
      GP_List: state.loginStatus
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
  return bindActionCreators({getGP_List: getGP_List}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Home);

