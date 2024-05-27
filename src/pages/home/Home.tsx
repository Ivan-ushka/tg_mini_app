import React, {useEffect, useState} from 'react';
import {Container, Image} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../state/store';
import {fetchAsset} from '../../state/assetActions';
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorComponent from "../../components/ErrorComponent";
import PrintAssets from "./PrintAssets";
import {fetchTickers} from "../../state/tickersActions";
import Footer from "../../components/Footer";
import ErrorMessage from "../../components/ErrorMessage";
import withArrayValidation from "../../components/withArrayValidation";
import rectangle from '../../Untitled.svg'
import OIG2 from '../../OIG2.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceSmileWink} from "@fortawesome/free-regular-svg-icons";

interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
}
const Home: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const assets = useSelector((state: RootState) => state.asset.listAssets);
    const loading = useSelector((state: RootState) => state.asset.loading);
    const error = useSelector((state: RootState) => state.asset.error);
    const previousAssetData = useSelector((state: RootState) => state.asset.previousListAssets);

    const [user, setUser] = useState<TelegramUser | null>(null);

    useEffect(() => {
        // Проверка наличия объекта Telegram WebApp
        if (window.Telegram.WebApp.initDataUnsafe) {
            const userData = window.Telegram.WebApp.initDataUnsafe.user;
            // @ts-ignore
            setUser(userData);
        }
    }, []);

    useEffect(() => {
        dispatch(fetchAsset());
        dispatch(fetchTickers());
    }, [dispatch]);

    if (error) {
        return (
            <ErrorComponent error={error} previousAssets={previousAssetData}/>
        );
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    const PrintAssetsWithArrayValidation = withArrayValidation(PrintAssets);

    return (
        <div>
            <Container className="mt-4 px-4">
                <h5 style={{fontWeight: '600'}}>{user.first_name} {user.last_name}</h5>
                <p>Welcome back! 👋</p>
            </Container>
            <Container className="d-flex flex-column justify-content-end text-center mt-4"
                       style={{marginBottom: '140px'}}>
                {/* <h1 className="rounded-1 shadow bg-primary text-white p-2" style={{fontWeight: 600}}>
                    Cryptocurrency
                </h1>*/}


                <div className="d-flex justify-content-center align-items-center" style={{marginTop: "10px"}}>
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{
                        backgroundImage: `url(${rectangle})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        minHeight: '170px',
                        minWidth: '304px',
                    }}>
                        <Image className="z-0 rounded-4 border-5 border border-light" src={OIG2} alt="robot"
                               width="50px" height="50px" style={{marginTop: "-65px"}}></Image>
                        <p className="text-white-50 mt-3 mb-1">Current balance:</p>
                        <h3 className="text-white">$145,430.43</h3>
                        <div style={{fontSize: '1.1em'}} className="text-light d-flex">Weekly profit
                            <div style={{fontSize: '0.7em'}} className="bg-primary-subtle text-primary rounded-2 px-1 mx-1 align-content-center text-center">+2.35%</div>
                        </div>
                    </div>

                </div>


                {loading ? (
                    <>
                        <PrintAssetsWithArrayValidation assets={assets}></PrintAssetsWithArrayValidation>
                        <LoadingSpinner/>
                    </>
                ) : (
                    <PrintAssetsWithArrayValidation assets={assets}></PrintAssetsWithArrayValidation>
                )}
            </Container>
            <Footer/>
        </div>
    );
};

export default Home;