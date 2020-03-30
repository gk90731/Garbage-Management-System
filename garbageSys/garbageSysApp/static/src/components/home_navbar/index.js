import React, { Component } from 'react';
import ExtendedNavBar from '../extendednavbar';
import css from './style.css';
import {HashRouter as Router,Switch,Route,Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
const HomeNavBar = (props) => {
    return (
    <div>
      <div>
      <ExtendedNavBar  history={props.history} />
      </div>
      <div >
        <Button className={css.home_postAd}><a className={css.Link} href="#/addproperty">Add New</a></Button>
      </div>
    </div>
    );
  }
export default HomeNavBar;