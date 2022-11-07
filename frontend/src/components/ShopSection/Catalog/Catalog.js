import ProductCard from "../ProductCard/ProductCard.js";
import { CatalogGrid, PageHeader } from "./Catalog.styled.js";


function Catalog() {
  const backbag = {
    id: 1,
    img: "../assets/images/product/product_olive_backbag.jpg",
    title: "Shopper Bag",
    price: 100,
  };

  const essential_bag = {
    id: 2,
    img: "../assets/images/product/product_pouch.jpg",
    title: "Essentials Bag",
    price: 27.0,
  };

  const products = [backbag, essential_bag];

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
