import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductDetail } from "../../types/product";
import { addtoCart } from "../../redux/reducers/cartReducer";
import { useAppDispatch } from "../../hooks/reduxHook";
import { useNavigate } from "react-router";

const ProductBox = ({ info }: ProductDetail) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 345, height: 350, marginBottom: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.images[0]}
          title="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ height: 32, whiteSpace: "nowrap", overflow: "hidden" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {info.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            ${info.price}
          </Typography>
          <Typography
            sx={{ height: 60, overflow: "hidden" }}
            variant="body2"
            color="text.secondary"
          >
            {info.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => {
              dispatch(addtoCart(info));
            }}
          >
            Add to Cart
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={() =>
              navigate("/ViewProduct/" + info.id, {
                state: info,
              })
            }
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductBox;
