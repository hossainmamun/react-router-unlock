import React from 'react';

const Dynamic = (props) => {
    const { strBanner } = props.dynamicImg
    return (
        <div className="header">
            <div className="overlay">
                <img src={strBanner} alt="" />
            </div>
        </div>
    );
};

export default Dynamic;