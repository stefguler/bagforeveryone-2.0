import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {
  PageWrapper,
  FormWrapper,
} from './UpdateStock.styles'

const UpdateStockPage = () => {

  return (
        <PageWrapper> 
          <Navbar />
          <p>Update your product stock:</p>
          <form>
            <FormWrapper>
              <label>Category</label>
              <input></input>
              <label>Color</label>
              <input></input>
              <label>Number</label>
              <input></input>
              <button type={"submit"}></button>
            </FormWrapper>
          </form>
          <Footer />
        </PageWrapper>
  )
}

export default UpdateStockPage