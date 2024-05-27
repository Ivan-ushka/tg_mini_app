import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../state/store';
import {fetchAsset} from '../../state/assetActions';
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorComponent from "../../errorComponents/ErrorComponent";
import PrintAssets from "./PrintAssets";
import {fetchTickers} from "../../state/tickersActions";
import Footer from "../../components/Footer";
import ErrorDefaultMessage from "../../errorComponents/ErrorDefaultMessage";
import withArrayValidation from "../../components/withArrayValidation";
import ProfileInfo from "./ProfileInfo";
import ErrorNotTelegramUser from "../../errorComponents/ErrorNotTelegramUser";

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
            if (userData) {
                setUser({
                    id: userData.id,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    username: userData.username,
                });
            }
        }
    }, []);

    useEffect(() => {
        dispatch(fetchAsset());
        dispatch(fetchTickers());
    }, [dispatch]);

    if (error) {
        return <ErrorComponent error={error} previousAssets={previousAssetData}/>
    }

    if (!user) {
        return <ErrorNotTelegramUser/>;
    }

    const PrintAssetsWithArrayValidation = withArrayValidation(PrintAssets);

    return (
        <div>
            <Container className="mt-4 px-4">
                <h5 className="text-primary-dark text-bold">{user.first_name} {user.last_name}</h5>
                <p> Welcome back! 👋</p>
            </Container>
            <Container className="d-flex flex-column justify-content-end text-center mt-4 mb-6" >
                <ProfileInfo/>
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