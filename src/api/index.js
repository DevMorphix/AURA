
import axios from 'axios';
import { useRoute } from 'vue-router';

let token;

export const getBasicData = () => {
    return {
        data: {
            id: '123',
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane@company.com',
            dob: '1990-01-01',

            cycleLength: 31,                    // Length of menstrual cycle in days
            periodLength: 8,                    // Length of period in days (bleeding days)
            lastMenstrualPeriod: '2024-04-02',  // Start date of last period
            frequency: 'regular',               // 'regular' | 'irregular'

            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        }
    }
};



export const userRegister = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/register`, user);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
};



export const userLogin = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/login`, user);
        console.log(res);
        token = res.data.Token
        return res;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};




export const userVerify = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/verify`, user);
        console.log(res.data)
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
};
export const resendotp = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/otpresend`, user);
        console.log(res)
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
};

export const userdetail = async (user) => {
    try {
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('aura-token='));
        if (!tokenCookie) {
            throw new Error('No token found in cookie');
        }
        const token = tokenCookie.split('=')[1];

        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/userdetail`, user, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(res.headers);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const forgotPassword = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/forgotPassword`, user);
        console.log(res)
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
};



export const resetpassword = async (user) => {
    try {
        // // Assuming the URL is stored in a variable named url
        const url = window.location.href;

        // // Define a regex pattern to match the token parameter in the URL
        const tokenPattern = /token=([^&]+)/;

        // // Use the regex pattern to extract the token from the URL
        const match = url.match(tokenPattern);

        // // Check if a match is found and extract the token value
        const token = match ? match[1] : null;


    if(token){
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/reset-password/${token}`, user);
        console.log(res)
        return res;
    }
    else{
        window.location.href = '/404';  
    }

    } catch (error) {
        console.log(error);
        return error;
    }
};
