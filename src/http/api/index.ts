import AuthService from '@/services/AuthService';
import axios from 'axios';
// ATTENTION: DO NOT REMOVE THIS LINE!
axios.defaults.withCredentials = true;
// It took me three hours to figure out that
// setting "withCredentials" to true by default (option A)
// and setting it in axios fetch arguments (option B) (like axios.post('www.example.com', {withCredentials: true}))
// DOES NOT GIVE SAME RESULT!
//
// If you wanna fetch subdomain-b.example.com from subdomain-a.example.com with cookies
// You should use option B. Option A won't send cookies.
//
// For more details:
// https://stackoverflow.com/questions/46458011/set-cookie-from-subdomain-a-for-subdomain-b
// https://stackoverflow.com/questions/40941118/axios-wont-send-cookie-ajax-xhrfields-does-just-fine

const $api = axios.create({
    withCredentials: true,
    baseURL: getBaseUrl(),
});

export const authURL = 'https://auth.snotra.site';

$api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

$api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
            try {
                await axios
                    .post(`${authURL}/auth-api/Refresh/SilentRefreshWeb`)
                    .then((response) => {
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
        return $api(originalRequest);
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
