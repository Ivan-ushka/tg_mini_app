import React from 'react';
import {Spinner} from "react-bootstrap";

const LoadingSpinner: React.FC = () => (
    <div className="d-flex justify-content-center align-items-center m-5">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
);

export default LoadingSpinner;