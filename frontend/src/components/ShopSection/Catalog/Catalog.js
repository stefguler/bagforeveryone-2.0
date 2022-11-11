import ProductCard from "../ProductCard/ProductCard.js";
import { CatalogGrid, PageHeader } from "./Catalog.styled.js";
import { useState, useEffect } from 'react';



function Catalog(props) {

  const [products, setProducts] = useState()
  const [after, setAfter] = useState([])
  const [page, setPage] = useState(props.page)
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NjQwNjYwLCJpYXQiOjE2NjgwODU0NjAsImp0aSI6IjU4NjNkOWY1MjUxZDRiNzM4NzY0NTc3MTNkZWI3YTk5IiwidXNlcl9pZCI6MX0.9gMDpZdC1yI3Os1QWDpmDOU-KU1XVeo-m-Qz-nuYiBQ";

  useEffect(() => {
   
   
    console.log(page)

    const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    fetch("https://bag-for-everyone.propulsion-learn.ch/backend/api/product/", config)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setProducts(data);
      });
     
  }, [] );

  useEffect(() => {
       if (products) {

        console.log("check products after setProducts: ", products)

        console.log("first", page)
    
        if (page === "donate") {
          let limitProducts = products?.filter(product => {
            return (product.category === "DO")
          })
          setAfter(limitProducts)
          console.log("if statement, page? (should-be: donate) ", page)
        }
        else {
          let sortLimitedProducts = []
          console.log("else statement, page? (should-be: shop) ", page)
          const limitProducts = products?.filter(product => {
            return (product.name === "Shopper Gold" || product.name === "Essential Bag")
          })
          console.log("filtered list before sort: ", limitProducts)
          sortLimitedProducts = limitProducts?.sort((firstItem, secondItem) => 
            firstItem.id - secondItem.id)
    
          console.log("filtered list after sort: ", sortLimitedProducts)
          setAfter(sortLimitedProducts)
        }
          console.log("setProduct: ", products)

       }

  }, [products])
  



  return (
    <>
      <PageHeader>
        <p>
          Welcome to the online shop of{" "}
          <span style={{ fontWeight: "bold" }}>bagforeveryone</span>
        </p>
      </PageHeader>
        <CatalogGrid>
          {after.map((product, idx) => {
            return <ProductCard key={idx} product={product} category={page} />;
          })}
        </CatalogGrid>
    </>
  );
}

export default Catalog;
