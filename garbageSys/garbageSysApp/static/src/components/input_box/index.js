
import React, { Component } from 'react';
import css from './style.css';
const InputBox = (props) => {
    return (
        <div className={css.general}>
            <input type={props.type} placeholder={props.placeholder} step={props.step}  onChange={props.onChangeValue}/>
        </div>
    );
  };

export default InputBox;