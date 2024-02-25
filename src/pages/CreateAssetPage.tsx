import React, {useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import AssetForm from "../components/AssetForm";
import {Link} from "react-router-dom";
import {fetchTickers} from "../state/tickersActions";
import {useDispatch} from "react-redux";

const CreateAssetPage = () => {
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(fetchTickers());
    }, [dispatch]);

    return (
        <Container className="d-flex justify-content-end text-center flex-column">
            <h1 className='rounded-1 bg-white  shadow p-2' style={{fontWeight: 600}}>Add asset</h1>
            <AssetForm />
            <Container className='d-flex justify-content-end'>
               <Link to="/">
                   <Button className="custom-button"> Back </Button>
               </Link>
            </Container>
        </Container>
    );
};

export default CreateAssetPage;