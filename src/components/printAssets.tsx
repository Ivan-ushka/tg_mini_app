import React from 'react';
import {getAsset} from "../interfaces/asset";
import AssetCard from "./AssetCard";

const printAssets: React.FC<{ assets: getAsset[] }> = ({assets}) => (
    <>
        {assets.map((item, index) => (
            <AssetCard key={index} data={item}/>
        ))}
    </>
);

export default printAssets;