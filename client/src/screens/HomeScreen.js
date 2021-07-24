import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Products/Product";
import { listProducts } from "../actions/productActions";
import Mesage from "../components/Mesage";
import Loader from "../components/Loader";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  // const products = []
  // here to check the products loading before implementing the useSelector

  return (
    <>
      <h1>Latest Proucts</h1>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : error ? (
        <Mesage variant="danger">{error}</Mesage>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
