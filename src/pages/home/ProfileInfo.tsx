import React from 'react';
import {Image} from "react-bootstrap";
import robot from '../../assets/images/robot.jpg'

const ProfileInfo = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{marginTop: "10px"}}>
            <div className="d-flex flex-column justify-content-center align-items-center rectangle-img-bg">
                <Image className="rounded-4 border-5 border border-light"
                       src={robot}
                       alt="robot"
                       width="50px"
                       height="50px"
                       style={{marginTop: "-65px"}}>
                </Image>
                <p className="text-white-50 mt-3 mb-1">Current balance:</p>
                <h3 className="text-white">$145,430.43</h3>
                <div style={{fontSize: '1.1em'}} className="d-flex text-light">Weekly profit
                    <div style={{fontSize: '0.7em'}}
                         className="bg-primary-subtle text-primary rounded-2 px-1 mx-1 align-content-center text-center">
                        +2.35%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;