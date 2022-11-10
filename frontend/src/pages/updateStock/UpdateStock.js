import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {
  PageWrapper,
  FormWrapper,
} from './UpdateStock.styles'

const UpdateStockPage = () => {
  
    const [productCategory, setProductCategory] = useState("");
    const [productColour, setProductColour] = useState("");
    const [number, setNumber] = useState("")
  
    const handleChange = (e) => {
      setProductCategory(e.target.value)
      setProductColour(e.target.value)
      setNumber(e.target.value)
    }

  {/* not sure which api i should use for this one? */}


  return (
        <PageWrapper> 
          <Navbar />
          <p>Update your product stock:</p>
          <form>
            <FormWrapper>
              <label>*Product category</label>
                <select value={productCategory} onChange={handleChange}>
                <option value="Shopper">Shopper</option>
                <option value="Essentials Bag">Essentials Bag</option>
              </select>
              <label>*Colour</label>
              <select value={productColour} onChange={handleChange}>
                <option value="Grey">Grey</option>
                <option value="Red">Red</option>
                <option value="Blue">ShoBluepper</option>
                <option value="Brown">Brown</option>
                <option value="Gold">Gold</option>
                <option value="Green">Green</option>
              </select>
              <label>*Number</label>
              <input
                  type="text" 
                  value={number}
                  onChange={handleChange}>
              </input>
              <button type={"submit"}>Update</button>
            </FormWrapper>
          </form>
          <Footer />
        </PageWrapper>
  )
}

export default UpdateStockPage