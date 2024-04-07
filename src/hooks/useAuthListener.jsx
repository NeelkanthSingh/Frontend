import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import axios from 'axios';

import { authAtom } from '../store/atoms/auth';

export const useAuthListener = () => {
  const setAuth = useSetRecoilState(authAtom);

  const verifyToken = async () => {
    try {
      const jwtToken = Cookies.get('jwtToken');
      const response = await axios.get('http://localhost:3000/verify/token', {
        headers: { Authorization: `Bearer ${jwtToken}` }
      });
      console.log(response);
      if (response.data) {
        setAuth({ isAuthenticated: response.data.isAuthenticated, username: response.data.username, email: response.data.username });   
      }
    } catch (error) {
      console.error('Error verifying authentication token:', error);
      setAuth({ isAuthenticated: false, username: null, email: null });
    }
  };

  const updateToken = (newToken) => {
    Cookies.set('jwtToken', newToken);
    // Dispatch a custom event indicating the token has been updated
    window.dispatchEvent(new CustomEvent('jwtTokenUpdated'));
  };

  const logout = () => {
    Cookies.remove('jwtToken')
    window.dispatchEvent(new CustomEvent('jwtTokenRemoved'));
  }

  useEffect(() => {
    verifyToken();

    // Define a handler to re-verify when the token is updated
    const handleTokenUpdate = () => verifyToken(); 
    const handleTokenRemoved = () => verifyToken();

    // Start listening aynchronously 
    window.addEventListener('jwtTokenUpdated', handleTokenUpdate); 
    window.addEventListener('JwtTokenRemoved', handleTokenRemoved);

    // This runs at the end kinda like cleanup.
    return () => {
        window.removeEventListener('jwtTokenUpdated', handleTokenUpdate);
        window.removeEventListener('JwtTokenRemoved', handleTokenRemoved);
    };
  }, []);
};
