import React from "react";
import ReactDOM from "react-dom";

const PicScroller = ({ picture }) => {

    const styling = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="pic-scroller" style={styling}>

        </div>
    )
}

export default PicScroller;