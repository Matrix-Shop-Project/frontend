import React from "react";
import { useCart } from "react-use-cart";
import { useProductContext } from "../../Context/ProductContext";
//import ComponentShoppingCart from "../../Components/Products/ComponentShoppingCart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import HoverRating from "./Rating";
import "../../sass/ShoppingCart.scss";
import "../../sass/Products.scss";


const ProductsCart = () => {
  const { addItem } = useCart();

  const { products } = useProductContext();

  return (
    <div className="products-container">
      {products.map((p) => (
        <Card
          key={p.id}
          sx={{ maxWidth: 445, margin: "40px", padding: "20px" }}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="green iguana"
          ></CardMedia>

          <CardContent>
            <Typography
              className="shopping-cart-container__title"
              gutterBottom
              variant="h5"
              component="div"
            >
              {p.productName}
            </Typography>
            <Typography
              variant="body2"
              className="shopping-cart-container__item"
              component="p"
            >
              {/* {Description} */}
              {p.description}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {/* {Category} */}
              {p.category}
              <h2 style={{ color: "red" }}>{p.price} €</h2>
              <hr />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <AddShoppingCartIcon />
            </Button>
            <Button size="small">Wunschzettel</Button>
            <Button size="small" component={RouterLink} to="/:product_id">
              Weiter
            </Button>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
          <CardContent>
            <HoverRating />
          </CardContent>

          <Button size="large" color="success" variant="contained"
            onClick={() => addItem({ ...p, id: p._id })}
         
          >
            Add to cart
          </Button>
        </Card>
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem({...p, id: p._id})}>{p.name} - Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsCart;
