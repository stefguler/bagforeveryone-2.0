import ProductCard from "../ProductCard/ProductCard.js";
import { CatalogGrid, PageHeader } from "./Catalog.styled.js";
import { useState } from 'react';


function Catalog(props) {

  const [products, setProducts] = useState(props.products)

  return (
    <>
      <PageHeader>
        <p>
          Welcome to the online shop of{" "}
          <span style={{ fontWeight: "bold" }}>bagforeveryone</span>
        </p>
      </PageHeader>
        <CatalogGrid>
          {products.map((product, idx) => {
            return <ProductCard key={idx} product={product} />;
          })}
        </CatalogGrid>
    </>
  );
}

export default Catalog;
