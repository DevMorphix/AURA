
import axios from 'axios';



export const getBasicData = () => {
    return {
        data: {
            id: '123',
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane@company.com',
            dob: '1990-01-01',
    
            cycleLength: 21,                    // Length of menstrual cycle in days
            periodLength: 9,                    // Length of period in days (bleeding days)
            lastMenstrualPeriod: '2024-02-13',  // Start date of last period
            frequency: 'regular',               // 'regular' | 'irregular'
            
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        }
    }
};


export const userRegister = async (user) => {

    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/register`  , user);
        return res.data;
    } catch (error) {
        console.log(error);
    }

};

export const userLogin = async (user) => {

    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_AURA_API_URL}/users/login`, user);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
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
