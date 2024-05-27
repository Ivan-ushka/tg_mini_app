import React from 'react';
import {getAsset} from "../interfaces/asset";
import AssetCard from "../components/AssetCard";

interface ErrorComponentProps {
    error: string;
    previousAssets: getAsset[];
}


const ErrorComponent: React.FC<ErrorComponentProps> = ({error, previousAssets}) => (
    <div>
        {previousAssets.map((item, index) => (
            <AssetCard key={index} data={item}/>
        ))}
        <div>Error: {error}</div>
    </div>
);
export default ErrorComponent;