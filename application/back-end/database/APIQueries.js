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

export const getArtwork = async (body) => {
    const { data, error } = await api.post('/artworks/', body);
    console.log(data);
    if (error) throw new Error(error.message);
    return data;
};

export const getGame = async (body) => {
    const { data, error } = await api.post('/games/',
    body);
    console.log(data);
    if (error) throw new Error(error.message);
    return data;
};

export const getGenre = async (body) => {
    const { data, error } = await api.post('/genres/', body);
    if (error) throw new Error(error.message);
    return data;
}

export const getSimilarGames = async (body) => {
    const { data, error } = await api.post('/games/', body);
    if (error) throw new Error(error.message);
    return data;
}