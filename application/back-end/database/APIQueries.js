import api from "../config/api.js";

export const getGames = async (body) => {
    const { data, error } = await api.post('/games/',
    body);
    console.log(data);
    if (error) throw new Error(error.message);
    return data;
};

export const getCover = async (body) => {
    const { data, error } = await api.post('/covers/',
    body);
    console.log(data);
    if (error) throw new Error(error.message);
    return data;
};
