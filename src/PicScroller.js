import React from "react";
import ReactDOM from "react-dom";

const PicScroller = ({ picture }) => {

    const styling = {
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="pic-scroller" style={styling}>

        </div>
    )
}

export default PicScroller;