import * as React from "react";

// import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useProductContext } from "../../Context/ProductContext";

import IconButton from "@mui/material/IconButton";
import HoverRating from "./Rating";
import "../../sass/ShoppingCart.scss";


import { useNavigate } from "react-router-dom";



export default function ProductCard() {

  const { products } = useProductContext();
  const nav = useNavigate();

  const handleProduct = (productId) => {
    nav(`/product/${productId}`)
    console.log("Handel:", productId)
  }

  const ImageBase64 = ({ data }) => (
    <>

      {data ? <img alt="Bild" src={data} /> : undefined}

    </>
  );
  return (
    <>
      {products.map(((product, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 445, margin: "40px", padding: "20px" }}
        >
          <div className="shopping-cart-container">
            <div className="column-1">
              <ImageBase64 data={product.photo} alt="Bild" />
              <CardContent>
                <Typography
                  className="shopping-cart-container__title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {/* {Title} */}
                  {product.productName}
                </Typography>
                <Typography
                  className="shopping-cart-container__cat"
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {/* {Category} */}

                  <h4>{product.category}</h4>
                  <h4>Price - {(product.price.toFixed(2))} €</h4>
                  <h5 style={{ color: "red" }}><h4>10% Rabat neu eröfnung</h4>Statt: <h5 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{(((product.price)*10/100)+(product.price)).toFixed(2)} €</h5></h5>
                  
                  <hr />
                </Typography>
                <Typography
                  variant="body2"
                  className="shopping-cart-container__item"
                  component="p"
                >
                  {/* {Description} */}
                  {product.description}
                </Typography>
              </CardContent>

              {/* <CardActions>

                <Button size="small">
                  <AddShoppingCartIcon />
                </Button>
                <Button size="small">Wunschzettel</Button>
                <Button size="small" component={RouterLink} to="/products">
                  Weiter
                </Button>
                <IconButton aria-label="add to favorites"></IconButton>
              </CardActions>
              <CardContent>
                <HoverRating />

              </CardContent> */}
              <Button variant="contained" color="success" onClick={()=>{handleProduct(product._id)}}>
                Add to cart
              </Button>

              </div>
          </div>
        </Card>
      )))}
    </>
  );
}
