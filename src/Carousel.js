import React, { Component } from "react";
import PicScroller from "./PicScroller";
import Arrow from "./Arrow";

const imgUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cc/Painted_Ladies.jpg",
    "https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/California/San%20Francisco/san-francisco-main.jpg?imwidth=1400",
    "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    "https://s.hdnux.com/photos/76/04/72/16273086/9/core_thumbnail_list.jpg"
]

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentPicIndex: 0};

        this.previousPic = this.previousPic.bind(this);
        this.nextPic = this.nextPic.bind(this);
    }

    previousPic() {
        const lastIndex = imgUrls.length - 1;
        const {currentPicIndex} = this.state;
        const resetIndex = currentPicIndex === 0;
        const index = resetIndex ? lastIndex : currentPicIndex - 1;

        this.setState({ currentPicIndex: index })
    }

    nextPic() {
        const lastIndex = imgUrls.length - 1;
        const {currentPicIndex} = this.state;
        const resetIndex = currentPicIndex === lastIndex;
        const index = resetIndex ? 0 : currentPicIndex + 1;

        this.setState({ currentPicIndex: index })
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