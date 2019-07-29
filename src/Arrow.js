import React from 'react';

const Arrow = ({ direction, clickFunc, image }) => (
    <div className={ `picture-scroll ${direction}`}
         onClick={clickFunc}>
             {image}
    </div>
);

export default Arrow;