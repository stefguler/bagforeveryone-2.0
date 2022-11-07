import Footer from "../../components/footer/Footer.js";
import Navbar from "../../components/navbar/Navbar.js";
import ProductPageSidebar from "../../components/ShopSection/ProductPageSidebar/index.js";
import { PageWrapper } from "./Product.styled";

export default function Product() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ProductPageSidebar />
        <Footer />
      </PageWrapper>
    </>
  );
}
