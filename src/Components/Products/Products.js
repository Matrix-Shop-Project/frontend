import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useProductContext } from "../../Context/ProductContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../../sass/Products.scss";

const Products = () => {
  const { addItem } = useCart();

  const { products } = useProductContext();

  return (
    <>
      <div className="products-container">
        <div>
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
                <Typography>{p.productName}</Typography>
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

              <button onClick={() => addItem({ ...p, id: p._id })}>
                {p.name} - Add to cart
              </button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
