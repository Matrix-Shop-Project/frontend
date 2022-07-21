import * as React from "react";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
 import { useProductContext } from "../../Context/ProductContext";

import IconButton from "@mui/material/IconButton";
import HoverRating from "./Rating";
import "../../sass/ShoppingCart.scss";
import { useCart } from "react-use-cart";
import { useUser } from "../../Context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../redux/action/products";
//import { getProduct } from "../../redux/action/products";


// import Card from 'react-bootstrap/Card';


export default function ProductCard() {

   const { products } = useProductContext();
  const nav = useNavigate();
// const { token } = useUser();
  // const params = useParams();
  // const id = params._id;

  // useEffect(() => {
    
  //   if (id) {
  //     console.log("Edit id:", id);
  //     getProduct({ id, token });
  //   }
  // }, [id, token]);


  const ImageBase64 = ({ data }) => (
    <>
      {data ? <img style={{ width: 250 }} alt="Bild" src={data} /> : undefined}
    </>
  );
  


  // const [value, setValue] = React.useState(2);
  //const { addItem } = useCart();
// const [handleProduct, sethHandleProduct] = useState();

// useEffect(() =>{

  const handleProduct = (id) => {
    nav(`/product/${id}`);
  };
// }, [nav, sethHandleProduct])
  return (
    <>
        { products.map((product => (
          <Card
            key={product._id}
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
                {product.category}
                <h2 style={{ color: "red" }}>{product.price} €</h2>
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
            <CardActions>
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
            </CardContent>
            <Button variant="contained" color="success" onClick={handleProduct}>
              Add to cart
            </Button></div>
    </div>
          </Card>
        )))}
    </>
  );
}
