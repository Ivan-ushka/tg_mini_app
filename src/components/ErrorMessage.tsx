import React from 'react';
import {Image} from "react-bootstrap";
import OIG2 from '../OIG2.jpg'
const ErrorMessage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-5">
            <Image src={OIG2} alt="robot" width="300px" height="300px"></Image>
            <h2 className="mb-3 mt-2">Aaaaaaah! Something went wrong</h2>
            <p >Brace yourself till get the error fixed</p>
            <p>You can also refresh the page or try again later</p>
        </div>
    );
};

export default ErrorMessage;