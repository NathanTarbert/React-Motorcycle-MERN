import React, { useState } from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

const Button = (props) => {
    const [size] = useState(props.size);
    const [color] = useState(props.color);
    const [content] = useState(props.content);

    return (
        
            <button style={{ backgroundColor: color, fontsize: size }}>{content}</button>
        
    );
}

export default Button;