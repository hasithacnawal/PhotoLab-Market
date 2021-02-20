import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          {""}
          <button className="primary">
            <Link to="/products">Back to Photos</Link>
          </button>

          <div className="container">
            <div className="product-detail-card">
              {" "}
              <div className="row-center">
                <ul>
                  <li>
                    <div className="row">
                      <img
                        className="large"
                        src={product.image}
                        alt={product.name}
                      ></img>
                    </div>
                  </li>
                </ul>

                {/* Action column */}
                <div className="col-2">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div>${product.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div>Status</div>
                          <div>
                            {product.countInStock > 0 ? (
                              <span className="success"> In Stock </span>
                            ) : (
                              <span className="error">Out of Stock</span>
                            )}
                          </div>
                        </div>
                      </li>
                      <div className="row">
                        <div>Size/Format</div>
                        <div>
                          <select className="select-size">
                            <option>Large (4000 x 2670 pixels)</option>
                            <option>Medium (1000 x 668 pixels)</option>
                            <option>Small (500 x 334 pixels)</option>
                          </select>
                        </div>
                      </div>

                      {product.countInStock > 0 && (
                        <>
                          <li>
                            <div className="row">
                              <div>Qty</div>
                              <div>
                                <select
                                  value={qty}
                                  onChange={(e) => setQty(e.target.value)}
                                >
                                  {[...Array(product.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row-center">
                              <button className="download block" onClick={""}>
                                {" "}
                                Download{" "}
                              </button>
                              <button
                                className="primary block"
                                onClick={addToCartHandler}
                              >
                                {" "}
                                Add to Cart{" "}
                              </button>
                            </div>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {" "}
              <div className="col-1">
                <ul>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />
                  </li>
                  <li>Price : ${product.price}</li>
                  <li>
                    Description : <p>{product.description}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
