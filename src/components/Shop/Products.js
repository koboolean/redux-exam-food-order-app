import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {id : 'p1', price : 6, title: 'MyFirst Book', description :"The first book I ever wrote"},
    {id : 'p2', price : 4, title: 'MySecond Book', description :"The second book I ever wrote"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(product =>
              <ProductItem
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  description={product.description}
              />
          )}
      </ul>
    </section>
  );
};

export default Products;
