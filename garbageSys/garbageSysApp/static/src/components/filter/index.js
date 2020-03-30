import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaBed, FaBath, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown'
class Filter extends Component {
    state={
        
    }
    
    render() { 
        // console.log((this.state.value2.getTime()-this.state.value1.getTime()) / (1000 * 3600 * 24) )
          return (  
        <div>
            
                
                    
                    
                                   
                                    <Dropdown >
                                    <Dropdown.Toggle className={css.bedroom} variant="success" id="dropdown-basic">
                                       <FaDrumSteelpan className={css.bedroom_BedIcon}/> Filled Amount
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">25%</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">50%</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">75%</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">100%</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    
                                    <Dropdown >
                                    <Dropdown.Toggle className={css.budget} variant="success" id="dropdown-basic">
                                       <FaSearchLocation className={css.bedroom_BedIcon}/> Location
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Location1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Location2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Location3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Location4</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                   
                  
                    
              
            
        </div>
    );
  }
}
export default Filter;