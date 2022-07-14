import * as React from "react";
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

export default function MediaCard() {
  // const [value, setValue] = React.useState(2);
  const { addItem } = useCart();

  const { products } = useProductContext();

  return (
    <div className="shopping-cart-container">
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
              <Typography
                className="shopping-cart-container__title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {/* {Title} */}
                {p.productName}
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
              <Typography
                variant="body2"
                className="shopping-cart-container__item"
                component="p"
              >
                {/* {Description} */}
                {p.description}
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
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
            <button
              style={{
                width: "150px",
                padding: "15px",
                color: "white",
                fontSize: "18px",
                fontWeight: 400,
                border: 0,
                borderRadius: "5px",
                backgroundColor: "#43A047",
              }}
              onClick={() => addItem({ ...p, id: p._id })}
            >
              Add to cart
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
