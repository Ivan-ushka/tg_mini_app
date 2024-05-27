import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faChartSimple, faGear, faHouse, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Footer = () => {
    const [activeIndex, setActiveIndex] = useState<number| null>(0);
    const handleFocus = (index: number | null) => {
        console.log(index)
        setActiveIndex(index);
    };


    return (
        <Container
            className="d-flex mw-100 p-2 text-secondary position-fixed bottom-0 flex-row align-items-center justify-content-center bg-white">
            <div className={`d-flex flex-column p-3 ms-2 ${
                activeIndex === 0 ? 'text-primary' : 'text-secondary'
            }`}
                 onMouseEnter={() => handleFocus(0)}
                 onMouseLeave={() => handleFocus(null)}>
                <FontAwesomeIcon icon={faHouse} fontSize="1.5rem"/>
                <p style={{fontSize: '0.9em'}} className="mt-1 p-0 mb-0">Home</p>
            </div>
            <div className={`d-flex flex-column p-3 ${
                activeIndex === 1 ? 'text-primary' : 'text-secondary'
            }`}
                 onMouseEnter={() => handleFocus(1)}
                 onMouseLeave={() => handleFocus(null)}>
                <FontAwesomeIcon icon={faChartSimple} fontSize="1.5rem"/>
                <p style={{fontSize: '0.9em'}} className="mt-1 p-0 mb-0">Market</p>
            </div>

            <div className="rounded-circle z-2" style={{marginTop: "-90px", backgroundColor: 'initial'}}>
                <div className="m-1 mb-3" style={{backgroundColor: 'none'}}>
                    <Link to="create_asset" style={{backgroundColor: 'none'}}>
                        <Button className="rounded-circle" style={{backgroundColor: 'none'}}>
                            <FontAwesomeIcon style={{backgroundColor: 'none'}} className="p-2" icon={faPlus}
                                             fontSize="2rem"/>
                        </Button>
                    </Link>
                </div>
            </div>


            <div className={`d-flex flex-column p-3 ${
                activeIndex === 2 ? 'text-primary' : 'text-secondary'
            }`}
                 onMouseEnter={() => handleFocus(2)}
                 onMouseLeave={() => handleFocus(null)}>
                <FontAwesomeIcon icon={faBell} fontSize="1.5rem"/>
                <p style={{fontSize: '0.9em'}} className="mt-1 p-0 mb-0">Alert</p>
            </div>
            <div className={`d-flex flex-column p-3 ${
                activeIndex === 3 ? 'text-primary' : 'text-secondary'
            }`}
                 onMouseEnter={() => handleFocus(3)}
                 onMouseLeave={() => handleFocus(null)}>
                <FontAwesomeIcon icon={faGear} fontSize="1.5rem"/>
                <p style={{fontSize: '0.9em'}} className="mt-1 p-0 mb-0">Settings</p>
            </div>
        </Container>
    );
};

export default Footer;