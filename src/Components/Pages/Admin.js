import Products from "../Products/Admin/AdminProducts";
import "../../sass/AdminProducts.scss";
import { useUser } from "../../Context/UserContext";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function UserAdmin() {
  const { user, token } = useUser();

  console.log(user);
  return token ? (
    user.role === 1 ? (
      <>
        <div className="products d-flex flex-column mb-3 " style={{ margin: "150px" }}>
          <h1 className="text-danger">Admin</h1>
          <h2> {user.name} ist an Bord</h2>
        </div>
        <Products />
      </>
    ) : (
      <div>
        <h1>Hallo {JSON.stringify(user.email)} hier ist Only Admin's</h1>
      </div>
    )
  ) : (
    <div><h1>Du bist nicht angemeldet!</h1>
    <h2>Bitte anmelden!</h2>
    <Button
    size="large"
    color="success"
    variant="contained"
    component={RouterLink}
    to="/login"
    >Enlogen
    </Button>
    </div>
  );
}
