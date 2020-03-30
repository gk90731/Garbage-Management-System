import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import {bindActionCreators} from 'redux';
import {AlterState} from '../../core/actions/actions';
var csrftokencookie = Cookies.get('csrftoken');
class Cards extends Component {
    state={
        value:"",
        play:false,
        csrftokencookie:csrftokencookie
    }
    
    createTable = () => {
        let table = []

        for (let i = 0; i < 7; i++) {
        table.push(<div className="col-md-3"><div className={css.cardBox} >
            <FaStopCircle className={css.stop_card}/>
            <FaPlayCircle className={css.play_card}/>

            <div style={{backgroundImage: `url(${"static/assets/dustbin.png"}),linear-gradient(rgba(238, 237, 237, 0.5), rgba(238, 237, 237, 0.5))`,height:"72%",width:"58%",
            backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover",
            marginLeft:"42px",marginTop:"31px",opacity:"0.08"}}>
            </div>
                <p className={css.card_address}>DUMMY CARDS FOR DEMO</p>
            
                <ProgressBar className={css.progress}  animated now={45} />
        </div><br/> </div>  )
        }
        return table
    }
    render()
     { 
          return (  
        <div className="row">
            {this.props.GP_List[0]!=undefined?
            this.props.GP_List.map((GP)=>
            <div className="col-md-3">
            <div className={css.cardBox} >
                <FaStopCircle className={css.stop_card}/>
                {this.state.play
                ? <FaPlayCircle onClick={()=>{this.setState({play:false}),this.props.AlterState(this.state.csrftokencookie, GP.UID)}} className={css.play_card}/>
                : <FaPauseCircle onClick={()=>{this.setState({play:true}),this.props.AlterState(this.state.csrftokencookie, GP.UID)}} className={css.play_card}/>}
                <div style={{backgroundImage: `url(${"static/assets/dustbin.png"})
                ,linear-gradient(rgba(238, 237, 237, 0.5), rgba(238, 237, 237, 0.5))`,height:"72%",width:"58%",
                backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover",
                marginLeft:"42px",marginTop:"31px",opacity:"0.08"}}>
                </div>
                    <p className={css.card_address}>{GP.Location}</p>
                    {/* <div className={css.footer_box}></div> */}
                    <ProgressBar className={css.progress}  animated now={GP.FilledPercent} />
            </div>  <br/>
            </div>  ):null}
            {this.createTable()}
            

        </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        loginStatus: state.loginStatus
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({AlterState: AlterState}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Cards);