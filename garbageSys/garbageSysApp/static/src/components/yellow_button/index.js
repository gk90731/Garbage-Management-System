import React, { Component } from 'react';
import css from './style.css';
const YellowButon = (props) => {
    
    return (
        <div>
            <button className={css.post_button} onClick={props.onSubmit} >{props.label}</button>
        </div>
    );
  };

export default YellowButon;


