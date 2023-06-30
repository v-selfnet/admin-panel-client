import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        });
        axiosSecure.interceptors.response.use(res => res, async error => {
            if (error.res && (error.res.status === 401 || error.res.status === 403)) {
                await logOut().then(() => {
                    navigate('/')
                })
            }
        });
    }, [logOut, navigate])

    return [axiosSecure];
};

export default useAxiosSecure;