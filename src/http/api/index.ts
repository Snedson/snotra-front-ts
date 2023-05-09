import axios, { AxiosResponse } from 'axios';
import AuthService from '@/services/AuthService';

const $api = axios.create({
    withCredentials: true,
});

export const authURL = 'https://auth.snotra.site';

$api.interceptors.request.use(
    async (config) => {
        const baseURL = getBaseUrl();
        const role = getRole();
        if (!baseURL || !role) {
            AuthService.logout();
            return config;
        }
        config.baseURL = baseURL;
        return config;
    },
    (error) => Promise.reject(error)
);

$api.interceptors.response.use(
    (response) => {
        return response;
    },
    () => {
        AuthService.logout();
    }
);

function getBaseUrl(): string | null {
    return localStorage.getItem('schoolSnotraDomain');
}

function getRole(): string | null {
    return localStorage.getItem('role');
}

export default $api;
