import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import AssetForm from "./AssetForm";
import {fetchTickers} from "../../state/tickersActions";
import {useDispatch} from "react-redux";

const AddAsset = () => {
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(fetchTickers());
    }, [dispatch]);

    return (
        <Container className="d-flex justify-content-end text-center flex-column my-4">
            <h1 className='rounded-1 shadow bg-primary text-white p-2 text-bold'>Add asset</h1>
            <AssetForm />
        </Container>
    );
};

export default AddAsset;