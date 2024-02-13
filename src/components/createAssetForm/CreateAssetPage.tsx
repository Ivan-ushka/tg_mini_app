import React from 'react';
import {Button, Container} from "react-bootstrap";
import AssetForm from "./AssetForm";
import {Link} from "react-router-dom";

const CreateAssetPage = () => {
    return (
        <Container className="d-flex justify-content-end text-center flex-column">
            <h1 className='rounded-1 text-light shadow p-2' style={{fontWeight: 600}}>Add asset</h1>
            <AssetForm />
            <Container className='d-flex justify-content-end'>
               <Link to="/"> <Button> Back </Button></Link>
            </Container>
        </Container>
    );
};

export default CreateAssetPage;