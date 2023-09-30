import React from "react";

function ImageButton({color, image}) {
    const imageStyles = {
        width: "50px",
        height: "50px",
        outline: 0
    };

    const buttonStyles = {
        backgroundColor: color,
    };

    return (
        <img src={image} alt="Button Icon" style={imageStyles}/>
    );
}

export default ImageButton;