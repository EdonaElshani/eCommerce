import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import { Product } from "../../app/models/product";
export interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: { fontWeight: "bold", color: "primary.main" }
          }}
        />
        <CardMedia
          sx={{
            height: 270, backgroundSize: "cover", backgroundColor: '#e0e0e0' }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color="secondary" variant="h5" component="div">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Card</Button>
          <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
        </CardActions>
      </Card>
    </>
  )
}