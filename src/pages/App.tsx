import React from 'react';
import MainRouter from "./MainRouter";
import './app.css'
import {Provider} from "react-redux";
import {store} from "../state/store";
import Header from "../components/Header";



function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <Header />
                <MainRouter/>
            </Provider>
        </div>
    );
}

export default App;
