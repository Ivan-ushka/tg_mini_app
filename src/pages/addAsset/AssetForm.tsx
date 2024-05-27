import React, {useState, ChangeEvent, FormEvent} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import Service from "../../http/services";
import Asset from "../../interfaces/asset";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {Link} from "react-router-dom";

const AssetForm = () => {
    const tickers = useSelector((state: RootState) => state.tickers.tickers);
    const [data, setData] = useState<Asset>({
        name: "",
        number: 0,
        price: 0,
        total_price: 0,
        currency: "USD",
        transaction_date: new Date().toISOString(),
    });

    /* useEffect(() => {
        if(!data.number && data.price && data.total_price) setData({...data, number:  (data.total_price / data.price)})
     }, [data])*/

    const [validated, setValidated] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/^0+(?=\d)/, '');
        setData({
            ...data,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}
              className="my-1 d-flex flex-column text-start ">
            <Form.Label htmlFor="Asset name" className='mx-1'>Asset name</Form.Label>
            <Form.Group>
                <Form.Control
                    placeholder="Asset name"
                    aria-label="Asset name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    list="assetsName"
                />
                <datalist id="assetsName">
                    {tickers.map((item, index) => (
                        <option key={index} value={item}/>
                    ))}
                </datalist>
            </Form.Group>

            <Form.Label htmlFor="Number of assets" className='mx-1'>Number of assets</Form.Label>
            <InputGroup className="mb-2">
                <Form.Control
                    type="number"
                    placeholder="Number of assets"
                    aria-label="Number of assets"
                    name="number"
                    value={data.number}
                    onChange={handleInputChange}
                />
            </InputGroup>

            <Form.Label htmlFor="Price per coin" className='mb-0 mx-1'>Price per coin</Form.Label>
            <InputGroup className="mb-2">
                <Form.Control
                    type="number"
                    placeholder="Price per coin"
                    aria-label="Price per coin"
                    name="price"
                    value={data.price}
                    onChange={handleInputChange}
                />
            </InputGroup>

            <Form.Label htmlFor="Total price" className='mb-0 mx-1'>Total price</Form.Label>
            <InputGroup className="mb-2">
                <Form.Control
                    type="number"
                    placeholder="Total price"
                    aria-label="Total price"
                    name="total_price"
                    value={data.total_price}
                    onChange={handleInputChange}
                />
            </InputGroup>

            <div className="d-flex bg-white justify-content-center fixed-bottom pt-2 pb-5">
                <Link to="/">
                    <Button size="lg" className="me-5 primary"> Back </Button>
                </Link>
                <Button size="lg" className="primary" type="submit"> Submit </Button>
            </div>
        </Form>
    );
};

export default AssetForm;