import AuthService from '@/services/AuthService';
import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL: undefined,
});

export const authURL = 'https://auth.snotra.site';

$api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 401) {
            try {
                await axios
                    .post(`${authURL}/auth-api/Refresh/SilentRefreshWeb`)
                    .then((response) => {
                        const originalRequest = error.config;
                        return $api(originalRequest);
                    })
                    .catch((reason) => {
                        AuthService.logout();
                    });
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        if (error.response.status === 404) {
            AuthService.logout();
        }
        return Promise.reject(error);
    }
);

export function getBaseUrl(): string | undefined {
    const snotraDomain = localStorage.getItem('schoolSnotraDomain');

    if (!snotraDomain) {
        return undefined;
    }

    return `https://${snotraDomain}/`;
}

export function updateBaseUrl() {
    $api.defaults.baseURL = getBaseUrl();
}

export function getRole(): string | null {
    return localStorage.getItem('role');
}

export default $api;
