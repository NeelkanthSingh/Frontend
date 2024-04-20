import { useSetRecoilState } from 'recoil';
import { authAtom } from '../store/atoms/authAtom';
import axios from '../api/axios';

const useRefreshToken = () => {
    const setAuth = useSetRecoilState(authAtom);

    const refresh = async () => {
        const response = await axios.get('auth/refresh/', {
            withCredentials: true
        });

        setAuth({ accessToken: response.data.accessToken });
        return response.data.accessToken;
    }

    return refresh;
};

export default useRefreshToken;