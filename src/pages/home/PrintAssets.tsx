import React from 'react';
import {getAsset} from "../../interfaces/asset";
import AssetCard from "../../components/AssetCard";
import {Container} from "react-bootstrap";

const printAssets: React.FC<{ assets: getAsset[] }> = ({assets}) => (
    <Container className="text-start">
        <h5 className="my-4 px-2 py-2" style={{fontWeight: '600'}}>My Portfolio</h5>
        {assets.map((item, index) => (
            <AssetCard key={index} data={item}/>
        ))}
    </Container>
);

export default printAssets;