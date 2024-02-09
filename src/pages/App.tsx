import React from 'react';
import {Container} from "react-bootstrap";
import MainRouter from "./MainRouter";

function App() {
    return (
        <div className="bg-light py-2" style={{height: "1000px"}}>
            <Container >
                <MainRouter />
            </Container>
        </div>
    );
}

export default App;
