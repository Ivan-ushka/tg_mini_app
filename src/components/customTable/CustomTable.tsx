import React from 'react';
import {Container, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoin} from "@fortawesome/free-brands-svg-icons";

const fontStyle = {
    fontSize: 0.7 + 'rem',

}
const CustomTable = () => {
    return (
        <Container className="d-flex bg-white shadow-sm rounded my-1">
            <Stack className="d-flex flex-row text-start ms-5" >
                <FontAwesomeIcon icon={faBitcoin} className="mt-1"/>
                <Container>
                    <div>LTC</div>
                    <div className="pb-1 text-muted" style={fontStyle}>Litecoin</div>
                    <div className="text-muted" style={fontStyle}>Pnl за сегодня</div>
                </Container>

            </Stack>
            <Stack className="d-flex text-start ms-4">
                <div>3.6512</div>
                <div className="pb-1 text-muted " style={fontStyle}>246.85 USDT</div>
                <div style={fontStyle}>+$0.45</div>
            </Stack>
        </Container>
    );
};

export default CustomTable;