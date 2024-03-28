import { useEffect, useState } from "react";
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { PropTypes } from "prop-types";
import { ProductForm } from "./ProductForm";


export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        name: '',
        description: '',
        price: ''
    })

    useEffect(() => {
        const result = listProduct();
        setProducts(result);  //simulando que vienen del backend
    }, []) // corchete vacia indica que solo se crea en el inicio y no cuando actualiza o renderiza la pagina

    const handlerAddProduct = (product) => {
        console.log(product);
        setProducts([...products, { ...product }]); // ... = esparcir
    }

    const handlerRemoveProduct = (name) => {
        console.log(name)
        setProducts(products.filter(product => product.name != name));
    }

    

    return (
        <div>
            <h1> {title}</h1>
            <div>
                <div>
                    <ProductForm handlerAdd={handlerAddProduct} />
                </div>
                <div>
                    <ProductGrid products={products} handlerRemove={handlerRemoveProduct} />
                </div>
            </div>
        </div>
    )
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}