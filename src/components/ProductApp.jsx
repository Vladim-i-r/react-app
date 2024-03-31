import { useEffect, useState } from "react";
import { findAll, create, remove, update } from "../services/ProductService";
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

    const getProducts = async ()=> {

        const result = await findAll();
        //console.log(result);
        setProducts(result.data._embedded.products);
    }

    useEffect(() => {                                                       //? EFECTOS
        getProducts();                                                      // Se crea otra funcion porque es asincrona y no es compatible con useEffect, por eso solo se manda llamar          
        // const result = listProduct();    
        //setProducts(result);  //simulando que vienen del backend
    }, []) // corchete vacia indica que solo se crea en el inicio y no cuando actualiza o renderiza la pagina

        
    const handlerAddProduct = async (product) => {                          //? HANDLERS, si pueden ser async pero no los use**
            // console.log(product);
            
            if (product.id > 0) {
                const response = await update(product);
                // console.log(response);
                setProducts(products.map(prod => {
                    if (prod.id == response.data.id) {
                        return { ...response.data}
                    }
                    return prod;
                }));
            } else {
                const response = await create(product);
                setProducts([...products, { ...response.data }]);           // ... = esparcir  como ya viene id de la base lo quitamos id: new Date().getTime()
            }
        }

    
    const handlerRemoveProduct = (id) => {
        // console.log(id);
        remove(id);
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