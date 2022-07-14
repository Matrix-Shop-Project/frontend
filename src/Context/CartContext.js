import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext, createContext } from "react";
import HoverRating from "../Components/Products/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link as RouterLink } from "react-router-dom";
//import { ProductContext } from "./ProductContext";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  //const [product, setProduct] = useState("");

  <Card sx={{ maxWidth: 445, margin: "40px", padding: "20px" }}>
    <CardMedia
      component="img"
      height="140"
      image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography
        className="shopping-cart-container__title"
        gutterBottom
        variant="h5"
        component="div"
      >
        {/* {Title} */}
        {/* {product.name} */}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {/* {Category} */}
        {/* {product.category} */}
        <h2 style={{ color: "red" }}>200 €</h2>
        <hr />
      </Typography>
      <Typography
        variant="body2"
        className="shopping-cart-container__item"
        component="p"
      >
        {/* {Description} */}
        {/* {product.name} */}
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
  </Card>;
  return (
    <CardContext.Provider
      value={
        {
          // name,
          // description,
          // price,
          // category,
          // photo,
        }
      }
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  return useContext(CardContext);
};
