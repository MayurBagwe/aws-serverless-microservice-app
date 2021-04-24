import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios';
import products from '../../src/products'

const HomeScreen = () => {
    console.log("Home Screen Function invoked on load");
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log("Home Screen Function invoked on load");
        const fetchProducts = async () => {
            const { data } = await axios.get('https://fiu2hm0bya.execute-api.us-east-1.amazonaws.com/dev/api/products');
            //const { data } = await axios.get('/api/products');
            console.log('All Products ', data);
            setProducts(data);
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}>

                        </Product>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
