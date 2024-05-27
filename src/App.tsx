import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import './app.css'
import {Provider} from "react-redux";
import {store} from "./state/store";


function App() {
    useEffect(() => {
        Telegram.WebApp.ready();
    }, []);

    return (
        <div className="app">
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </div>
    );
}

export default App;
