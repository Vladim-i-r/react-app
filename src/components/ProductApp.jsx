import { useEffect, useState } from "react";
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { PropTypes } from "prop-types";
import { ProductForm } from "./ProductForm";


export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);                           //? ESTADOS

    const [productSelected, setProductSelected] = useState({
        name: '',
        description: '',
        price: ''
    })

    useEffect(() => {                                                        //? EFECTOS
        const result = listProduct();
        setProducts(result);  //simulando que vienen del backend
    }, []) // corchete vacia indica que solo se crea en el inicio y no cuando actualiza o renderiza la pagina

    const handlerAddProduct = (product) => {                                 //? HANDLERS
        console.log(product);
        setProducts([...products, { ...product }]); // ... = esparcir
    }

    const handlerRemoveProduct = (name) => {
        console.log(name)
        setProducts(products.filter(product => product.name != name));
    }

    const handlerProductSelected = (product) => {
        setProductSelected({...product});   //se crea nueva instancia con los ...
    }

    return (
        <div>
            <h1> {title}</h1>
            <div>
                <div>
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected}/>
                </div>
                <div>
                    <ProductGrid products={products} handlerProductSelected={handlerProductSelected} handlerRemove={handlerRemoveProduct} />
                </div>
            </div>
        </div>
    )
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}