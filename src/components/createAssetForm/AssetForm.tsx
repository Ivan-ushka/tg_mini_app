import React, {useState, ChangeEvent, FormEvent} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
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
        event.preventDefault();
        /*event.stopPropagation();*/

        /*        console.log(1)
        const form = event.currentTarget as HTMLFormElement;
        if (!form.checkValidity()) {

        }*/
        setValidated(true);

        if (validated) {
            try {
                console.log(1)
                console.log(data)
                const response = await Service.createAsset(data);
                console.log('a')
                console.log('Response:', response);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="my-1">
            <InputGroup className="my-1" size="sm">
                <Form.Control
                    placeholder="Asset name"
                    aria-label="Asset name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                />
                <InputGroup.Text style={{width: '7rem'}}>Asset name</InputGroup.Text>
            </InputGroup>

            <InputGroup className="my-1" size="sm">
                <Form.Control
                    type="number"
                    placeholder="Number of assets"
                    aria-label="Number of assets"
                    name="number"
                    value={data.number}
                    onChange={handleInputChange}
                />
                <InputGroup.Text  style={{width: '7rem'}}>Number of assets</InputGroup.Text>
            </InputGroup >

            <InputGroup className="my-1" size="sm">
                <Form.Control
                    type="number"
                    placeholder="Price per coin"
                    aria-label="Price per coin"
                    name="price"
                    value={data.price}
                    onChange={handleInputChange}
                />
                <InputGroup.Text  style={{width: '7rem'}}>Price per coin</InputGroup.Text>
            </InputGroup>

            <InputGroup  className="my-1" size="sm">
                <Form.Control
                    type="number"
                    placeholder="Total price"
                    aria-label="Total price"
                    name="total_price"
                    value={data.total_price}
                    onChange={handleInputChange}
                />
                <InputGroup.Text  style={{width: '7rem'}}>Total price</InputGroup.Text>
            </InputGroup >

             <Container className="d-flex justify-content-end">
                 <Button type="submit"> Submit form</Button>
             </Container>
        </Form>
    );
};

export default AssetForm;