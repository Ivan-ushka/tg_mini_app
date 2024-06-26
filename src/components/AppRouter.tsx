import React from 'react';
import {Route, Routes} from "react-router-dom";
import AddAsset from "../pages/addAsset/addAsset";
import Home from "../pages/home/Home";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/create_asset" element={<AddAsset />}/>
            </Routes>
        </>
    );
};

export default AppRouter;