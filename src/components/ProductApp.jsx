import { useEffect, useState } from "react";
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { PropTypes } from "prop-types";
import { ProductForm } from "./ProductForm";


export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);                           //? ESTADOS

    const [productSelected, setProductSelected] = useState({
        id: 0,
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
       
        if(product.id > 0){
            setProducts(products.map(prod => {
                if(prod.id == product.id){
                    return {...product}
                }
                return prod;
            })); 

        } else {
            setProducts([...products, { ...product, id: new Date().getTime() }]); // ... = esparcir
        }
    }

    const handlerRemoveProduct = (id) => {
        console.log(id)
        setProducts(products.filter(product => product.id != id));
    }

    const handlerProductSelected = (product) => {
        setProductSelected({...product});   //se crea nueva instancia con los ...
    }

    return (
        <div className="container my-4">
            <h1> {title}</h1>
            <div className="row">
                <div className="col">
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected}/>
                </div>
                <div className="col">
                    {
                        products.length > 0 ? <ProductGrid products={products} handlerProductSelected={handlerProductSelected} handlerRemove={handlerRemoveProduct} />
                        : <div className="alert alert-warning">No hay productos en el sistema!</div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}