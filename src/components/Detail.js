import React, { Component } from 'react';
import {useLocation} from 'react-router-dom';

/** This component for Bigger Image, which is used in other components **/
function Detail() {

const location = useLocation();


    return (
        <>
            <div className="d-flex flex-row">
                <img src={ `https://?rule=mo-640.jpg` } />
            </div>
        </>
    )
}

export default Detail