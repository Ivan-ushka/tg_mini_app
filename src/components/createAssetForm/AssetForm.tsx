import React, {useState, ChangeEvent, FormEvent} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {faCoins, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Service from "../../http/services";
import Asset from "../../interfaces/asset";

const AssetForm = () => {
    const [data, setData] = useState<Asset>({
        name: "",
        number: 0,
        price: 0,
        total_price: 0,
        currency: "USD",
        transaction_date: new Date().toISOString(),
    });

    const [validated, setValidated] = useState(false);


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value.replace(/^0+(?=\d)/, '');
        setData({
            ...data,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        const form = event.currentTarget as HTMLFormElement;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (validated) {
            try {
                const response = await Service.createAsset(data);
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="my-1">
            <InputGroup className="my-1">
                <InputGroup.Text ><FontAwesomeIcon icon={faBitcoin} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    placeholder="Asset name"
                    aria-label="Asset name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                />
            </InputGroup>

            <InputGroup className="my-1">
                <InputGroup.Text id="inputGroup-sizing-sm"><FontAwesomeIcon icon={faCoins} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    type="number"
                    placeholder="Number of assets"
                    aria-label="Number of assets"
                    name="number"
                    value={data.number}
                    onChange={handleInputChange}
                />
            </InputGroup >

            <InputGroup className="my-1">
                <InputGroup.Text ><FontAwesomeIcon icon={faDollarSign} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    type="number"
                    placeholder="Price per coin"
                    aria-label="Price per coin"
                    name="price"
                    value={data.price}
                    onChange={handleInputChange}
                />
            </InputGroup>

            <InputGroup  className="my-1">
                <InputGroup.Text ><FontAwesomeIcon icon={faDollarSign} className="text-primary"/></InputGroup.Text>
                <Form.Control
                    type="number"
                    placeholder="Total price"
                    aria-label="Total price"
                    name="total_price"
                    value={data.total_price}
                    onChange={handleInputChange}
                />
            </InputGroup >
             <Container className="d-flex justify-content-end">
                 <Button type="submit"> Submit form</Button>
             </Container>
        </Form>
    );
};

export default AssetForm;