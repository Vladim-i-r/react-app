import axios from "axios";

const initProducts = [
    {
        id: 1,
        name: 'Monitor Samsung 65',
        price: 500,
        description: 'El monitor es excelente!'
    },
    {
        id: 2,
        name: 'Iphone 15',
        price: 800,
        description: 'El telefono es bueno!'
    }
];

const baseUrl = 'http://localhost:8080/products';

export const listProduct = () => {
    return initProducts;
}
export const findAll = async () => {

    try {
        const response = await axios.get(baseUrl); // con el await ya no es promise (promesa) y se agrega el async
        return response;
        
    } catch (error) {
        console.log(error);   
    }
    return null;
}

export const create = async ({name, description, price}) => {

    try {
        const response = await axios.post(baseUrl, {
            name,
            description,           // cuando se llamen igual, se puede poner nada mas name, description, price
            price
        });
        return response;
    } catch (error) {
        console.log(error);
    } 
    return undefined;
}

export const update = async ({id, name, description, price}) => {

    try {
        const response = await axios.put(`${baseUrl}/${id}`, {   // se agrega el id en el put y comillas invertidas para permitir concatenar variable en el string, o puede ser normal , + '/' + id,
            name,
            description,           // cuando se llamen igual, se puede poner nada mas name, description, price
            price
        })
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
}