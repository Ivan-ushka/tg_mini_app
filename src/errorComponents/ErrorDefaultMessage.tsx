import React from 'react';
import {Image} from "react-bootstrap";
import robot from '../assets/images/robot.jpg'
const ErrorDefaultMessage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-5">
            <Image src={robot} alt="robot" width="300px" height="300px"  className="rounded-1"></Image>
            <h2 className="mb-3 mt-2">Aaaaaaah! Something went wrong</h2>
            <p >Brace yourself till get the error fixed</p>
            <p>You can also refresh the page or try again later</p>
        </div>
    );
};

export default ErrorDefaultMessage;