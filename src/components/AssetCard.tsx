import React from 'react';
import {Container, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoin} from "@fortawesome/free-brands-svg-icons";
import {getAsset} from "../interfaces/asset";


interface MyComponentProps {
    data: getAsset;
}


const AssetCard: React.FC<MyComponentProps> = ({data}) => {
    let bg;
    if (Number(data.daily_pnl) > 0) {
        bg = 'text-success mb-0';
    } else {
        bg = 'text-danger mb-0';
    }
    return (
        <Container className="d-flex bg-white shadow-sm rounded-1 my-2 py-1" >
            <Stack className="d-flex flex-row text-start ms-5">
                <FontAwesomeIcon icon={faBitcoin} className="mt-1"/>
                <Container className="" >
                    <h6>{data.name}</h6>
                    <p className="text-muted mb-1"> {data.full_name}</p>
                    <p className="text-muted mb-0">Pnl за сегодня</p>
                </Container>

            </Stack>
            <Stack className="d-flex text-end pe-3">
                <h6>{data.number}</h6>
                <p className="text-muted mb-1">{data.total_sum.toFixed(1)} USDT</p>
                <p className={bg} >{data.daily_pnl}$ </p>
            </Stack>
        </Container>
    );
};

export default AssetCard;