import {useEffect, useMemo, useState} from "react";
import Modal from "../Component/UI/Modal/Modal";
import Spinner from "../Component/UI/Spinner/Spinner";

const withErrorHandler = (WrappedComponent, axios) => {
    return function ErrorHandlerHOC(props) {
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        const icIdReq = useMemo(() => {
            return axios.interceptors.request.use(req => {
                    // setLoading(true);
                    console.log('запрос отправлен');
                    return req;
                },
                error => {
                    console.log('[IN HOC interceptor]');
                    setError(error);
                    throw error;
                }
            );
        }, []);

        const icIdRes = useMemo(() => {
            return axios.interceptors.response.use(res => {
                    setLoading(false);
                    console.log('запрос получен');
                    return res;
                },
                error => {
                    console.log('[IN HOC interceptor]');
                    setError(error);
                    throw error;
                }
            );
        }, []);

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(icIdReq)
                axios.interceptors.response.eject(icIdRes);

            }
        }, [icIdRes, icIdReq]);

        const dismiss = () => {
            setError(null);
        };

        console.log(loading);

        if (loading) {
            return <Spinner/>
        } else {
            return (
                <>
                    <Modal show={Boolean(error)} close={dismiss}>
                        {error && error.message}
                    </Modal>
                    <WrappedComponent {...props} />
                </>
            )
        }
    };

};

export default withErrorHandler;