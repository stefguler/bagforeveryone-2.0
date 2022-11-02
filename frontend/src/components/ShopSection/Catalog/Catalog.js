import ProductCard from "../ProductCard";
import {CatalogGrid} from "./Catalog.styled.js"

function Catalog() {

  const backbag = {
    id: 1,
    img: "./assets/images/product/product_olive_backbag.jpg",
    title: "Shopper Bag",
    description: "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
    colors: ["red", "sand grey", "olive", "gold", "blue", "brown"],
    material: "Polyester (wildleather-look, vegane leather)",
    dimensions: "35cm x 34cm (lxb)",
    stock: "16",
    category: "Shopper",
    price: 100,
    share_link: "bagforeveryone.com/shop/essentialbag"
  };

  const essential_bag = {
    id: 2,
    img: "./assets/images/product/product_essentialbag.jpg",
    title: "Essentials Bag",
    description: "The perfect piece to store your glasses or mobile phone in, use as a pencil case,  or for keeping your keys, money, and essentials safe! Made with the leftovers of the vegan materials of our shopper bags, the essential bags show that no inch of material is wasted in the bagforeveryone workshop",
    colors: ["random"],
    material: "Polyester (wildleather-look, vegane leahter)",
    dimensions: "17cm x 9.5cm (lxb)",
    stock: "12",
    category: "Pouch",
    price: 27.00,
    share_link: "bagforeveryone.com/shop/essentialbag",
  };

  const products = [backbag, essential_bag]


  return <>
          <CatalogGrid>
            {
                products.map((product, idx) => {
                    return <ProductCard key={idx} product={product}/>
                })
            }
        </CatalogGrid></>;
}

export default Catalog;
