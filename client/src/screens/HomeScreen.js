import React, { useState, useEffect  } from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Products/Product'
const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts= async () =>{
            const {data} = await axios.get('http://localhost:5000/api/products')
            // to get this to work add a proxy which is added in client/package.json under name

            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Proucts</h1>
            <Row>
                {products.map(product =>(
                    <Col key ={product._id} sm={12} md ={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
