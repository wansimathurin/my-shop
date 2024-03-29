import data from '../utils/data'
import NextLink from 'next/link';
import Layout from '../components/Layout'
import { Grid ,Card,CardActionArea, Typography} from '@material-ui/core'
import { CardMedia,CardContent,CardActions,Button } from '@material-ui/core'

export default function Home() {
  return (
      <Layout>
        <div>
            <h1>Product</h1>
            <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </div>
      </Layout>
     
  )
}
