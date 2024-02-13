import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import AssetCard from "../components/assetCard/AssetCard";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {getAsset} from "../interfaces/asset";
import Service from '../http/services';

const Home = () => {

    const [data, setData] = useState<getAsset[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Service.getListAssets();
                setData(response.data.messages);
                setLoading(false);
                console.log(response)
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Container className="d-flex justify-content-end text-center flex-column">
                <h1 className='rounded-1 text-light shadow p-2' style={{fontWeight: 600}}>Cryptocurrency</h1>
                <div className="my-2">
                    {data &&
                        data.map((item, index) => (
                            index < 4 && <AssetCard data={item}/>
                        ))
                    }
                </div>
                <Container className="d-flex align-items-center justify-content-end my-2">
                    <Link to="create_asset">
                        <Button>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                    </Link>
                </Container>
            </Container>
        </div>
    );
};

export default Home;