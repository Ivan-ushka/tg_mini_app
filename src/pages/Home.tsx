import React from 'react';
import {Button, Container} from "react-bootstrap";
import CustomTable from "../components/customTable/CustomTable";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className="bg-light">
            <Container className="d-flex justify-content-end text-center flex-column">
                <h1 className='border-bottom'>Криптовалюта</h1>
                <CustomTable></CustomTable>
                <CustomTable></CustomTable>
                <CustomTable></CustomTable>
                <CustomTable></CustomTable>
                <CustomTable></CustomTable>
                <Container className="d-flex align-items-center justify-content-end my-2">
                    <Link to="create_asset"><Button><FontAwesomeIcon icon={faPlus}/></Button></Link>
                </Container>
            </Container>
        </div>
    );
};

export default Home;