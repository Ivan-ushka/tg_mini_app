import React from 'react';
import {Image} from "react-bootstrap";
import errorPicture from '../assets/images/errorPicture2.jpg'
const ErrorDefaultMessage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-5">
            <Image src={errorPicture} alt="errorPicture" width="300px" height="300px" className="rounded-1"></Image>
            <h2 className="mb-3 mt-2">Something wrong with your telegram account</h2>
            <p>Are you sure you came in Telegram?</p>
            <p>You can also refresh the page or try again later</p>
        </div>
    );
};

export default ErrorDefaultMessage;