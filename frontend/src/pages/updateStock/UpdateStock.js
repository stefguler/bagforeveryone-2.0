import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {
  PageWrapper,
  Form
} from './UpdateStock.styles'

const UpdateStockPage = () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDY4NTc5LCJpYXQiOjE2Njc5MTMzNzksImp0aSI6ImI0MzVmZTJmMmE4NTQyYWE4NDYwY2YyOTRjZjk3YTJjIiwidXNlcl9pZCI6MX0.ppZOLHl3QOhKULkLS-4LfG7jgDKHHjSkCVMc_l_AxiM";
  const [product, setProduct] = useState('');
  const [updatedStock, setUpdatedStock] = useState('')

  const handleStockChange = (e) => {
    setUpdatedStock(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const config = {
      method: "GET",
      headers: new Headers ({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      })
    };
  fetch("https://bag-for-everyone.propulsion-learn.ch/backend/api/product/", config).then(response => {
    return response.json();
    
  }).then(data => {
    setProduct(data)});
}, []);



  return (
        <PageWrapper> 
          <Navbar />
          <p>Update your product stock:</p>
          <Form onSubmit={handleSubmit}>
              <input placeholder="No of items" onChange={handleStockChange}></input>
          </Form>
          <Footer />
        </PageWrapper>
  )
}

export default UpdateStockPage