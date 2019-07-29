import React from "react";
import ReactDOM from "react-dom";
import PicScroller from "PicScroller";
import Arrow from "Arrow";

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentPicIndex: 0};
    }
    render () {
        return (
            <div className='carousel'>
                <Arrow direction="left"
                       clickFunc={ this.previousPic}
                       image="&#9664;"/>

                <PicScroller  picture = { imgUrls[this.state.currentPicIndex] }/>

                <Arrow direction="right"
                       clickFunc={ this.nextPic}
                       image="&#9654;"/>
            </div>
        );
    }
}

export default Carousel;