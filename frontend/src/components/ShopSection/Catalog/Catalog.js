import ProductCard from "../ProductCard/ProductCard.js";
import { CatalogGrid, PageHeader, StickyCart } from "./Catalog.styled.js";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";

function Catalog() {
  const backbag = {
    img: "../assets/images/product/product_olive_backbag.jpg",
    title: "Shopper Bag",
    price: 100,
  };

  const essential_bag = {
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
        <StickyCart>
          <IconContext.Provider value={{ size: "100px" }}>
            <HiOutlineShoppingBag />
          </IconContext.Provider>
          <div>5</div>
        </StickyCart>
    </>
  );
}

export default Catalog;
