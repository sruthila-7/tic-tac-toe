import React from 'react';
import "./button.css"

const Button = (props) => {
  return(
    <span>
        <button style={props.style}
          onClick={() => {
            props.onClick(props.label, props.index);
          }}
        >
          {props.label}
        </button>
    </span>
  );
};

const defaultProps = {
    index: 0,
    label: "Button",
};

Button.defaultProps = defaultProps;

export default Button;