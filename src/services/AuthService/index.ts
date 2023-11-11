import { AxiosResponse } from 'axios';
import { AuthRefreshResponse } from '@/http/DTOs';
import $api, { authURL } from '@/http/api';

export default class AuthService {
    static async refresh(): Promise<AxiosResponse<AuthRefreshResponse>> {
        return $api.post('/auth-api/Refresh/SilentRefreshWeb');
    }
    static logout() {
        localStorage.removeItem('role');
        localStorage.removeItem('schoolSnotraDomain');
        window.location.replace(authURL);
    }
}
