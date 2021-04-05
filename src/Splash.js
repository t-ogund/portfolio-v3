import React from 'react';
import Blurb from './Blurb';

function Splash() {
    return(
        <div className="container-fluid projects">
            <div className="row">
                <div className="col splash-landing">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-sm">
                        <Blurb />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Splash