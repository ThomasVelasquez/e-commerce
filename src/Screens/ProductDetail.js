import React, { useContext } from 'react'
import DefaultWrapper from '../Wrappers/DefaultWrapper';
import ProductsContext from '../Contexts/ProductsContext'
import { useParams } from 'react-router-dom';
import { matchParams } from '../Utils/utils';
import { Col, Image, Row } from 'react-bootstrap';

const ProductDetail = () => {

  const productsContext = useContext(ProductsContext);
  const { id } = useParams();
  
  const productDetail = matchParams(productsContext.products, parseInt(id));
  
  const {name, title, price, image} = productDetail
  
  return (
   <DefaultWrapper>
      <h1 className='text-nav'>{name}</h1>
      <Row className='spaces' >
        <Col md={6} >
          <Image src={image} className='detail' />
        </Col>
        
        <Col >
          <p className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non augue nunc. Maecenas nec tortor sed nunc hendrerit bibendum nec quis purus. Curabitur ac sem porta nisi euismod ultricies id non ipsum. Pellentesque ut ultricies sem. Sed lorem dui, convallis et tincidunt ac, mollis a nisi. Suspendisse rutrum fermentum nibh, sed malesuada magna condimentum vitae. Praesent metus massa, euismod nec fermentum vitae, ornare vel quam. Nam vulputate arcu et volutpat accumsan. Mauris tincidunt magna et dui pellentesque euismod.
          </p>

          <div className='d-flex gap-3'>

          <select className='form_field'>
            <option value='' >...</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='Xlarge'>Xlarge</option>
          </select>

          <input type='number' min={1} placeholder='Quantity' className='form_field' />
          </div>

          <button type='submit' className='submit mt-4'>
            Add To Cart
          </button>

        </Col>  
      </Row>   
   </DefaultWrapper>
  );
}

export default ProductDetail;