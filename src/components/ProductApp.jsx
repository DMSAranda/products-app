import { useEffect, useState } from "react"
//import { listProducts } from "../services/ProductService";
import { create, findAll, remove, update } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { PropTypes } from "prop-types";
import { ProductForm } from "./ProductForm";

export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    })

    const getProducts = async () => {
        const result = await findAll();
        setProducts(result.data._embedded.products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handlerAddProduct = async (product) => {
        console.log(product)

        if (product.id > 0) {
            const result = await update(product);
            setProducts(products.map(p => {
                if (p.id == result.data.id) {
                    return { ...result.data }
                } else {
                    return p;
                }
            }))
        } else {
            create(product);
            setProducts([...products, { ...product, id: new Date().getTime() }])
        }

    }

    const handlerRemoveProduct = (id) => {
        console.log(id);
        remove(id);
        setProducts(products.filter(p => p.id != id))
    }

    const handlerProductSelected = (product) => {
        setProductSelected({ ...product })
    }

    return (
        <div className="card">
            <div className="container">
                <h1>{title}</h1>
                <div>
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                </div>
                <div>
                    {
                        products.length == 0
                            ? <div className="alert alert-warning">
                                No products in system
                            </div>
                            : <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerProductSelected={handlerProductSelected} />
                    }

                </div>
            </div>
        </div>
    )
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}