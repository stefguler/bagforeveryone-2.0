import '../../App.css';
import "./createRestaurant.styles.css"
import { useState, useEffect } from "react"
// Image import
import line from "../../assets/line.png"
// Styled Component imports
import {
    BodyForm,
    InputGridDiv,
    InputItemDiv,
    InputItemInputField,
    InputItemImageUpload,
    InputItemTitle,
    SubmitButtonButton,
    SubmitButtonDiv,
    TitleDiv,
    InputItemSelectField
} from './createRestaurant.styledcomponent.js';
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";

function CreateRestaurant() {

// Logic

    // creating local states to control the input fields
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [country, setCountry] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    const [website, setWebsite] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [openingHours, setOpeningHours] = useState("")
    const [priceLevel, setPriceLevel] = useState("")
    const [imageFile, setImageFile] = useState("")

    // handle inputs
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const handleStreetChange = (e) => {
        setStreet(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleZipChange = (e) => {
        setZip(e.target.value)
    }
    const handleWebsiteChange = (e) => {
        setWebsite(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleOpeningHoursChange = (e) => {
        setOpeningHours(e.target.value)
    }
    const handlePriceLevelChange = (e) => {
        setPriceLevel(e.target.value)
        console.log(priceLevel)
    }

    const handleImageFileChange = (e) => {
        setImageFile(e.target.files[0])

    }

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited")
        console.log("the image submitted is "+imageFile)
        const url = "https://team-2-luna-project.propulsion-learn.ch/backend/api/restaurants/new/"
        const fd= new FormData()
        fd.append("name",name)
        fd.append("category",category)
        fd.append("country",country)
        fd.append("city",city)
        fd.append("street",street)
        fd.append("opening_hours",priceLevel)
        fd.append("price_level",priceLevel)
        fd.append("image",imageFile)
        console.log(fd)


        const config = {
            method: "POST",
            headers: new Headers({
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("auth")).lunaToken}`

            }),
            body: fd
        }

        fetch(url, config)
        .then((response) => {
            if (response.status === 200) {
                console.log(response)
            }
            else {
                console.log(response.json())
            }
        }).then(
            setTimeout(()=>navigate("/search"),1000)
        )
    }
    const navigate=useNavigate()
  return (
      <div>
          <Navbar></Navbar>
    <BodyForm onSubmit={handleSubmit}>
        <TitleDiv>
            <h3>CREATE NEW RESTAURANT</h3>
            <img src={ line } width={"200px"}/>                    
        </TitleDiv>
        <InputGridDiv>
            <InputItemDiv>
                <InputItemTitle>Name</InputItemTitle>
                <InputItemInputField value={name} onChange={handleNameChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Category *</InputItemTitle>
                <InputItemSelectField value={category} onChange={handleCategoryChange}>
                    <option value="">Select a value...</option>
                    <option value="FI">Fine Dining</option>
                    <option value="CA">Casual Dining</option>
                    <option value="FA">Fast Food</option>
                    <option value="FM">Family Style</option>
                    <option value="FO">Food Truck</option>
                    <option value="CA">Café</option>
                    <option value="PU">Pub</option>
                    <option value="BU">Buffet</option>
                    <option value="DI">Diner</option>
                    <option value="BB">Barbecue</option>
                    <option value="TA">Take Away</option>
                </InputItemSelectField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Country</InputItemTitle>
                <InputItemInputField value={country} onChange={handleCountryChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Street</InputItemTitle>
                <InputItemInputField value={street} onChange={handleStreetChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>City</InputItemTitle>
                <InputItemInputField value={city} onChange={handleCityChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Zip</InputItemTitle>
                <InputItemInputField value={zip} onChange={handleZipChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Website</InputItemTitle>
                <InputItemInputField value={website} onChange={handleWebsiteChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Phone</InputItemTitle>
                <InputItemInputField value={phone} onChange={handlePhoneChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Email</InputItemTitle>
                <InputItemInputField value={email} onChange={handleEmailChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Opening Hours</InputItemTitle>
                <InputItemInputField value={openingHours} onChange={handleOpeningHoursChange}></InputItemInputField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Price Level</InputItemTitle>
                <InputItemSelectField value={priceLevel} onChange={handlePriceLevelChange}>
                    <option value="">Select a value...</option>
                    <option value="C">$</option>
                    <option value="A">$$</option>
                    <option value="E">$$$</option>
                </InputItemSelectField>
            </InputItemDiv>
            <InputItemDiv>
                <InputItemTitle>Image</InputItemTitle>
                <input type="file"  onChange={handleImageFileChange}/>
                {imageFile?<span>{imageFile.name}</span>:<span></span>}
                {/*<InputItemImageUpload value={imageFile} onChange={handleImageFileChange} type={"file"} id={"upload"}/>*/}
            </InputItemDiv>
        </InputGridDiv>
        <SubmitButtonDiv>
            <SubmitButtonButton type="submit">SUBMIT</SubmitButtonButton>
        </SubmitButtonDiv>
    </BodyForm>
      </div>
  );
}

export default CreateRestaurant;
