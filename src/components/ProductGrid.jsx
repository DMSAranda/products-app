import { PropTypes } from "prop-types"
import { ProductDetail } from "./ProductDetail"
import Table from 'react-bootstrap/Table'

export const ProductGrid = ({products = [], handlerRemove, handlerProductSelected}) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>price</th>
                    <th>description</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return (
                        <ProductDetail product={product} key={product.id} handlerRemove={handlerRemove} handlerProductSelected= {handlerProductSelected} />
                    )
                })}
            </tbody>
        </Table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}