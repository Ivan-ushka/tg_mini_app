import React from 'react';
import {Container} from "react-bootstrap";
import MainRouter from "./MainRouter";
import './app.css'


function App() {
    return (
        <div className="app py-2">
            <Container>
                <MainRouter/>
            </Container>
        </div>
    );
}

export default App;
