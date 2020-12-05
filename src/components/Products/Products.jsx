import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes",
    price: "$5",
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: "macbook",
    description: "Apple macbook",
    price: "$10",
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
