import React from 'react';
import './Button.css';
import PropTypes  from 'prop-types';

const Button =({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize,
    buttonColor
})=>{
    return (
        <button 
        className={`btn 
                ${buttonStyle} 
                ${buttonSize} 
                ${buttonColor}`} 
        onclick={onclick}
        type={type}
        >
            {children}
        </button>
    )
}
Button.defaultProps ={
    children:"Click me",
    type:"",
    onclick:"",
    buttonStyle:"btn-primary",
    buttonSize:"btn-medium",
    buttonColor:"",
}
Button.propTypes = {
    children:PropTypes.string,
    type:PropTypes.string,
    onclick:PropTypes.func,
    buttonStyle:PropTypes.string,
    buttonSize:PropTypes.string,
    buttonColor:PropTypes.string,
}
export default Button;