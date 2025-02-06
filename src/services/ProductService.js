import axios from "axios";

const baseUrl= 'http://localhost:2023/products'

const initProducts =  [
    {
        id: 1,
        name: 'Samsung',
        price: 125,
        description: 'led tv monitor 23'
    },
    {
        id: 2,
        name: 'LG',
        price: 115,
        description: 'led tv monitor 22'
    }
];

export const listProducts = () => {
    return initProducts;
}

export const findAll = async() => {

    try {
        return await axios.get(baseUrl);

    } catch (error) {
        console.log(error)
    }
    return null;
}

export const create = async({name, description, price}) => {

    try {
        return await axios.post(baseUrl, {name, description, price});

    } catch (error) {
        console.log(error)
    }
    return null;
}

export const update = async({id, name, description, price}) => {

    try {
        return await axios.put(`${baseUrl}/${id}`, {name, description, price});

    } catch (error) {
        console.log(error)
    }
    return null;
}

export const remove = async(id) => {

    try {
        await axios.delete(`${baseUrl}/${id}`);

    } catch (error) {
        console.log(error)
    }
    return null;
}