import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productsActions'


const HomeScreen = () => {
    console.log("Home Screen Function invoked on load");
    const dispatch = useDispatch()
    let productsArray = [];
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const returnedArray = Array.from(products)
    //console.log("Products Loaded " + productList.products[0]);
    productsArray = returnedArray;
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) :
                (<Row>
                    {productsArray.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}>

                            </Product>
                        </Col>
                    ))}
                </Row>)}
        </>
    )
}

export default HomeScreen
