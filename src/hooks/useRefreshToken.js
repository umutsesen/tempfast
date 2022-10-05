import React from 'react';
import { loginInstance } from '../axios';
import useAuth from './useAuth'

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const response = await loginInstance.get('/auth/refreshToken', {
                withCredentials: true
            })
            console.log(response)
            await setAuth(prev => {
                console.log(prev)
                console.log(response.data);
                return {...prev, accessToken: response.data.token}
            })
            return response.data.token

        } catch (err) {
            return err.response.status

        }
       
    }
    return refresh;
  
}


export default useRefreshToken;