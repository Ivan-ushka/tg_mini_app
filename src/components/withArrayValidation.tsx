import React from 'react';
import sadSmiley from '../assets/images/sadSmiley.jpg'
import ErrorDefaultMessage from '../errorComponents/ErrorDefaultMessage';
import {Container, Image} from "react-bootstrap";
import robot from "../assets/images/robot.jpg";

interface WithArrayValidationProps {
    assets: any[];
}

const NoAsset = () => {
    return (
        <Container className="text-start mb-5">
            <h5 className="my-4 p-2 text-primary-dark" style={{fontWeight: '600'}}>My Portfolio</h5>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Image
                    src={sadSmiley}
                    alt="sadSmiley"
                    width="150px"
                    height="150px"
                    className="mb-2 rounded-2"
                >
                </Image>
                <p className="fs-2 text-bold text-primary-dark">You dont have current assets</p>
                <p className="fs-1 text-bold text-primary-dark">Add assets to keep an eye on them</p>
            </div>
        </Container>
    )
}

function withArrayValidation<T extends WithArrayValidationProps>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {
        const {assets, ...rest} = props;
        if (Array.isArray(assets) && assets.length !== 0) {
            return <WrappedComponent {...rest as T} assets={assets}/>;
        } else if (assets.length === 0) {
            return <NoAsset/>
        } else {
            return <ErrorDefaultMessage/>;
        }
    };
}

export default withArrayValidation;