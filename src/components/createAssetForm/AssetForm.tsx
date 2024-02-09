import React, {useState, FormEvent} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {faCoins, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

const AssetForm = () => {
    const [name, setName] = useState<string>('');

    const [number, setNumber] = useState<number>();

    const [price, setPrice] = useState<number>();

    const [totalPrice, setTotalPrice] = useState<number>();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>)     => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="my-1">
            <InputGroup className="my-1">
                <InputGroup.Text ><FontAwesomeIcon icon={faBitcoin} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    placeholder="Asset name"
                    aria-label="Asset name"

                />
            </InputGroup>

            <InputGroup className="my-1">
                <InputGroup.Text id="inputGroup-sizing-sm"><FontAwesomeIcon icon={faCoins} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    type="number"
                    placeholder="Number of assets"
                    aria-label="Number of assets"
                />
            </InputGroup >

            <InputGroup className="my-1">
                <InputGroup.Text ><FontAwesomeIcon icon={faDollarSign} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    type="number"
                    placeholder="Price per coin"
                    aria-label="Price per coin"
                />
            </InputGroup>

            <InputGroup  className="my-1">
                <InputGroup.Text ><FontAwesomeIcon icon={faDollarSign} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    type="number"
                    placeholder="Total price"
                    aria-label="Total price"
                />
            </InputGroup >
             <Container className="d-flex justify-content-end">
                 <Button type="submit">Submit form</Button>
             </Container>
        </Form>
    );
};

export default AssetForm;