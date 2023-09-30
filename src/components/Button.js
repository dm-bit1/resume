import React from "react";

function Button({color, text, image}) {
    const imageSize = { width: "20px", height: "20px", border: "0"};
    return <button className = {color}>{text}{image && <img src={image} alt="Button Icon" style={imageSize} />}</button>;
}

export default Button;

