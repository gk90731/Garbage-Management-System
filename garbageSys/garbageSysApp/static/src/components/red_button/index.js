import React, { Component } from 'react';
import css from './style.css';
import Button from 'react-bootstrap/Button';
const RedButton = (props) => {
    return (
        <div>
    
            <Button className={css.RedButton} type="submit" onClick={props.onSubmit}> {props.label}</Button>
    
        </div>
    );
  };

export default RedButton;