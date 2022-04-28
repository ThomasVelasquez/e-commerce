import  { useContext } from 'react';
import { Row } from 'react-bootstrap';
import ProductContext from '../../Contexts/ProductsContext';
import ProductItem from './ProductItem';

const ProductList = () => {

    const productsContext = useContext(ProductContext);
    
    return (
        <div className='spaces'>
            <Row>
                {productsContext.products.map((item, index) => {
                    return <ProductItem
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                    />
                })}
            </Row>
        </div>
    );
}

export default ProductList;