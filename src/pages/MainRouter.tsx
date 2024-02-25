import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreateAssetPage from "./CreateAssetPage";
import Home from "./Home";

const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/create_asset" element={<CreateAssetPage />}/>
            </Routes>
        </>
    );
};

export default MainRouter;